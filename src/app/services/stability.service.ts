
import { Injectable, OnInit }           from '@angular/core';

import { HTTPService }          from './http.service';
import { AppService }           from './app.service';
import { ConfigService }        from './config.service';
import { TrialService }         from '../services/trial.service';
import { StateParamsService }   from '../services/stateparams.service';

import { StabilitySelection, StabilityOptions, Week, StabilityParams, CellProperties, StabilityThisData, ThisWeekPlotData, Layout, Stability }   from '../types/types';

declare var Handsontable: any;
declare var Plotly: any;

@Injectable()
export class StabilityService implements OnInit
{
    data: {}; 
    gotData = false;
    stabilityData: Stability;
    plotStyle: any;
    stabilityHot: any;
    stabilityHotDiv = document.getElementById('stability-grid');
    
    stabilityPlotDivAll = document.getElementById('stability-plots-all');
    stabilityPlotDivThis = document.getElementById('stability-plots-this-pH');
    executionMode = 'manual';
    changesMade = false;

    newTestWeek: string;
    selectedWeek: string;
    showPlots: boolean = false;
        
    tests = 
    {
        pH : {title: 'pH', div: 'pH'},
        visc2 : {title: 'Viscosity @ 2/s', div: 'visc2'},
        visc21 : {title: 'Viscosity @ 21/s', div: 'visc21'},
        visc106 : {title: 'Viscosity @ 106/s', div: 'visc106'}
    };
    

    
   completeData = {};
    selection: StabilitySelection = 
    {
        testWeek: '1',
        plotStyle: 'All weeks'
    };
    
    options: StabilityOptions;
    
    


    constructor(
                private app:                AppService, 
                private ppService:          HTTPService, 
                private configService:      ConfigService,
                private trialService:       TrialService,
                private stateParams:        StateParamsService,
                )
    {
        Handsontable.renderers.registerRenderer('appearanceRenderer', this.appearanceRenderer);
        //this.getThisData(this.selectedWeek);
        this.stabilityData = new Stability();
        this.selection.plotStyle = 'All weeks';
        this.selection.testWeek = 'Week1';
        for (var test in this.tests)
            {
                this.tests[test]['divThis'] = document.getElementById('stability-plots-this-' + this.tests[test]['div']);
                this.tests[test]['divAll'] = document.getElementById('stability-plots-all-' + this.tests[test]['div']);
                this.options = new StabilityOptions();
            }
    }
    ngOnInit()
    {
        console.log('StabilityService ngOnInit');
    }

    
    getData(trialName: string)
    { 
        var params = {TrialName:trialName};
        this.ppService.runProtocolGet(this.configService.stabilityProtocol,params)
            .subscribe( 
                newdata =>
                {
                    let data = newdata;
                    this.data = data;
                    this.gotData = true;
                }, 
                error =>
                {
                    console.log(error);
                }); 
    }
    
    saveToNotebook()
    {
        var notebookURL = this.trialService.getNotebookURL();
        window.open(notebookURL, 'notebook');
    }
    
    loadStabilityView()
    {
        console.log('loadStabilityView');
        if (this.stabilityData.gotData)
        {
            this.setupView();        
        }
        else
        {
            var params = {TrialName:this.stateParams.trialname};
            this.ppService.runProtocolGetStabilityView(this.configService.stabilitySetupProtocol,params)
                .subscribe( newdata => 
                {   
                    console.log('runProtocolGetStabilityView newdata');
                    console.dir(newdata);
                    let data = newdata;
                    this.stabilityData.gotData = true;
                    this.stabilityData.data = data;
                    this.selection.testWeek = data.setup.testWeeks[0];
                    
                    //this.completeData = completeData;
                    
                    this.ppService.runProtocolGetEnteredStabilityData(this.configService.getEnteredStabilityDaya, params)
                        .subscribe( newdata => 
                        {
                            console.log('runProtocolGetStabilityView newdata');
                            console.dir(newdata);
                            let data = newdata;
                            if (typeof data !== 'undefined')
                            {
                                this.stabilityData.enteredData = data[0];
                            }

                            this.setupView(); 
                        }, 
                        error => 
                        {
                            console.log(error);
                        }); 
         
                }); 
        }
    }
    
