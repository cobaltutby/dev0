import { Component, OnInit }    from '@angular/core';

import { ExperimentSetupService }   from '../../../../services/experimentsetup.service';
import { StateService }             from '../../../../services/state.service';
import { DesignService }             from '../../../../services/design.service';

import { Process }                  from '../../../../types/types';


@Component({
  moduleId:     'module.id',
  selector:     'my-processparameters',
  templateUrl:  './process.parameters.html',
  //styleUrls:    ['header.component.css'],
  providers:    [  ],
})
export class ProcessParameters implements OnInit

{
  selection: Process;

  constructor(private design:           DesignService,
              private state:            StateService,
              private experimentSetup:  ExperimentSetupService,
              ) 
              {
                this.selection = new Process();
              }
  ngOnInit()
  {
    
  } 
  Info()
  {
    console.dir(this.experimentSetup);
  }
    
}
