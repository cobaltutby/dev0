import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';

import { StateService }             from '../../services/state.service';
import { AppService }               from '../../services/app.service';
import { TrialService }             from '../../services/trial.service';
import { FormulationService }       from '../../services/formulation.service';


@Component({

  selector:     'my-formulation',
  templateUrl:  './formulation.component.html',
})

export class FormulationComponent implements OnInit
{

    sub: any;
    constructor(
                private app:          AppService,
                private state:        StateService,
                private route:        ActivatedRoute,
                private trialService: TrialService,
                private formulation:  FormulationService,
                )
    {
    }

    ngOnInit()
    {
      // this.state.current.name = 'formulation';
        
      //   this.sub = this.route.params
      //     .subscribe(params => {
      //           this.trialService.trialConfig.trial_name = params['trialname'];
      //           if(this.trialService.trialConfig.trial_name != 'undefined')
      //           {
      //               this.app.selection.project_name = this.trialService.trialConfig.project_name;
      //               this.app.selection.subproject_name = this.trialService.trialConfig.subproject_name;
      //               this.app.selection.trial_name = this.trialService.trialConfig.trial_name;
      //           }
      //       });

      this.formulation.loadFormulationView();  
          
    }
    
}