    setupView()
    {
        console.log('setupView');
        this.options.testWeeks = this.stabilityData.data.setup.testWeeks;
        this.options.plotStyles = ["Selected week", "All weeks"];
        this.plotStyle = this.options.plotStyles[1];
        
        //thisSelection.testWeek = this.selection.testWeek;
        
        // this.watch('selection.testWeek', function(){
                        
        //     createStabGrid($scope.selection.testWeek);
        // });
        
        this.createStabGrid(this.selection.testWeek);
    };
    
    saveDataToEKB()
    {
        var params = {TrialName: this.stateParams.trialname, _bodyParam:"FormData"};
        var data = this.stabilityData.enteredData;
        
        if (typeof data === 'undefined' || data === null)
        {
            return;
        }
        
        this.ppService.runProtocolPost1(this.configService.saveStabilityToExperimentProtocol, params, data)
            .subscribe( newdata => {}, 
                        error => console.log(error)
                        );
    };
    
    MoveDateTime(incdec: number)
    {
        
        var foundIndex = -1;
        
        for (var ii = 0; ii < this.options.testWeeks.length; ii++)
        {
            if (this.options.testWeeks[ii] === this.selection.testWeek)
            {
                foundIndex = ii;
            }
        }
        
        if (foundIndex >= 0)
        {
            foundIndex += incdec;
        }
        
        if ((foundIndex >= 0) && (foundIndex < this.options.testWeeks.length))
        {
            this.selection.testWeek = this.options.testWeeks[foundIndex]    
        }
        
        this.loadStabilityPlots();
    }
    
    NewTestWeek()
    {
        var exists = false;
        var newWeek = this.newTestWeek;
        
        //Check whether the new week already exists
        for (var ii in this.options.testWeeks)
        {
            if (this.options.testWeeks[ii] == newWeek)
            {
                exists = true;
            }
        }
        
        if (exists)
        {
            alert("Week already exists");
        }
        else
        {
            let  params: StabilityParams;
            params.TrialName = this.stateParams.trialname;
            params.newTestWeek = newWeek;
            
            this.ppService.runProtocolGet(this.configService.newTestWeek, params)
                .subscribe( 
                    newdata =>
                        {
                            this.stabilityData.gotData = false;
                            this.loadStabilityView();
                        }, 
                    error => {});
        }
    }
    
    getThisData (selectedWeek: string)
    {
        console.log('getThisData');    
        if (typeof this.stabilityData.enteredData === 'undefined')
        {
            this.stabilityData.enteredData = {};
        }
        
        var weekData = this.stabilityData.data.samples["Week" + selectedWeek];

        var allTests: string [];

        for (var sample in weekData)
        {
            for (var test in weekData[sample].test)
            {
                var toAdd = true;
                var testName = weekData[sample].test[test].test;

                for (var thisTest in allTests)
                {
                    if (allTests[thisTest] === testName)
                    {
                        toAdd = false;
                    }
                }

                if (toAdd)
                {
                    allTests.push(testName);
                }
            }
        }

        if (typeof this.stabilityData.enteredData["Week" + selectedWeek] === 'undefined')
        {
            this.stabilityData.enteredData["Week" + selectedWeek] = {};
        }

        for (let thisTest in this.stabilityData.enteredData)
        {
            var thisTestData = this.stabilityData.enteredData[thisTest];

            for (var sample in weekData)
            {
                for (var test in allTests)
                {
                    if (typeof this.stabilityData.enteredData["Week" + selectedWeek][allTests[test]] === 'undefined')
                    {
                        this.stabilityData.enteredData["Week" + selectedWeek][allTests[test]] = {}
                    }

                    for (var temp in weekData[sample].temperature)
                    {
                        if (typeof this.stabilityData.enteredData["Week" + selectedWeek][allTests[test]][sample + "==" + weekData[sample].temperature[temp].temperature] === 'undefined')
                        {
                            this.stabilityData.enteredData["Week" + selectedWeek][allTests[test]][sample + "==" + weekData[sample].temperature[temp].temperature] = "";
                        }
                    }
                }
            }
        }
    }
    
