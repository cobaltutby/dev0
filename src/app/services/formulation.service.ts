
import { Injectable }       from '@angular/core';

import { Router}                    from '@angular/router';

import { DesignService }            from './design.service';
import { ExperimentSetupService }   from './experimentsetup.service';
import { StateService }             from './state.service';
import { StateParamsService }       from './stateparams.service';
import { HTTPService }              from './http.service';
import { ConfigService }            from './config.service';
import { AppService }               from './app.service';

import { FormulationData, FormulationDataType, ColumnHeaders }    from '../types/types';
import { FormulationResult }    from '../types/types';

declare var Handsontable: any;
//declare var Plotly: any;

@Injectable()
export class FormulationService 
{
    data: {}; 
    gotData = false;

    processHot: any;
    formulationAllDiv = document.getElementById('formulation-all');
    holeFillHot: any;
    processHotDiv = document.getElementById('process-formulation-plot');
    holeFillHotDiv: any;
    protocolParameters: any;
    parameterNames: any [] = [];
    processData: any;
    
    mainBatchFormulation: any;
    holeFillFormulation: any;
    
    formulationData: FormulationData;
    columnHeaders: ColumnHeaders [];

    executionMode = 'manual';



    constructor(
                private app:              AppService,
                private state:            StateService,
                private stateParams:      StateParamsService,
                private ppService:        HTTPService, 
                private configService:    ConfigService,
                private design:           DesignService,
                private experimentSetup:  ExperimentSetupService,
                private router:           Router,
                )
    {
        this.formulationData = new FormulationData();
        Handsontable.renderers.registerRenderer('targetIngredientRenderer', this.targetIngredientRenderer);
        Handsontable.renderers.registerRenderer('plannedValueRenderer', this.plannedValueRenderer);
        Handsontable.renderers.registerRenderer('actualValueRenderer', this.actualValueRenderer);
        Handsontable.renderers.registerRenderer('firstColRenderer', this.firstColRenderer);
    }
    plannedValueRenderer(instance: any, td: any, row: any, col: any, prop: any, value: any, cellProperties: any)
    {
        Handsontable.renderers.TextRenderer.apply(this, arguments);
        
        var plannedProp = prop;
        var actualProp = plannedProp.replace('planned', 'actual');
        
        var okBackground = '#CCE0F1';
        var errorBackground = '#BBCFE0';
        
        if (!instance.getSourceData()[row]['ingredient'])
            {
                return;
            }
        
        if (instance.getSourceData()[row]['ingredient'] && instance.getSourceData()[row]['ingredient'].match(/ing.*/))
        {
            okBackground = '#F4F6F9';
            errorBackground = '#E3E5E8';
        }
        
        if (instance.getSourceData()[row][plannedProp] == instance.getSourceData()[row][actualProp])
        {
            td.style.background = okBackground;
        } 
        else if ((instance.getSourceData()[row][actualProp] === "") || (instance.getSourceData()[row][actualProp] === 0))
        {
            td.style.background = okBackground;
        }
        else if (value != instance.getSourceData()[row][actualProp])
        {
            td.style.background = errorBackground;
        }
    };
    targetIngredientRenderer(instance: any, td: any, row: any, col: any, prop: any, value: any, cellProperties: any)
    {
        Handsontable.renderers.TextRenderer.apply(this, arguments);
        td.style.fontWeight = 'bold';
        td.style.background = '#CEC';
    }
    actualValueRenderer(instance: any, td: any, row: any, col: any, prop: any, value: any, cellProperties: any)
    {
        Handsontable.renderers.TextRenderer.apply(this, arguments);
        
        var actualProp = prop;
        var plannedProp = actualProp.replace('actual', 'planned');
        
        var okBackground = '#CCE0F1';
        var errorBackground = '#BBCFE0';
        
        if (!instance.getSourceData()[row]['ingredient'])
        {
            return;
        }
        
        if (instance.getSourceData()[row]['ingredient'] && instance.getSourceData()[row]['ingredient'].match(/ing.*/))
        {
            okBackground = '#F4F6F9';
            errorBackground = '#E3E5E8';
        }
        
        if (instance.getSourceData()[row][plannedProp] == instance.getSourceData()[row][actualProp])
        {
            td.style.background = okBackground;
        }
        else if ((value !== "") && (value !== 0) && (instance.getSourceData()[row][plannedProp] != value))
        {
            td.style.background = errorBackground;
        }
    }
    firstColRenderer(instance: any, td: any, row: any, col: any, prop: any, value: any, cellProperties: any)
    {
        Handsontable.renderers.TextRenderer.apply(this, arguments);
        
        if (!instance.getSourceData()[row]['ingredient'])
        {
            return;
        }
        
        if (instance.getSourceData()[row]['ingredient'] && instance.getSourceData()[row]['ingredient'].match(/ing.*/))
        {
            td.style.background = '#F4F6F9';
        }
        else
        {
            td.style.background = '#CCE0F1';
        }
    }

