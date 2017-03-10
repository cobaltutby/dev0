import { Component, OnInit }        from '@angular/core';

import { StateService }             from '../../../../services/state.service';
import { StateParamsService }       from '../../../../services/stateparams.service';
import { HTTPService }              from '../../../../services/http.service';
import { ConfigService }            from '../../../../services/config.service';
import { ExperimentSetupService }   from '../../../../services/experimentsetup.service';
import { DesignService }            from '../../../../services/design.service';
import { DesignDataService }        from '../../../../services/designdata.service';
import { ParentFormulationData }    from '../../../../types/types';


@Component({
    moduleId:     'module.id',
  selector:     'my-parentformulation',
  templateUrl:  './parent.formulation.html',
})

export class ParentFormulationComponent implements OnInit
{
   
    constructor(
                private state:              StateService,
                private stateParams:      StateParamsService,
                private ppService:        HTTPService, 
                private configService:    ConfigService,
                private experimentSetup:  ExperimentSetupService,
                private design:           DesignService,
                private designData:       DesignDataService,
                )
    {

    }
    ngOnInit()
    {
        console.log('ParentFormulationComponent ngOnInit');
           this.design.parentFormulationHOTDiv = document.getElementById('parentFormulationHOT');
           if(this.designData.parentFormulation.gotData) this.design.setUpParentFormulationHOT();
    }

    uploadThenRunProtocol(file: any) 
    {
        console.dir(file);
    }

    public fileOver(fileIsOver: boolean) 
    {

    }

    loadParentFormulation(jobID:number)
    {
        let params = {};
        if (jobID != null)
        {
            params = 
            {
                _jobid: jobID,
                TrialName:this.stateParams.trialname
            };            
        }
        else
        {
            params = {TrialName:this.stateParams.trialname};
        }

        this.ppService.runProtocolGet1(this.configService.parentFormulationProtocol, params)
        .subscribe(
                newdata =>  {   
                                let data:ParentFormulationData = newdata;
                                this.designData.parentFormulation.data = data;
                                this.experimentSetup.parentFormulation.data = this.designData.parentFormulation.data;
                                this.designData.parentFormulation.gotData = true;
                                this.experimentSetup.parentFormulation.gotData = this.designData.parentFormulation.gotData;
                                this.experimentSetup.processData = data.formulation;
                                this.design.setUpParentFormulationHOT();
                                
                            },
                error => console.log(error));
    };
    info()
    {
        
        this.loadParentFormulation(1);
         
    }
}