    appearanceRenderer(instance: any, td: any, row: any, col: any, prop: any, value: any, cellProperties: any) : any
    {
        Handsontable.AutocompleteCell.renderer.apply(this, arguments);
        
        if (value === 'Red')
        {
            td.style.background = 'red';
        }
        else if (value === "Fail - Amber" || value === "Pass - Amber")
        {
            td.style.background = 'orange';
        }
        else if (value === "Green")
        {
            td.style.background = 'green';
        }
    }
    

    
    createStabGrid(selectedWeek: string)
    {
        console.log('*****************************');   
        console.log('createStabGrid');   
        
        var thisColHeaders: string [] = [];
        var thisColumns: {data: string} [] = [];
        var thisColWidths: string [] = [];
        
        for (var test in this.stabilityData.enteredData["Week" + selectedWeek])
        {
            for (var sample in this.stabilityData.enteredData["Week" + selectedWeek][test])
            {
                var toAdd = true;
                
                for (var thisItem in thisColHeaders)
                {
                    if (sample === thisColHeaders[thisItem])
                    {
  
                        toAdd = false;
                    }
                }
                
                if (toAdd)
                {
                    thisColHeaders.push(sample);
                    thisColumns.push({data: sample});
                    thisColWidths.push('55');
                }
            }
        }
        
        
        var topRow: {label: string; colspan: number}[] = [];
        var secondRow: {} [] = [];
        var nestedHeaders: {} [] = [];
        
        for (var sample in this.stabilityData.data.samples["Week" + selectedWeek])
        {
            var thisSample = this.stabilityData.data.samples["Week" + selectedWeek][sample];
            
            var colSpan = 0;
            
            for (var temp in thisSample.temperature)
            {
                secondRow.push(thisSample.temperature[temp].temperature);
                colSpan += 1;
            }
            
            topRow.push({label: sample, colspan: colSpan});
        }
        
        nestedHeaders.push(topRow);
        nestedHeaders.push(secondRow);
        
        /*for (var item in stabilityData.enteredData["Week" + selectedWeek])
        {
            thisColHeaders.push(item);
            thisColumns.push({data: item});
        }*/
        console.log('this.stabilityData.data');
        console.log(this.stabilityData.enteredData);
        
        var thisData: string [] = [];
        var thisRowHeaders: string [] = [];
        
        /** Shouldn't be hard coded - change to sort properly **/
        var tmpTests = ["Appearance", "Viscosity @ 2/s", "Viscosity @ 21/s", "Viscosity @ 106/s", "pH"];
        
        for (var line in tmpTests)//stabilityData.enteredData["Week" + selectedWeek])
        {
            console.log('line= ' + line);
            console.log('tmpTests['+line + ']= ' + tmpTests[line]);
            console.log('enteredData[Week'+selectedWeek+']');
            console.dir(this.stabilityData.enteredData["Week" + selectedWeek])
            if(this.stabilityData.enteredData["Week" + selectedWeek][tmpTests[line]] === undefined)
            {
                thisData.push(this.stabilityData.enteredData["Week" + selectedWeek][tmpTests[+line+1]]);
            }
            else
            {
                thisData.push(this.stabilityData.enteredData["Week" + selectedWeek][tmpTests[line]]);
            }
            
            console.log(this.stabilityData.enteredData["Week" + selectedWeek][tmpTests[line]]);
            thisRowHeaders.push(tmpTests[line]);
        }


        console.log('thisData');
        console.log(thisData);
     
        if (typeof this.stabilityHot === 'undefined')
        {

            this.stabilityHot = new Handsontable(this.stabilityHotDiv, {
                data: thisData,
                colHeaders: thisColHeaders,
                nestedHeaders: nestedHeaders,
                rowHeaders: thisRowHeaders,
                colWidths: thisColWidths,
                rowHeaderWidth: 120,
                // afterChange: (changes: any, source: any) => 
                // {
                //     if (source !== "loadData") 
                //     {
                //         this.loadStabilityPlots();
                //     }
                // },
                cells: (row: any, col: any, prop: any) =>
                {
                    var cellProperties: CellProperties;
                    cellProperties = new CellProperties();
                    if (thisRowHeaders[row] === 'Appearance')
                    {
                        cellProperties.type = 'dropdown';
                        cellProperties.source =  ['Red', 'Fail - Amber', 'Pass - Amber', 'Green']; 
                        cellProperties.renderer = 'appearanceRenderer';
                    }
                    
                    return cellProperties;
                }
            });
        }
        else
        {
            this.stabilityHot.updateSettings({
                //colHeaders: thisColHeaders,
                nestedHeaders: nestedHeaders,
                data: thisData,
                columns: thisColumns
            });
        }
    }
    