    switchToStability()
    {   
      //this.router.navigate(['/stability']);
    }
    loadFormulationView()
    {

        if (this.formulationData.gotData)
        {
            this.setupView();        
        }
        else{
            let params = {TrialName:this.stateParams.trialname};
           
            this.ppService.runProtocolGet7(this.configService.formulationDataProtocol,params)
            .subscribe( newdata => 
            {

                let data = newdata as FormulationDataType;
                this.formulationData.data = data;
                this.formulationData.gotData = true;
                this.formulationData.isDoseResponse = false;
                
                for (let ii = 0; ii < data.processData.length; ii++)
                {
                    if (data.processData[ii]['process_step'].match(/.*aliquot.*/))
                    {
                        this.formulationData.isDoseResponse = true;
                        break;
                    }
                }
                
                if (this.formulationData.isDoseResponse)
                {
                    this.formulationData.mainBatchFormulation.data = [];
                    this.formulationData.holeFillFormulation.data = [];
                    this.formulationData.mainBatchFormulation = this.formulationData.mainBatchFormulation;
                    this.formulationData.holeFillFormulation = this.formulationData.holeFillFormulation;
                    
                    let mainBatch = true;
                    
                    for (let ii = 0; ii < data.processData.length; ii++)
                    {
                       
                        if (mainBatch)
                        {
                            this.formulationData.mainBatchFormulation.data.push(data.processData[ii]);
                        
                            if (data.processData[ii]['process_step'].match(/.*aliquot.*/))
                            {
                                mainBatch = false;
                            }
                        }
                        else
                        {
                            this.formulationData.holeFillFormulation.data.push(data.processData[ii]);
                        }
                    }
                }

                this.setupView();
            }, error => {
                console.log(error);
            })

        }
    }
    setupView()
    {

        this.processData = this.formulationData.data.processData;
        this.columnHeaders = this.formulationData.data.columnHeaders;
        
        if (this.formulationData.isDoseResponse)
        {
            this.mainBatchFormulation = this.formulationData.mainBatchFormulation.data;
            this.holeFillFormulation = this.formulationData.holeFillFormulation.data;
        }

        if (this.formulationData.isDoseResponse)
        {
            this.createDoseResponseHOT();
            this.createHoleFillHOT();
        }
        else
        {
            this.createNormalProcessHOT();
        }
    }
    printGrid()
    {
        this.printDiv("print-area");
    }
    printDiv(divName: string) 
    {
        this.app.printDiv(divName);
    };
    copyPlannedToActual()
    {
        for (var ii = 0; ii < this.formulationData.data.processData.length; ii++)
        {
            for (var propt in this.formulationData.data.processData[ii])
            {
                if (propt.match(/.*planned/))
                {
                    var actualProp = propt.replace('planned', 'actual');
                    
                    if (this.formulationData.data.processData[ii][actualProp] === "")
                    {
                        this.formulationData.data.processData[ii][actualProp] = this.formulationData.data.processData[ii][propt];
                    }
                }
            }
        }
        
        if (typeof this.processHot !== 'undefined' && this.processHot !== null)
        {
            this.processHot.render();
        }
        
        if (typeof this.holeFillHot !== 'undefined' && this.holeFillHot !== null)
        {
            this.holeFillHot.render();
        }
        
        
    }
    saveData()
    {
        let data = this.formulationData.data.processData;
        
        let params = {TrialName: this.stateParams.trialname, _bodyParam:"FormData"};
        
        this.ppService.runProtocolPost1(this.configService.saveFormulationData, params, data)
        .map((response: any): any => 
        {
            console.log("Now create stability steps");
            this.ppService.runProtocolGet1(this.configService.createStabilitySteps, params)
            .subscribe( 
                newdata => 
                {
                    let data:string = newdata;
                    console.log(newdata);
                }, 
                error => 
                {
                    console.log(error);
                });
                return response;
        });

    }

