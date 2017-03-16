import { Injectable }               from '@angular/core';

import { Router }                   from '@angular/router';

import { DesignDataService }        from './designdata.service';
import { ExperimentSetupService }   from './experimentsetup.service';
import { StateService }             from './state.service';
import { StateParamsService }       from './stateparams.service';
import { HTTPService }              from './http.service';
import { ConfigService }            from './config.service';
import { AppService }               from './app.service';

import { Formulation }              from '../types/types';
import { ExperimentTypeData }       from '../types/types';
import { Process }                  from '../types/types';
import { TestSchedule }             from '../types/types';
import { AvailableTests }           from '../types/types';
import { Experiment }               from '../types/types';
import { Week }                     from '../types/types';
import { Temperature }              from '../types/types';
import { CalculatedFormulation }    from '../types/types';
import { FlowMaterial }             from '../types/types';


declare var Handsontable: any;
declare var Plotly: any;


@Injectable()
export class DesignService 
{
    saving:                 boolean;
    error:                  boolean;
    expTypes:               Experiment [];
    newWeek:                Week;
    newTemp:                Temperature;
    newTemps:               Temperature [];
    allFormulationsData:    any = [];
    flowMaterialLookupName: string;
    flowMaterialLookupID:   number;
    allFormulationsHot:     any;
    parentFormulationHOTDiv: HTMLElement;
    parentFormulationHOT: any;
    VVV: any;


    constructor(
                private router:           Router,
                private app:              AppService,
                private state:            StateService,
                private stateParams:      StateParamsService,
                private ppService:        HTTPService, 
                private configService:    ConfigService,
                private designData:       DesignDataService,
                private experimentSetup:  ExperimentSetupService,
                )
    {
        this.saving = false;
        this.error = false;
        this.newWeek =  new Week();
        this.newTemp = new Temperature();
    }
    
    loadexperimentType()
    {
        let params = {TrialName: this.app.selection.trial_name};
        this.ppService.runProtocolGetVVV()
            .subscribe( 
                newdata => 
                    {
                        this.VVV = newdata;
                    })
        this.ppService.runProtocolGet(this.configService.experimentTypeProtocol,params)
        .subscribe(
            newdata => {    
                            let data: ExperimentTypeData = <ExperimentTypeData>newdata;
                            this.designData.experimentType.data = data;
                            this.designData.experimentType.gotData = true;
                            console.log('loadexperimentType');
                            console.dir(this.designData);
                        }, 
            error => console.log('loadexperimentType: ' + error));
    
    };
    loadProcessParameters()
    {
        let params = {TrialName:this.app.selection.trial_name};
        
        this.ppService.runProtocolGet(this.configService.processParametersProtocol, params)
        .subscribe(
            newdata => {    
                            let data: Process [] = newdata.parameters;
                            this.experimentSetup.processes = data;
                        },
             error => console.log('loadProcessParameters: ' + error));
      
    };
    loadDefaultTestSchedule()
    {
        let params = {TrialName:this.app.selection.trial_name};
        this.ppService.runProtocolGet(this.configService.testScheduleProtocol, params)
        .subscribe(
            newdata => {
                            let data: TestSchedule = newdata;
                            this.experimentSetup.testSchedule = data;
                        }, 
            error => console.log('loadDefaultTestSchedule: ' + error));

    };
    loadAvailableTests()
    {
        let params = {TrialName:this.app.selection.trial_name};
        
        this.ppService.runProtocolGet(this.configService.availableTestsProtocol, params)
        .subscribe(
            newdata => {
                            let data: AvailableTests = newdata;
                            this.experimentSetup.availableTests = data.tests;

                        },
            error => console.log('loadAvailableTests: ' + error));      
    };
    