    printGrid()
    {
        this.app.printDiv("stability-grid");
    };
    
        
   createNestedHeaders()
   {
        var firstRow: {} [];
        for(var i = 0; i < this.selection.tests.length; i++){
            firstRow.push({label: this.selection.tests[i], colspan: this.selection.temperatures.length});            
        }
        
        var secondRow: {} [];
        for(var j = 0; j < this.selection.tests.length; j++){
            for(var i = 0; i < this.selection.temperatures.length; i++){
                secondRow.push(this.selection.temperatures[i]);
            } 
        }
      
        var nestedHeaders = [firstRow, secondRow];
        console.log(nestedHeaders);
        
        return nestedHeaders;
    };
    
    getThisWeekPlotData(selectedWeek: string, testName: string, sampleName: string)
    {
        console.log('getThisWeekPlotData');
        console.log('this.tests');
        console.dir(this.tests);
        console.log('sampleName');
        console.log(sampleName);
        console.log('selectedWeek');
        console.log(selectedWeek);
        var fullTestName = this.tests[testName]['title'];
        console.log('fullTestName');
        console.log(fullTestName);
        var ret: ThisWeekPlotData;
        
        var data: {} [];
        
        var x: string [];
        var y: string [];
        
        if (typeof this.stabilityData.enteredData["Week" + selectedWeek] === 'undefined') return;
        if (typeof this.stabilityData.enteredData["Week" + selectedWeek][fullTestName] === 'undefined') return;
        

        console.log('this.stabilityData.enteredData');
        console.dir(this.stabilityData.enteredData);
        console.log('this.stabilityData.enteredData["Week" + selectedWeek][fullTestName]');
        console.dir(this.stabilityData.enteredData["Week" + selectedWeek][fullTestName]);
        for (var propt in this.stabilityData.enteredData["Week" + selectedWeek][fullTestName])
        {
            console.log('propt');
            console.dir(propt);
            if (propt.lastIndexOf(sampleName) === 0)
            {
                var thisData: StabilityThisData;
           
                thisData.x = propt.substring(propt.lastIndexOf("=") + 1);
                
                if (thisData.x === 'RT')
                {
                    thisData.x = '21';
                }
                
                thisData.y = this.stabilityData.enteredData["Week" + selectedWeek][fullTestName][propt];
                console.log('thisData');
                console.dir(thisData);
                data.push(thisData);
            }
        }
        
        data.sort(function(a: StabilityThisData, b:StabilityThisData)
        {
            if (+a.x > +b.x) {
                return 1;
            }

            if (+a.x < +b.x) {
                return -1;
            }

            return 0;
        });
        
        for (var Data in data)
        {
            x.push(data[Data]['x']);
            y.push(data[Data]['y']);
        }
        
        ret['x'] = x;
        ret['y'] = y;
        
        return ret; 
    }
    
