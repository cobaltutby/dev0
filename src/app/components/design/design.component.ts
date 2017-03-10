import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';

import { DesignService }            from '../../services/design.service';
import { StateService }             from '../../services/state.service';
import { AppService }               from '../../services/app.service';
import { TrialService }             from '../../services/trial.service';

@Component({
    moduleId:       'module.id',
    selector:       'my-design',
    templateUrl:    './design.component.html',
    styleUrls:    [ './design.component.css' ],
})

export class DesignComponent implements OnInit
{ 
    DesignSteps =   [
                        'Parent formulation',
                        'Experiment type',
                        'Test formulations',
                        'Process parameters',
                        'Test shedule',
                    ];
    
    constructor(
                private app:            AppService,
                private state:          StateService,
                private design:         DesignService,
                private route:          ActivatedRoute,
                private trialService:   TrialService,
                )
    {

        this.design.loadExperimentTypes();
        this.design.loadProcessParameters();
        this.design.loadDefaultTestSchedule();
        this.design.loadAvailableTests();
        this.design.loadExistingExperiment();
        
    }
    ngOnInit()
    {
        this.state.current.name = 'design'; //debug

        this.route.params
          .subscribe(params => 
            {
                this.trialService.trialConfig.trial_name = params['trialname'];
                if(this.trialService.trialConfig.trial_name != 'undefined')
                {
                    this.app.selection.project_name = this.trialService.trialConfig.project_name;
                    this.app.selection.subproject_name = this.trialService.trialConfig.subproject_name;
                    this.app.selection.trial_name = this.trialService.trialConfig.trial_name;
                }
            });


    }
}