    loadExistingExperiment()
    {
          let params = {TrialName:this.app.selection.trial_name};
        
            this.ppService.runProtocolGet5(this.configService.experiment2JSON, params)
            .subscribe(
                newdata => {
                            let data: Experiment  = newdata;

                             if (typeof data === 'undefined' ||
                            typeof data[0] === 'undefined' ||
                            typeof data[0].ReadOnly === 'undefined' ||
                            typeof data[0].ReadOnly.readOnly === 'undefined' ||
                            data[0].ReadOnly.readOnly === false)
                                {
                                    return;
                                }
                            console.log('loadExistingExperiment');
                            //this.designData = data[0];
                            this.experimentSetup.availableTests                 = this.designData.availableTests;
                            //this.experimentSetup.availableUnits               = this.designData.availableUnits;
                            this.experimentSetup.calculatedFormulations         = this.designData.calculatedFormulations;
                            this.experimentSetup.experimentType.selected        = this.designData.experimentType.selected;
                            this.experimentSetup.gotData                        = this.designData.gotData;
                            this.experimentSetup.parentFormulation.formulation  = this.designData.parentFormulation.data.formulation;
                            this.experimentSetup.processData                    = this.designData.processData;
                            //this.experimentSetup.processes              = this.designData.processes;
                            //this.experimentSetup.testSchedule           = this.designData.testSchedule;
                            //this.experimentSetup.parentFormulation.gotData = true;

                            },
                error => console.log('loadExistingExperiment' + error));

    };
    saveToExperiment()
    {
        this.saving = true;//!this.saving;
        
        var calculatedFormulations = this.experimentSetup.calculatedFormulations;        
        this.experimentSetup.calculatedFormulations.data = calculatedFormulations.data;
        
        var params = {TrialName:this.app.selection.trial_name, _bodyParam:"FormData"};
        var data = this.experimentSetup;
        
        // this.ppService.runProtocolPost(this.configService.saveToExperimentProtocol, params, data)
        //     .subscribe(
        //         newdata => 
        //         {
        //             console.log("Success"); 
        //             this.saving = false;
        //             this.app.launchExperiment();
        //         },
        //         error => 
        //         {
        //             console.log("Failure");
        //             this.saving = false; 
        //             this.error = true;
        //             console.log(error)
        //         });  
    };


