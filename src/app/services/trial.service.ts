import { Injectable }               from '@angular/core';

import { HTTPService }              from './http.service';
import { DesignDataService }        from './designdata.service';
import { StateService }             from './state.service';
import { AppService }               from './app.service';

import { CPanelData }               from '../types/types';




@Injectable()
export class TrialService 
{
    constructor(
                private state:              StateService,
                private ppService:          HTTPService, 
                private designData:         DesignDataService, 
                // private formulationData:    DesignService, 
                // private stabilityData:      DesignService, 
               )
    {

    }
    
    trialConfig = new CPanelData(); 
    gotAllData: boolean;
    
    getExperimentURL()
    {
        //console.log(self.trialConfig);
        //https://experiment-unilever-dev.bioviaonline.com/ekb/ExperimentView.aspx?ExperimentId=1
        let ekbURL = 'https://'+ this.ppService.ppServer + '/ekb/ExperimentView.aspx?ExperimentId='+ this.trialConfig.experiment_id;
        return ekbURL;
    };
    
    getNotebookURL()
    {
        //https://jwintg-oracle.accelrys.net/notebook/experiment/EXP-16-AA0529
        let notebookURL = 'https://notebook-unilever-dev.bioviaonline.com/notebook/experiment/'+ this.trialConfig.trial_name;
        return notebookURL;
    };
    
    loadAllData(stateName: string)
    {
        if(stateName != 'create')
        {
            this.state.current
            //if (stateName != 'design')
            //{  
                this.designData.gotData = false;
                this.designData.getData(this.trialConfig.trial_name);
                this.gotAllData = true;
                //this.router.navigate(['/design', this.app.selection.trial_name]); 
            //}

            // if (stateName != 'formulation')
            // { 
            //     this.formulationData.gotData = false; 
            //     this.formulationData.getData(this.trialConfig.trial_name);
            // }

            // if (stateName != "stability")
            // {  
            //     this.stabilityData.gotData = false;
            //     this.stabilityData.getData(this.trialConfig.trial_name);
            // }
        }
    };   
}