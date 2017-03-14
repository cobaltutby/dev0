import { Injectable }               from '@angular/core';


import { DesignDataService }        from './designdata.service';
import { ExperimentSetupService }   from './experimentsetup.service';

import { CurrentFrame }             from '../types/types';
import { Selection }                from '../types/types';

@Injectable()
export class StateService 
{
    //trialname:  string;
    current:    CurrentFrame;
    selection:  Selection;
    activeTab:  number;

    allTabs = ["ParentFormulation", "ExperimentType", "TestFormulations", "ProcessParameters", "TestSchedule"];

    constructor(
                private designData:       DesignDataService,
                private experimentSetup:  ExperimentSetupService,
                )
    {
        this.activeTab = 0;
        this.selection = new Selection();
        this.current = new CurrentFrame();
    }
    go(name: string, obj1: any, obj2: any)
    {
    }
    setTabState(val:number)
    {   
        if (!this.isTabDisabled(val))
        {
            this.activeTab = val;
        }
    };
    currentPageBlocked()
    {
        let blocked = true;
        
        switch (this.allTabs[this.activeTab])
        {
            case "ParentFormulation":
                blocked = !((typeof this.designData.parentFormulation !== 'undefined') &&
                            this.designData.parentFormulation.gotData);
                break;
            case "ExperimentType":
                //blocked = !((this.experimentSetup.calculatedFormulations.gotData === true));
                blocked = !this.experimentSetup.experimentType.selected.gotData;
                break;
            case "TestFormulations":
                blocked = !this.experimentSetup.experimentType.gotData;
                break;
            case "ProcessParameters":
                blocked = false;
                break;
            case "TestSchedule":

                blocked = false;
                break;
        }
        
        return blocked;
    }
    nextState()
    {
        this.setTabState(this.activeTab + 1);
    }
    prevState()
    {
        this.setTabState(this.activeTab - 1);

    }
    isTabDisabled(val:number)
    {

        if (val <= this.activeTab)
        {
            return false;
        }
        
        if (val === (this.activeTab + 1))
        {
            return this.currentPageBlocked();
        }
        if (val >(this.activeTab + 1))
        {
            return true;
        }
        if (typeof this.experimentSetup.experimentType != 'undefined' && this.experimentSetup.experimentType.gotData === true)
        {
            return false;
        }        
        
        return true;
    };
    nextButtonClass()
    {   
        if (this.currentPageBlocked())
        {
            return "btn btn-default disabled";
        }
        return "btn btn-primary active";
    };
    prevButtonClass()
    {
        if (this.activeTab > 0)
        {
            return "btn btn-primary active";
        }
        
        return "btn btn-default disabled";
    }; 
    isWizardStateVisible(val: number)
    { 
        return val === this.activeTab;
    };
}