    clearActual()
    {
        for (var ii = 0; ii < this.formulationData.data.processData.length; ii++)
        {
            for (var propt in this.formulationData.data.processData[ii])
            {
                if (propt.match(/.*actual/))
                {
                    this.formulationData.data.processData[ii][propt] = ""; 
                }
            }
        }
        if (typeof this.processHot !== 'undefined' && this.processHot !== null)
        {
            this.processHot.render();
        }
        
        if (typeof this.holeFillHot !== 'undefined' && this.holeFillHot !== null)
        {
            this.holeFillHot.render();
        }
    }

    getPDF()
    {
        var params = {TrialName: this.stateParams.trialname, _bodyParam:"FormData"};
        
        var data = this.formulationData;
        
        this.ppService.runProtocolPost(this.configService.pdfBatchSheet, params, data)
            .subscribe(
            newdata =>
            {
                window.open("https://experiment-unilever-dev.bioviaonline.com:9943/LabAutomation/BatchSheet", '_blank');
            },
            error => 
            {
                console.log(error)
            });
    }
    // createProcessPlot()
    // {
    //     console.log('createProcessPlot');
    //     var processPlotDiv = document.getElementById('process-formulation-plot');	
    //     console.log('processPlotDiv');
    //     console.log(processPlotDiv);
    //     var myProcessData = this.processData;

    //     var plotData: any = [];

    //     var parameterNameKeys: any = [];

    //     for (var ii = 0; ii < this.parameterNames.length; ii++)
    //     {
    //         parameterNameKeys.push(this.parameterNames[ii].name_key);
    //     }

    //     for (var jj = 0; jj < parameterNameKeys.length; jj++)
    //     {
    //         var names: any = [];
    //         var data: any = [];

    //         /*for (var ii = 0; ii < myProcessData.length; ii++)*/
    //         for (var ii = myProcessData.length - 1; ii >= 0; ii--)
    //         {		
    //             names.push(this.processData[ii].sample_name);
    //             data.push(this.processData[ii][parameterNameKeys[jj]]);
    //         }

    //         var trace = {
    //             x: data,
    //             y: names,
    //             name: parameterNameKeys[jj],
    //             xaxis: 'x1',
    //             yaxis: 'y1',
    //             type: 'bar',
    //             orientation: 'h'
    //         }

    //         plotData.push(trace);
    //     }


    //     var layout = {
    //         title:'Process Data',
    //         height:500,
    //         width:800,
    //         barmode: 'stack',
    //         legend: {"orientation": "h"}
    //         //autosize:true,
    //     };


    //     //Plotly.purge(processPlotDiv);

        // Plotly.newPlot(processPlotDiv,
        //                 plotData,
        //                 layout, 
        //                 {modeBarButtonsToRemove: ['sendDataToCloud'],
        //                  displaylogo: false,
        //                  doubleClick: 'reset+autosize'
        //                 }
        //             );