    removeTestWeek()
    {
        let tmpWeeks:  Week [] = [];
        
        let removeWeek = this.newWeek.week;
        
        for (let ii = 0; ii < this.experimentSetup.testSchedule.allWeeks.length; ii++)
        {
            if (this.newWeek.week != this.experimentSetup.testSchedule.allWeeks[ii].week)
            {
                tmpWeeks.push(this.experimentSetup.testSchedule.allWeeks[ii]);
            }
        }
        
        for (let ii = 0; ii < this.experimentSetup.testSchedule.schedule.length; ii++)
        {
            let theseTests:  Week [] = [];
            
            for (let jj = 0; jj < this.experimentSetup.testSchedule.schedule[ii].weeks.week.length; jj++)
            {
                if ((this.newWeek.week) !== this.experimentSetup.testSchedule.schedule[ii].weeks.week[jj].week)
                {
                    theseTests.push(this.experimentSetup.testSchedule.schedule[ii].weeks.week[jj]);
                }
            }
            
            this.experimentSetup.testSchedule.schedule[ii].weeks.week = theseTests;
        }
        
        this.experimentSetup.testSchedule.allWeeks = tmpWeeks;
    }
    newTestWeek()
    {

        for (var ii = 0; ii < this.experimentSetup.testSchedule.allWeeks.length; ii++)
        {
            if (this.newWeek.week == this.experimentSetup.testSchedule.allWeeks[ii].week)
            {
                return;
            }
        }

        let week = new Week();
        week.week = this.newWeek.week;
        week.doTest = this.newWeek.doTest;

        this.experimentSetup.testSchedule.allWeeks.push(week);
        this.experimentSetup.testSchedule.allWeeks = this.experimentSetup.testSchedule.allWeeks
            .sort((n1:Week, n2:Week) => 
                {
                    if (+n1.week > +n2.week) {
                        return 1;
                    }

                    if (+n1.week < +n2.week) {
                        return -1;
                    }

                    return 0;
                });
        for (var ii = 0; ii < this.experimentSetup.testSchedule.schedule.length; ii++)
        {
            this.experimentSetup.testSchedule.schedule[ii].weeks.week.push({week: this.newWeek.week, doTest: true});
            this.experimentSetup.testSchedule.schedule[ii].weeks.week = this.experimentSetup.testSchedule.schedule[ii].weeks.week
                .sort((n1:Week, n2:Week) => 
                    {
                        if (+n1.week > +n2.week) {
                            return 1;
                        }

                        if (+n1.week < +n2.week) {
                            return -1;
                        }

                        return 0;
                    });
        }

    }
    newStorageTemp()
    {

        for (var ii = 0; ii < this.experimentSetup.testSchedule.temperatures.length; ii++)
        {
            if (this.newTemp.temperature === this.experimentSetup.testSchedule.temperatures[ii].temperature)
            {
                return;
            }
        }

        this.experimentSetup.testSchedule.temperatures.push({temperature: this.newTemp.temperature});
    }
    removeStorageTemp()
    {
        for (var ii = 0; ii < this.experimentSetup.testSchedule.temperatures.length; ii++)
        {
            if (this.newTemp.temperature === this.experimentSetup.testSchedule.temperatures[ii].temperature)
            {
                this.experimentSetup.testSchedule.temperatures.splice(ii,1);
            break;            }
        }

    }
    newProcessItem() 
    {

        for(let process of this.experimentSetup.processes)
        {
            if(process.name === this.state.selection.process.name)
            {
                this.state.selection.process = process;
            }
        }
        this.experimentSetup.processData.unshift(
            {
                type: 'process',
                name: this.state.selection.process.name,
                caption: this.state.selection.process.caption,            
            });
    };
    removeProcessItem(process: Process) 
    {
        console.log('removeProcessItem');
        console.dir(process);
        console.dir(this.experimentSetup.processData);

        for(let i in this.experimentSetup.processData)
        {
            if(this.experimentSetup.processData[i].name === process.name)
            {
                this.experimentSetup.processData.splice((+i), 1);
                break;
            }
        }
        console.dir(this.experimentSetup.processData);
    }
    submitExpTypeForm()
    {
        console.log('submitExpTypeForm');
        //Object.assign(this.experimentSetup.experimentType, this.experimentSetup.experimentType.selected);
        let itv = this.experimentSetup.experimentType['Ingredient To Vary'];
        let bi = this.experimentSetup.experimentType['Balancing ingredient'];
        this.experimentSetup.experimentType['Ingredient To Vary'] = [];
        this.experimentSetup.experimentType['Balancing ingredient'] = [];
        let params = {TrialName:this.app.selection.trial_name, _bodyParam:"FormData"};
        let data = this.experimentSetup;
        
        console.dir(this.experimentSetup);
        if( Array.isArray(itv))
        {
            for(let formulation of this.experimentSetup.parentFormulation.data.formulation)
            {
                for(let i in itv)
                {
                    if(i == formulation.name)
                    {
                        this.experimentSetup.experimentType['Ingredient To Vary'].push(formulation);
                    }
                }

            }
        }
        else
        {
            for(let formulation of this.experimentSetup.parentFormulation.data.formulation)
            {
                if(itv == formulation.name)
                {
                    this.experimentSetup.experimentType['Ingredient To Vary'] = formulation;
                }
            }
        }

        for(let formulation of this.experimentSetup.parentFormulation.data.formulation)
        {
            if(bi == formulation.name)
            {
                this.experimentSetup.experimentType['Balancing ingredient'] = formulation;
            }

        }

        console.log('runProtocolPost');
        this.ppService.runProtocolPost(this.configService.calculateAllFormulationsProtocol, params, data)
            .subscribe( newdata => 
                {   console.log('newdata');
                    console.dir(newdata);
                    let data: CalculatedFormulation [] = newdata.formulation;
                    this.experimentSetup.calculatedFormulations.data = data;
                    this.experimentSetup.calculatedFormulations.gotData = true;
                    this.designData.calculatedFormulations.data = this.experimentSetup.calculatedFormulations.data;
                    //this.experimentSetup.availableUnits = ["g", "Kg"];
                    this.setUpAllFormulationsHOT();
                },  error => 
                {
                    console.log(error);            
                })
    }
    findFlowMaterialName()
    {
        this.findFlowMaterial(this.flowMaterialLookupName, null);
    }
    
    findFlowMaterialID()
    {
        this.findFlowMaterial(null, this.flowMaterialLookupID);
    }
    
