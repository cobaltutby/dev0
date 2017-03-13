
import { Injectable, OnInit }           from '@angular/core';

import { HTTPService }          from './http.service';
import { AppService }           from './app.service';
import { ConfigService }        from './config.service';
import { TrialService }         from '../services/trial.service';
import { StateParamsService }   from '../services/stateparams.service';

import { StabilitySelection, StabilityOptions, Week, StabilityParams, CellProperties, StabilityThisData, ThisWeekPlotData, Layout, Stability }   from '../types/types';

declare let Handsontable: any;
declare let Plotly: any;

@Injectable()
export class StabilityService
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
    showPlotsState: string = 'Show Plots';
        
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

        this.stabilityData = new Stability();
        this.selection.plotStyle = 'All weeks';
        this.selection.testWeek = 'Week1';
        this.options = new StabilityOptions();
        this.stabilityData = new Stability();
        this.selection = new StabilitySelection();
        this.options = new StabilityOptions();


    }  
    getData(trialName: string)
    { 
        let params = {TrialName:trialName};
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
    loadStabilityView()
    {
        if (this.stabilityData.gotData)
        {
            this.setupView();        
        }
        else
        {
            let params = {TrialName:this.stateParams.trialname};
            this.ppService.runProtocolGetStabilityView(this.configService.stabilitySetupProtocol,params)
                .then( newdata => 
                    {  
                        let data = newdata;
                        this.stabilityData.gotData = true;
                        this.stabilityData.data = data;
                        this.selection.testWeek = data.setup.testWeeks[0];
                        this.ppService.runProtocolGetEnteredStabilityData(this.configService.getEnteredStabilityDaya, params)
                            .then( newdata2 => 
                                {

                                    let data = newdata2;
                                    if (typeof data !== 'undefined')
                                    {
                                        this.stabilityData.enteredData = data[0];
                                    }

                                    this.setupView(); 
                                })
                            .catch(response => 
                                {
                                    console.log(response);
                                })
            
                    })
                .catch(response => 
                    {
                        console.log(response);
                    })
        }
    } 
    setupView()
    {

        this.options.testWeeks = this.stabilityData.data.setup.testWeeks;
        this.options.plotStyles = ["Selected week", "All weeks"];
        this.plotStyle = this.options.plotStyles[1];
        this.createStabGrid(this.selection.testWeek);
    };
    getThisData (selectedWeek: string)    
    {    
        if (this.stabilityData.enteredData === undefined)
        {
            this.stabilityData.enteredData = [];
        }
        
        let weekData = this.stabilityData.data.samples["Week" + selectedWeek];

        let allTests :any[] = [];

        for (let sample in weekData)
        {
            for (let test in weekData[sample].test)
            {
                let toAdd = true;
                let testName = weekData[sample].test[test].test;

                for (let thisTest in allTests)
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

        if (this.stabilityData.enteredData["Week" + selectedWeek] === undefined)
        {
            this.stabilityData.enteredData["Week" + selectedWeek] = {};
        }

        for (let thisTest in this.stabilityData.enteredData)
        {
            let thisTestData = this.stabilityData.enteredData[thisTest];

            for (let sample in weekData)
            {
                for (let test in allTests)
                {
                    if (this.stabilityData.enteredData["Week" + selectedWeek][allTests[test]] === undefined)
                    {
                        this.stabilityData.enteredData["Week" + selectedWeek][allTests[test]] = {}
                    }

                    for (let temp in weekData[sample].temperature)
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
        this.getThisData(selectedWeek);

        let thisColHeaders: string [] = [];
        let thisColumns: {data: string} [] = [];
        let thisColWidths: string [] = [];

        for (let test in this.stabilityData.enteredData["Week" + selectedWeek])
        {
            for (let sample1 in this.stabilityData.enteredData["Week" + selectedWeek][test])
            {
                let toAdd = true;
                
                for (let thisItem in thisColHeaders)
                {
                    if (sample1 === thisColHeaders[thisItem])
                    {
  
                        toAdd = false;
                    }
                }
                
                if (toAdd)
                {
                    thisColHeaders.push(sample1);
                    thisColumns.push({data: sample1});
                    thisColWidths.push('55');
                }
            }
        }
        
        let topRow: {label: string; colspan: number}[] = [];
        let secondRow: any [] = [];
        let nestedHeaders: any [] = [];
        
        for (let sample2 in this.stabilityData.data.samples["Week" + selectedWeek])
        {
            let thisSample = this.stabilityData.data.samples["Week" + selectedWeek][sample2];
            let colSpan = 0;
            
            for (let temp in thisSample.temperature)
            {
                secondRow.push(thisSample.temperature[temp].temperature);
                colSpan += 1;
            }

            topRow.push({label: sample2, colspan: colSpan});
        }
        
        nestedHeaders.push(topRow);
        nestedHeaders.push(secondRow);

        let thisData: string [] = [];
        let thisRowHeaders: string [] = [];
        
        /** Shouldn't be hard coded - change to sort properly **/
        let tmpTests = ["Appearance", "Viscosity @ 2/s", "Viscosity @ 21/s", "Viscosity @ 106/s", "pH"];
        
        for (let line in tmpTests)//stabilityData.enteredData["Week" + selectedWeek])
        {
            thisData.push(this.stabilityData.enteredData["Week" + selectedWeek][tmpTests[line]]);
            thisRowHeaders.push(tmpTests[line]);
        }

        if (typeof this.stabilityHot === 'undefined')
        {
            this.stabilityHot = new Handsontable(this.stabilityHotDiv, {
                data:           thisData,
                colHeaders:     thisColHeaders,
                nestedHeaders:  nestedHeaders,
                rowHeaders:     thisRowHeaders,
                colWidths:      thisColWidths,
                rowHeaderWidth: 120,
                afterChange:    (changes: any, source: any) => 
                {
                    if (source !== "loadData") 
                    {
                        this.loadStabilityPlots();
                         this.changesMade = true;
                    }
                },
                cells: (row: any, col: any, prop: any) =>
                {
                    let cellProperties: CellProperties;
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
        this.loadStabilityPlots();
    }
    loadStabilityPlots()
    {
        if (typeof this.stabilityData === 'undefined')
        {
            return;
        }
        let thisWeekPHData: any [] = [];
        let thisWeekViscosity2Data: any [] = [];
        let thisWeekViscosity21Data: any [] = [];
        let thisWeekViscosity106Data: any [] = [];
        
        let thisWeekData: any [] = [];
         
        for (let week in this.stabilityData.data.samples)
        {
            for (let test in this.tests)
            {
                let tmpData1: any [] = [];
                
                for (let sample in this.stabilityData.data.samples[week])
                {
                    let vals: ThisWeekPlotData;
                    
                    vals = this.getThisWeekPlotData(this.selection.testWeek, test, sample);

                    if (typeof vals !== 'undefined')
                    {
                        let trace1 = {
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
        
        let allWeekData: any [] = [];

        for (let test in this.tests)
        {
            let layout: Layout;
            layout = new Layout();
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
                console.log('Selected week');
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
                console.log('All weeks');
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
                console.log('bye');
            }
        }
    }
    getThisWeekPlotData(selectedWeek: string, testName: string, sampleName: string)
    {
        let fullTestName = this.tests[testName]['title'];
        let ret: ThisWeekPlotData;
        ret = new ThisWeekPlotData();
        let data: any [] = [];
        
        let x: string [] = [];
        let y: string [] = [];
        
        if (typeof this.stabilityData.enteredData["Week" + selectedWeek] === 'undefined') return;
        if (typeof this.stabilityData.enteredData["Week" + selectedWeek][fullTestName] === 'undefined') return;

        for (let propt in this.stabilityData.enteredData["Week" + selectedWeek][fullTestName])
        {
            if (propt.lastIndexOf(sampleName) === 0)
            {
                let thisData: StabilityThisData;
                thisData = new StabilityThisData();
           
                thisData.x = propt.substring(propt.lastIndexOf("=") + 1);
                
                if (thisData.x === 'RT')
                {
                    thisData.x = '21';
                }
                
                thisData.y = this.stabilityData.enteredData["Week" + selectedWeek][fullTestName][propt];
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
        
        for (let Data in data)
        {
            
            x.push(data[Data]['x']);
            y.push(data[Data]['y']);
        }
        ret.x = x;
        ret.y = y;

        return ret; 
    }
    MoveDateTime(incdec: number)
    {
        
        let foundIndex = -1;
        
        for (let ii = 0; ii < this.options.testWeeks.length; ii++)
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
        let exists = false;
        let newWeek = this.newTestWeek;
        
        //Check whether the new week already exists
        for (let ii in this.options.testWeeks)
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
    printGrid()
    {
        this.app.printDiv("stability-grid");
    };
    createNestedHeaders()
    {
        let firstRow: any [];
        for(let i = 0; i < this.selection.tests.length; i++){
            firstRow.push({label: this.selection.tests[i], colspan: this.selection.temperatures.length});            
        }
        
        let secondRow: any [];
        for(let j = 0; j < this.selection.tests.length; j++){
            for(let i = 0; i < this.selection.temperatures.length; i++){
                secondRow.push(this.selection.temperatures[i]);
            } 
        }
        
        let nestedHeaders = [firstRow, secondRow];
        
        return nestedHeaders;
    }
    getAllWeeksPlotData(testName: string, sampleName: string)
    {
        let fullTestName = this.tests[testName]['title'];
        
        if (typeof this.stabilityData === 'undefined')
        {
            return;
        }
        
        let ret = {};
    
        for(let week in this.stabilityData.data.samples)
        {
            for (let test in this.stabilityData.enteredData[week])
            {
                if (test !== fullTestName)
                {
                    continue;
                }
                
                for (let sample in this.stabilityData.enteredData[week][test])
                {
                    if (sample.indexOf(sampleName) !== 0)
                    {
                        continue;
                    }
                    
                    if (typeof ret[sample] === 'undefined')
                    {
                        ret[sample] = [];
                    }
                    
                    let value = this.stabilityData.enteredData[week][test][sample];
                    ret[sample].push({week: week, value: value});
                }
            }
        }
        
        return ret;
    }
    saveDataToEKB()
    {
        let params = {TrialName: this.stateParams.trialname, _bodyParam:"FormData"};
        let data = this.stabilityData.enteredData;
        
        if (typeof data === 'undefined' || data === null)
        {
            return;
        }
        
        this.ppService.runProtocolPost1(this.configService.saveStabilityToExperimentProtocol, params, data)
            .subscribe( newdata => {}, 
                        error => console.log(error)
                        );
    };  
    changeMode()
    {
        console.log('changeMode');
        if(this.executionMode == 'manual')
        {
            this.executionMode = 'auto';
        }
        else
        {
            this.executionMode = 'manual';
        }
    }
    showhidePlots()
    {
        console.log('showhidePlots');
        this.showPlots = !this.showPlots;
        if (this.showPlots)
        {
            this.showPlotsState = 'Hide Plots';
        }
        else
        {
            this.showPlotsState = 'Show Plots';
        }

    }
}
   





