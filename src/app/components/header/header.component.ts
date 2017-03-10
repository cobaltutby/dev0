import { Component, OnInit }    from '@angular/core';

import { HTTPService }  from '../../services/http.service';
import { CPanelData }   from '../../types/types';
import { AppService }  from '../../services/app.service';
import { TrialService }             from '../../services/trial.service';
import { StateService }             from '../../services/state.service';
import { DesignDataService }             from '../../services/designdata.service';

@Component({
  moduleId: 'module.id',
  selector:     'my-header',
  templateUrl:  './header.component.html',
})
export class HeaderComponent implements OnInit
{ 
      test111: string = 'header test'

  constructor(
              private designData:    DesignDataService, 
              private ppService:    HTTPService, 
              private app:          AppService,
              private trialService: TrialService,
              private state:            StateService,

              )   
  {
  }
  ngOnInit()
  {
    if(this.trialService.trialConfig.trial_name != null)
    {
      this.app.selection.project_name = this.trialService.trialConfig.project_name
      this.app.selection.subproject_name = this.trialService.trialConfig.subproject_name;  
      this.app.selection.trial_name = this.trialService.trialConfig.trial_name;
      
    }
    this.state.current.name="header";
    
  }
}