    findFlowMaterial(name: string, id: number)
    {

        var params = {TrialName:this.app.selection.trial_name, FlowMaterialName: name, FlowMaterialID: id};
        
        this.ppService.runProtocolGet(this.configService.findFlowMaterial, params)
        .subscribe(
            newdata => { 
                            let data: FlowMaterial;
                            data = <FlowMaterial>newdata;
                            data.name = 'xxx'; //fake responce
                            console.log("Success"); 
                            this.addFlowMaterial(data.name);
                        },
            error =>    {
                            alert("No materials found");
                            console.log("Failure");
                            console.log(error)
                        });   
    }


    
    addFlowMaterial(materialName: string)
    {
        let expSetup = this.experimentSetup.calculatedFormulations.data;
        
        for (var ii in expSetup)
        {
            if (expSetup[ii].formulation)
            {
                if (!(expSetup[ii].formulation[materialName]))
                {
                    expSetup[ii].formulation[materialName] = {name_key: materialName, percent_weight: 0.0};
                }
            }
        }
        
        this.experimentSetup.calculatedFormulations.data = expSetup;

        this.setUpAllFormulationsHOT();
    }
 setUpParentFormulationHOT()    
 {
    this.parentFormulationHOTDiv.innerHTML = '';
    let thisColHeaders: any = [];
    let thisColumns:    any = [];
    let thisData        = {};
    let data: Formulation [] = [];
    data = this.designData.parentFormulation.data.formulation;

    for (var ii = 0; ii < data.length; ii++)
    {
        thisColHeaders.push(data[ii].name);
        
        let column = 
        {
            data: data[ii].name_key,
            type : 'numeric',
            editor : 'numeric',
            format : "0.0[0000000000]",
            readOnly : true,
            //width : (document.getElementById('right').offsetWidth)/data.length,
        };

        thisColumns.push(column);
        
        thisData[data[ii].name_key] = data[ii].percent_weight_as_100;
    }

    let parentFormulationHOTDiv = this.parentFormulationHOTDiv;

    let parentFormulationHOTSettings = {};
    parentFormulationHOTSettings = 
    {
        data: thisData,
        colHeaders: thisColHeaders,
        contextMenu: true,
        //width: document.getElementById('right').offsetWidth,
        columns: thisColumns,
        colWidths: 80,
        headerTooltips:{
                        rows: true,
                        columns: true
                        },
        manualColumnResize: true,
        afterChange:  (changes:any, source:any) => 
                                    {
                                        if (source !== "loadData") {
                                            this.newHOTRender (this.parentFormulationHOT);
                                            return true;
                                    }

                                        },

    }; 
    this.parentFormulationHOT = {};
    this.parentFormulationHOT = new Handsontable(this.parentFormulationHOTDiv, parentFormulationHOTSettings);
    this.newHOTRender (this.parentFormulationHOT);
        
    };

    newHOTRender (hot: any)
    {
        hot.setDataAtCell(0, 0, hot.getDataAtCell(0, 0));
        hot.render();
    }

