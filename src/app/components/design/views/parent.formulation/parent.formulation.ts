import { Component, OnInit }        from '@angular/core';

import { AppService }               from '../../../../services/app.service';
import { StateService }             from '../../../../services/state.service';
import { StateParamsService }       from '../../../../services/stateparams.service';
import { HTTPService }              from '../../../../services/http.service';
import { ConfigService }            from '../../../../services/config.service';
import { ExperimentSetupService }   from '../../../../services/experimentsetup.service';
import { DesignService }            from '../../../../services/design.service';
import { DesignDataService }        from '../../../../services/designdata.service';
import { ParentFormulationData }    from '../../../../types/types';


@Component({
    //moduleId:     'module.id',
  selector:     'my-parentformulation',
  templateUrl:  './parent.formulation.html',
})

export class ParentFormulationComponent implements OnInit
{
   
    constructor(
                private app:              AppService,
                private state:            StateService,
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
        this.design.parentFormulationHOTDiv = document.getElementById('parentFormulationHOT');
        if(this.designData.parentFormulation.gotData) this.design.setUpParentFormulationHOT();
    }

    uploadThenRunProtocol($event:any) 
    {
    let fileList: FileList = $event.dataTransfer.files;
    if(fileList.length > 0) 
      {
        
          let file: File = fileList[0];
          this.ppService.fileUpload(file)
            .subscribe(
                data => 
                {
                    let jobID = data.data.value;
                    console.log('success');
                    this.loadParentFormulation(jobID); 
                },
                error => 
                {
                    console.log('error');
                    console.dir(error);
                    let body = error['_body'];
                    console.log(body);
                })
         
      }
    }
            
    loadParentFormulation(jobID:number)
    {
        let params = {};
        if (jobID != null)
        {
            params = 
            {
                _jobid: jobID,
                TrialName: this.app.selection.trial_name
            };            
        }
        else
        {
            params = {TrialName:this.app.selection.trial_name};
        }

        this.ppService.runProtocolGet(this.configService.parentFormulationProtocol, params)
        .subscribe(
                newdata =>  {
                                let data:ParentFormulationData = newdata;
                                this.designData.parentFormulation.data = data;
                                this.designData.parentFormulation.formulation = data.formulation;
                                this.experimentSetup.parentFormulation.data = this.designData.parentFormulation.data;
                                this.designData.parentFormulation.gotData = true;
                                this.experimentSetup.parentFormulation.formulation = this.experimentSetup.parentFormulation.formulation;
                                this.experimentSetup.parentFormulation.gotData = this.designData.parentFormulation.gotData;
                                this.experimentSetup.processData = data.formulation;
                                this.design.setUpParentFormulationHOT();
                                
                            },
                error => console.log(error));
    };
}