    getAllWeeksPlotData(testName: string, sampleName: string)
    {
        var fullTestName = this.tests[testName]['title'];
        
        if (typeof this.stabilityData === 'undefined')
        {
            return;
        }
        
        var ret = {};
    
        for(var week in this.stabilityData.data.samples)
        {
            for (var test in this.stabilityData.enteredData[week])
            {
                if (test !== fullTestName)
                {
                    continue;
                }
                
                for (var sample in this.stabilityData.enteredData[week][test])
                {
                    if (sample.indexOf(sampleName) !== 0)
                    {
                        continue;
                    }
                    
                    if (typeof ret[sample] === 'undefined')
                    {
                        ret[sample] = [];
                    }
                    
                    var value = this.stabilityData.enteredData[week][test][sample];
                    ret[sample].push({week: week, value: value});
                }
            }
        }
        
        return ret;
    }
    
    
    loadStabilityPlots()
    {
        console.log('loadStabilityPlots');
        if (typeof this.stabilityData === 'undefined')
        {
            console.log(typeof this.stabilityData);
            return;
        }
        console.dir(this.stabilityData);
        console.dir(this.stabilityData['data']);
        var thisWeekPHData: {} [];
        var thisWeekViscosity2Data: {} [];
        var thisWeekViscosity21Data: {} [];
        var thisWeekViscosity106Data: {} [];
        
        var thisWeekData: {} [];;
         
        for (let week in this.stabilityData.data.samples)
        {
            console.log('week');
            console.dir(week);
            for (var test in this.tests)
            {
                var tmpData1: {} [];;
                
                for (var sample in this.stabilityData.data.samples[week])
                {
                    let vals: ThisWeekPlotData;
                    vals = this.getThisWeekPlotData(this.selection.testWeek, test, sample);

                    if (typeof vals !== 'undefined')
                    {
                        var trace1 = {
                            x: vals.x,
                            y: vals.y,
                            name: sample,
                            xaxis: 'x1',
                            yaxis: 'y1'
                        }

                        tmpData1.push(trace1);
                    }
                }
                
                thisWeekData[test] = tmpData1;
            }
        }
        
        var allWeekData = {};
        
        // for (var week2 of this.stabilityData.data.samples as string [])
        // {
        //     console.log('week');
        //     console.dir(week2);
        //     for (var test in this.tests)
        //     {
        //         var tmpData2: {} [];
                
        //         for (var sample in this.stabilityData.data.samples[week2])
        //         {
        //             var vals = this.getAllWeeksPlotData(test, sample);

        //             for (var fullSample in vals)
        //             {
        //                 var x: {} [];;
        //                 var y: {} [];;

        //                 for (var tmp in vals[fullSample])
        //                 {
        //                     if (vals[fullSample][tmp]["value"] !== "")
        //                     {
        //                         x.push(vals[fullSample][tmp]["week"]);
        //                         y.push(vals[fullSample][tmp]["value"]);
        //                     }
        //                 }

        //                 if (x.length > 0)
        //                 {
        //                     var trace2 = {
        //                             x: x,
        //                             y: y,
        //                             name: fullSample,
        //                             xaxis: 'x1',
        //                             yaxis: 'y1'
        //                         }

        //                     tmpData2.push(trace2);
        //                 }
        //             }
        //         }
                
        //         allWeekData[test] = tmpData2;
        //     }
        // }
        
        for (var test in this.tests)
        {
            var layout: Layout;
            layout.title =  this.tests[test]['title'];
            layout.height = 500;
            layout.width = 800;

            if (this.tests[test]['title'] === 'pH')
            {
                layout.yaxis = {title: 'pH'};
            }
            else
            {
                layout.yaxis = {title: 'Viscosity (cP)'};
            }
            
            if (this.plotStyle === "Selected week")
            {
                layout.xaxis = {title: 'Storage temperature'};
                
                Plotly.newPlot(
                        this.tests[test]['divThis'],
                        thisWeekData[test],
                        layout,
                        {
                            modeBarButtonsToRemove: ['sendDataToCloud'],
                            displaylogo: false,
                            doubleClick: 'reset+autosize'
                        }
                    );
            }
            
            if (this.plotStyle === "All weeks")
            {
                layout.xaxis = {title: 'Test week'};
                
                Plotly.newPlot(
                    this.tests[test]['divAll'],
                    allWeekData[test],
                    layout,
                    {
                        modeBarButtonsToRemove: ['sendDataToCloud'],
                        displaylogo: false,
                        doubleClick: 'reset+autosize'
                    }
                );

            }
        }
    }
    

}




