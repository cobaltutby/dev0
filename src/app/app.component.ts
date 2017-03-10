import { Component }                      from '@angular/core';
import { Router }                         from '@angular/router';

import '../../assets/css/bootstrap.css';
import '../../assets/css/angular-ui-tree.min.css';
import '../../assets/css/laStyles.css';

import { StateService }             from './services/state.service';
import { StateParamsService }       from './services/stateparams.service';
import { HTTPService }              from './services/http.service';
import { ConfigService }            from './services/config.service';
import { DesignDataService }        from './services/designdata.service';
import { ExperimentSetupService }   from './services/experimentsetup.service';
import { TrialService }             from './services/trial.service';
import { AppService }               from './services/app.service';
import { DesignService }            from './services/design.service';
import { FormulationService }       from './services/formulation.service';
import { StabilityService }         from './services/stability.service';


@Component({
  selector:     'my-app',
  templateUrl:   'app.component.html',
  styleUrls:    [ ],
  providers:    [ 
                  StateParamsService,
                  StateService, 
                  HTTPService, 
                  ConfigService, 
                  ExperimentSetupService,
                  TrialService,
                  AppService, 
                  DesignService,
                  DesignDataService,
                  FormulationService,
                  StabilityService

                ],
})
export class AppComponent  
{ 
  constructor(
              private router:           Router,
              private trialService:     TrialService,
              private app:              AppService,
              private state:            StateService,
              private stateParams:      StateParamsService,
              private ppService:        HTTPService, 
              private configService:    ConfigService,
              private design:           DesignService,
              private experimentSetup:  ExperimentSetupService,
              private designData:       DesignDataService,

              )
  {
    this.app.workFlowType = '';
    this.app.header = this.configService.appTitle;
    //this.forceSSL();
    this.app.getPPUser();
    
  }
  navigate(state: string)
  {
    if(state == 'design')
    {
      this.state.current.name = state;
      if(this.app.selection.trial_name)
      {
        this.router.navigate(['/design', this.app.selection.trial_name]);
      }
      else
      {
        alert('Trial is not selected');
      }
    }
    if(state == 'formulation')
    {
      this.state.current.name = state;
      this.router.navigate(['/formulation']);
    }
    if(state == 'stability')
    {
      this.state.current.name = state;
      this.router.navigate(['/stability']);
    }

  }
}