    // };
    upload(file: any) {
        console.log(file);
        // Upload.upload(
        //     {
        //         url: '/jobs/',
        //         data: {file: file}
        //     }).then(function (resp) {
        //         console.log(resp);
                
        //     }, function (resp) {
        //         console.log(resp);

        //     }, function (evt) {
        //         console.log(evt);

        //     });
    };
    uploadAndRun(file: any) 
    {
        console.log(file);
        // Upload.upload({
        //     url: '/jobs/',
        //     data: {file: file}
        // }).then(function (resp) {
        //     console.log(resp);

        // }, function (resp) {
        //     console.log(resp);

        // }, function (evt) {
        //     console.log(evt);

        // }).then(function (resp) {
        //     var params = {TrialName:$stateParams.trialname};
        //     ppService.runProtocolGet(configService.formulationProtocol,params).then(function(response){
        //         console.log(respose);
                
        //     }, function(response){
        //         console.log(response);
        //     });
     
        // });
    };
    getData(trialName: string)
    { 
        var formulationParams = {TrialName:trialName};
        this.ppService.runProtocolGet8(this.configService.formulationProtocol,formulationParams)
            .subscribe( 
                newdata =>
                {   let data = <FormulationResult>newdata;
                    this.data = data;
                    this.gotData = true;
                }, 
                error =>
                {
                    console.log(error);
                }); 
    }
    createDoseResponseHOT()    
    {
        let myColHeaders :any[] = [];
        let myColumns :any[] = [];
        
        myColHeaders.push(" ");
        
        myColHeaders.push("Material code");
        myColHeaders.push("RM used & Lot No.");
        myColHeaders.push("% activity of RM");
        //myColHeaders.push("% inclusion in product");
        myColHeaders.push("Unit of measure");
                
        let firstColumn = {data: 'ingredient', readOnly : true, width : 300};
        
        myColumns.push(firstColumn);
        
        myColumns.push({data: 'material_code', readOnly: true, width: 200});
        myColumns.push({data: 'rm_used_lot_no', width: 200});
        myColumns.push({data: 'percent_activity', readOnly: true, width: 200});
        myColumns.push({data: 'unit_of_measure', readOnly: true, width: 200});
        
        let addedPercent = false;
        let addedPlanned = false;
        let addedActual = false;
        
        for (let propt in this.formulationData.data.columnHeaders[0].columns)
        {
            let prop = this.formulationData.data.columnHeaders[0].columns[propt];
            
            if (addedPercent && addedPlanned && addedActual)
            {
                break;
            }
            if (prop == ' ') 
            {
                let column : {
                    data : string;
                    width : number;
                    type : string;
                    readOnly?: boolean;
                    format?: string;
                    editor?: string
                };
                column = {
                    data : prop,
                    width : 160,
                    type : 'string',
                    readOnly: false};
            }
            if ((prop.match(/.*-planned.*/)) || (prop.match(/.*-actual.*/)) || (prop.match(/.*-percent.*/)))
            {
                let column : {
                    data : string;
                    width : number;
                    type : string;
                    readOnly?: boolean;
                    format?: string;
                    editor?: string
                };
                column = {
                    data : prop,
                    width : 160,
                    type : 'numeric',
                    readOnly: false};

                if (prop.match(/.*planned.*/) && !addedPlanned)
                {
                    myColHeaders.push('Planned');
                    column.readOnly = true;
                    addedPlanned = true;
                    column.format = "0.0[00000000]";
                    myColumns.push(column);
                }
                else if (prop.match(/.*percent.*/) && !addedPercent)
                {
                    column.readOnly = true;
                    myColHeaders.push("Percent");
                    addedPercent = true;
                    column.format = "0.0[00000000]";
                    myColumns.push(column);
                }
                else if (prop.match(/.*actual.*/) && !addedActual)
                {
                    column.editor = 'numeric';
                    myColHeaders.push('Actual');
                    addedActual = true;
                    column.format = "0.0[00000000]";
                    myColumns.push(column);
                }
            }
        }
        
        let range :any[] = [];
        
        for (let item in this.formulationData.mainBatchFormulation.data)
        {
            if ((this.formulationData.mainBatchFormulation.data[item]) &&
                (this.formulationData.mainBatchFormulation.data[item].process_step) &&
                (this.formulationData.mainBatchFormulation.data[item].process_step.match(/^ing/)))
            {
                range.push(item);
            }
        }
        
        this.formulationData.mainBatchFormulation.data.push({});
        this.formulationData.mainBatchFormulation.data.push({});
        
        this.processHotDiv = document.getElementById('main-batch-formulation-table');
        let hotSettings = {
                    data: this.formulationData.mainBatchFormulation.data,
                    colHeaders: myColHeaders,
             headerTooltips:{
                        rows: true,
                        columns: true
                    },
            manualColumnResize: true,
                    afterChange:  (changes:any, source:any) => {
                        if (source !== "loadData") {
                            //updateWaterTotal();
                            //this.createProcessPlot();
                        }

                    },
                    columns: myColumns,
                    cells:(row:any, col:any, prop:any) =>{
                        let cellProperties : {renderer : string};
                        cellProperties= {renderer: ''};
                    
                        if (prop.match(/.*planned/) || (prop.match(/.*percent/)))
                        {
                            cellProperties.renderer = 'plannedValueRenderer';
                        }
                        else if (prop.match(/.*actual/))
                        {
                            cellProperties.renderer = 'actualValueRenderer';
                        }
                        else
                        {
                            cellProperties.renderer = 'firstColRenderer';
                        }
                        
                        return cellProperties;
                    },
            columnSummary: [
                {
                    destinationColumn: 5,
                    destinationRow: 0,
                    reversedRowCoords: true,
                    type: 'sum',
                    ranges: range,
                    forceNumeric: true
                },
                 {
                    destinationColumn: 6,
                    destinationRow: 0,
                    reversedRowCoords: true,
                    type: 'sum',
                    ranges: range,
                    forceNumeric: true
                },
                 {
                    destinationColumn: 7,
                    destinationRow: 0,
                    reversedRowCoords: true,
                    type: 'sum',
                    ranges: range,
                    forceNumeric: true
                }
            ]
                };  
        this.processHot = new Handsontable(this.processHotDiv,hotSettings);
        
        // var autoColumnSize =  this.processHot.getPlugin('autoColumnSize');
        //  this.processHot.updateSettings(
        //      {
        //         colWidths: function(index: number = 150)
        //             {
        //                 return autoColumnSize.getColumnWidth(index);
        //             }
        //     });
        
        this.processHot.render();
    }
createHoleFillHOT()
{
    console.log('createHoleFillHOT');        
        let myColHeaders :any[] = [];
        let myColumns :any[] = [];
        
        myColHeaders.push(" ");
        
        myColHeaders.push("Material code");
        myColHeaders.push("RM used & Lot No.");
        myColHeaders.push("% activity of RM");
        //myColHeaders.push("% inclusion in product");
        myColHeaders.push("Unit of measure");
                
        let firstColumn = {
            data : 'ingredient',
            readOnly : true   
        };
        myColumns.push(firstColumn);
        /*myColumns.push({data: "material_code"});
        myColumns.push({data: "rm_lot_used"});
        myColumns.push({data: "percent_activity"});
        myColumns.push({data: "percent_inclusion"});
        myColumns.push({data: "unit_of_measure"});*/
        
        myColumns.push({data: 'material_code', readOnly: true});
        myColumns.push({data: 'rm_used_lot_no'});
        myColumns.push({data: 'percent_activity', readOnly: true});
        myColumns.push({data: 'unit_of_measure', readOnly: true});
        
        let addedPercent = false;
        let addedPlanned = false;
        let addedActual = false;
        for (let propt in this.formulationData.data.columnHeaders[0].columns)
        {
            let prop = this.formulationData.data.columnHeaders[0].columns[propt];
            
            if ((prop.match(/.*-planned.*/)) || (prop.match(/.*-actual.*/)) || (prop.match(/.*-percent.*/)))
            {
                let column : {
                    data : string;
                    width?: number;
                    type : string;
                    readOnly?: boolean;
                    format?: string;
                    editor?: string
                };
                column = {
                    data:prop,
                    type : 'numeric'
                };

                if (prop.match(/.*planned.*/))
                {
                    myColHeaders.push('Planned');
                    column.readOnly = true;
                    addedPlanned = true;
                    column.format = "0.0[00000000]";
                    myColumns.push(column);
                }
                else if (prop.match(/.*percent.*/))
                {
                    column.readOnly = true;
                    myColHeaders.push("Percent");
                    addedPercent = true;
                    column.format = "0.0[00000000]";
                    myColumns.push(column);
                }
                else if (prop.match(/.*actual.*/))
                {
                    column.editor = 'numeric';
                    myColHeaders.push('Actual');
                    addedActual = true;
                    column.format = "0.0[00000000]";
                    myColumns.push(column);
                }
            }
        }
        
        let nestedHeaders :any[] = [];
        let topLine :any[] = [];
        let secondLine :any[] = [];
        
        topLine.push(" ");
        secondLine.push(" ");

        topLine.push("Material code");
        topLine.push("RM used & Lot No.");
        topLine.push("% activity of RM");
        topLine.push("Unit of measure");
        secondLine.push(" ");
        secondLine.push(" ");
        secondLine.push(" ");
        secondLine.push(" ");
        
        for (let ii = 0; ii < this.columnHeaders[0].columns.length; ii++)
        {
            let match: string[];
            match = this.columnHeaders[0].columns[ii].match(/(.*)-(.*)/);
            
            if ((typeof match === 'undefined') || (match === null))
            {
                continue;
            }
            
            if (match[2] === 'percent')
            {
                topLine.push({label: this.capitalizeFirstLetter(match[1]), colspan: 2});
            }

            secondLine.push(this.capitalizeFirstLetter(match[2]));
        }
        
        nestedHeaders.push(topLine);
        nestedHeaders.push(secondLine);
        
        this.holeFillHotDiv = document.getElementById('hole-fill-formulation-table');
        let hotSettings = {
                    data: this.formulationData.holeFillFormulation.data,
                    //colHeaders: myColHeaders,
                    nestedHeaders: nestedHeaders,
                    // colWidths: [350,
                    // 70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70],

                    contextMenu: true,
                    afterChange:  (changes:any, source:any) => {
                        if (source !== "loadData") {
                            //updateWaterTotal();
                            //this.createProcessPlot();
                        }

                    },
                    columns: myColumns,
            
                    cells: (row:any, col:any, prop:any) => {
                        let cellProperties : {renderer : string};
                    cellProperties = {renderer : ''};
                        if (prop.match(/.*planned/) || (prop.match(/.*percent/)))
                        {
                            cellProperties.renderer = 'plannedValueRenderer';
                        }
                        else if (prop.match(/.*actual/))
                        {
                            cellProperties.renderer = 'actualValueRenderer';
                        }
                        else
                        {
                            cellProperties.renderer = 'firstColRenderer';
                        }
        
                        /*if (row === 0)
                        {
                            cellProperties.readOnly = true;
                        }
                        if (row % 2 === 0)
                        {
                            cellProperties.readOnly = true;
                            cellProperties.renderer = 'targetIngredientRenderer';
                        }*/

                        return cellProperties;
                    }   
                };
                console.log('hotSettings');  
                console.dir(hotSettings);  
        this.holeFillHot = new Handsontable(this.holeFillHotDiv, hotSettings);
    };
  createNormalProcessHOT()
  {
        let myColHeaders:any[]  = [];
        let myColumns:any[]  = [];

        myColHeaders.push(" ");

        let firstColumn = {
            data :'ingredient',
            readOnly : true
        };

        myColumns.push(firstColumn);
        
        myColumns.push({data: 'materialcode', readOnly: true});
        myColumns.push({data: 'rm_used_lot_no'});
        myColumns.push({data: 'percentactive', readOnly: true});
        myColumns.push({data: 'unit_of_measure', readOnly: true});
        
        let myColumnSummary :any[] = [];

        let range :any[] = [];
        
        for (let item in this.processData)
        {
            if ((this.processData[item]) &&
                (this.processData[item].process_step) &&
                (this.processData[item].process_step.match(/^ing/)))
            {
                let tmp :any[] = [];
                tmp.push(parseInt(item));
                range.push(tmp);
            }
        }
        
        for (let ii = 0; ii < this.columnHeaders[0].columns.length; ii++)
        {
            if (!(this.columnHeaders[0].columns[ii].match(/.*-planned.*/) ||
                this.columnHeaders[0].columns[ii].match(/.*-percent.*/) ||
                this.columnHeaders[0].columns[ii].match(/.*-actual.*/)))
            {
                continue;
            }
                
                
            myColHeaders.push(this.columnHeaders[0].columns[ii]);
            let column : {
                    data : string;
                    width?: number;
                    type : string;
                    readOnly?: boolean;
                    format?: string;
                    editor?: string
            };
            column = {
                data : this.columnHeaders[0].columns[ii],
                type : 'numeric',
            };
            
            if (this.columnHeaders[0].columns[ii].match(/.*-planned.*/) || this.columnHeaders[0].columns[ii].match(/.*-percent.*/))
                {
                    //column.editor = false;
                    column.readOnly = true;
                }
            else{
                column.editor = 'numeric';
            }
            
            column.format = "0.0[00000000]"

            myColumns.push(column);
            
            myColumnSummary.push({
                    destinationColumn: 4 + ii,
                    destinationRow: 0,
                    reversedRowCoords: true,
                    type: 'sum',
                    ranges: range,
                    forceNumeric: true
                })
        }
        
        let nestedHeaders :any[] = [];
        let topLine :any[] = [];
        let secondLine :any[] = [];
        
        topLine.push(" ");
        secondLine.push(" ");
        
        topLine.push("Material code");
        topLine.push("RM used & Lot No.");
        topLine.push("% activity of RM");
        topLine.push("Unit of measure");
        
        secondLine.push(" ");
        secondLine.push(" ");
        secondLine.push(" ");
        secondLine.push(" ");
         console.log('this.columnHeaders[0]');
        console.dir(this.columnHeaders[0]);
        for (let ii = 0; ii < this.columnHeaders[0].columns.length; ii++)
        {

            let myMatch = this.columnHeaders[0].columns[ii].match(/(.*)-(.*)/);
            console.log('myMatch!!');
            console.dir(myMatch);
            if ((typeof myMatch === 'undefined') || (myMatch === null))
            {
                console.log('**************continue*************');
                continue;
            }
            
            if (myMatch[2] === 'percent')
            {
                console.log('***topLine.push***');
                topLine.push({label: this.capitalizeFirstLetter(myMatch[1]), colspan: 2});
            }
            
            if (myMatch[2] === 'percent' || myMatch[2] === 'planned' || myMatch[2] === 'actual')
            {
                secondLine.push( this.capitalizeFirstLetter(myMatch[2]));
            }
        }
        console.log('top line');
        console.dir(topLine);
        console.log('secondLine');
        console.dir(secondLine);
        nestedHeaders.push(topLine);
        nestedHeaders.push(secondLine);
        
        this.processData.push({});
        this.processData.push({});

        this.processHotDiv = document.getElementById('process-formulation-table');
        let hotSettings = {
                    data: this.processData,
                    nestedHeaders: nestedHeaders,
                    //contextMenu: true,
                    columns: myColumns,

                    columnSummary: myColumnSummary,
                    cells: (row:any, col:any, prop:any) =>{
                        let cellProperties : {renderer : string};
                        cellProperties = {renderer : ''};
                        if (typeof prop !== 'string')
                        {
                            return cellProperties;
                        }
                        
                        if (prop.match(/.*planned/) || (prop.match(/.*percent/)))
                        {
                            cellProperties.renderer = 'plannedValueRenderer';
                        }
                        else if (prop.match(/.*actual/))
                        {
                            cellProperties.renderer = 'actualValueRenderer';
                        }
                        else
                        {
                            cellProperties.renderer = 'firstColRenderer';
                        }

                        return cellProperties;
                    }   
                }; 
                console.log('hotSettings!!!'); 
                console.dir(hotSettings); 
        this.processHotDiv.innerHTML = '';         
        this.processHot = new Handsontable(this.processHotDiv,hotSettings);
    }

    capitalizeFirstLetter(val: string) 
    {
    return val.charAt(0).toUpperCase() + val.slice(1);
}

}