    setUpAllFormulationsHOT () 
    {
        console.log('setUpAllFormulationsHOT');
        let myColHeaders : any = [];
        let myColumns: any = [];
        this.allFormulationsData = [];

        myColHeaders.push("sample_name");
        myColumns.push({data: "sample_name", type: "text"});

        for (let propt in this.experimentSetup.calculatedFormulations.data[0].formulation)
        {   

            let name_key = this.experimentSetup.calculatedFormulations.data[0].formulation[propt].name_key;
            let percent_weight = this.experimentSetup.calculatedFormulations.data[0].formulation[propt].percent_weight;
            
            
            myColHeaders.push(propt);
            
            let column = 
            {
                data : name_key,
                type : 'numeric',
                editor : 'numeric',
                format : "0.0[0000000000]",
                width : 65,
            }

            myColumns.push(column);

        }
        for (let ii = 0; ii < this.experimentSetup.calculatedFormulations.data.length; ii++)
        {
            let thisData = {}
            
            thisData['sample_name'] = this.experimentSetup.calculatedFormulations.data[ii].formulation_name;
            
            for (let propt in this.experimentSetup.calculatedFormulations.data[ii].formulation)
            {
                let name_key =  this.experimentSetup.calculatedFormulations.data[ii].formulation[propt].name_key;
                let percent_weight =  this.experimentSetup.calculatedFormulations.data[ii].formulation[propt].percent_weight;
                
                thisData[name_key] = percent_weight;
            }
            
            this.allFormulationsData.push(thisData);
        }
        
      
        Handsontable.renderers.registerRenderer('variableValueRenderer', this.variableValueRenderer);
        
        let allFormulationsData =  this.allFormulationsData;
        let allFormulationsHotDiv = document.getElementById('allFormulationsHOT');

        let allFormulationsHotSettings = 
                                        {
                                            data: allFormulationsData,
                                            colHeaders: myColHeaders,
                                            minSpareRows: 1,
                                            contextMenu: true,
                                            headerTooltips:
                                                            {
                                                                rows: true,
                                                                columns: true
                                                            },
                                            manualColumnResize: true,
                                            afterChange:  (changes:any, source:any) => 
                                                                                    {
                                                                                        if (source !== "loadData") {
                                                                                            this.createAllFormulationsPlot(); 
                                                                                            return true;
                                                                                    }

                                            },
                                            columns: myColumns,
                                            cells: (row:any, col:any, prop:any) =>
                                            {
                                                let cellProperties = {renderer : 'variableValueRenderer'};
                                                return cellProperties;
                                            }

                                        }; 
        


        if (this.allFormulationsHot !== undefined)
        {

            this.allFormulationsHot.updateSettings(allFormulationsHotSettings);
            
        }
        else
        {

            this.allFormulationsHot = new Handsontable(allFormulationsHotDiv,allFormulationsHotSettings);
            this.allFormulationsHot.render();
            this.allFormulationsHot.setDataAtCell(0, 0, this.allFormulationsHot.getDataAtCell(0, 0));
            this.allFormulationsHot.render(); 
            
        }
        
        this.createAllFormulationsPlot();
        
    };
   variableValueRenderer(instance: any, td: any, row: any, col: any, prop: any, value: any, cellProperties: any)    
   {
        Handsontable.renderers.NumericRenderer.apply(this, arguments);
        
        let thisRow = 0;
        
        let val: any;
        let varies = false;
        
        while(typeof instance.getData()[thisRow] !== 'undefined' && instance.getData()[thisRow][col] !== null)
        {
            if (typeof val === 'undefined')
            {
                val = instance.getData()[thisRow][col];
            }
            
            if (val != instance.getData()[thisRow][col])
            {
                varies = true;
                break;
            }
            
            thisRow++;
        }
        
        if (varies)
        {
            td.style.fontWeight = 'bold';
            td.style.background = '#CEC';
        }
        
        td.title = instance.getData()[row][col];
    }
    createAllFormulationsPlot ()
    {
        document.getElementById("allFormulationsPlot").hidden = false;
        Plotly.purge('allFormulationsPlot');    
        let processPlotDiv = document.getElementById('allFormulationsPlot');

        let myProcessData = this.allFormulationsData;

        let plotData: any = [];

        let parameterNameKeys: any = [];
        for (let propt in myProcessData[0])
        {
            if (propt !== 'sample_name')
            {
                parameterNameKeys.push(propt);
            }
        }

        for (let jj = 0; jj < parameterNameKeys.length; jj++)
        {
            let names: any = [];
            let data: any = [];

            for (let ii = myProcessData.length - 2; ii >= 0; ii--)
            {  
                names.push(myProcessData[ii].sample_name);
                data.push(myProcessData[ii][parameterNameKeys[jj]]);
            }
            
            let trace = {
                    x: data,
                    y: names,
                    name: parameterNameKeys[jj],
                    xaxis: 'x1',
                    yaxis: 'y1',
                    type: 'bar',
                    orientation: 'h'
                }

            plotData.push(trace);
        }
        let layout = {
            title:'Composition',
            height:500,
            width:900,
            barmode: 'stack',
            showlegend: false,
            legend: {"orientation": "h"}
            //legend: {"orientation": "h"}
            //autosize:true,
        };


        Plotly.purge(processPlotDiv);
        
        Plotly.newPlot(
            processPlotDiv,
            plotData,
            layout, 
            {   modeBarButtonsToRemove: ['sendDataToCloud'],
                displaylogo: false,
                doubleClick: 'reset+autosize'
            }
                   );
    };
    updateTestStatus = function(inputVal: Week)
    {
        inputVal.doTest = !(inputVal.doTest);
    } 
}
