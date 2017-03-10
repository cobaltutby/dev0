import { Component, OnInit }    from '@angular/core';

import { ExperimentSetupService }   from '../../../../services/experimentsetup.service';
import { StateService }             from '../../../../services/state.service';
import { DesignService }            from '../../../../services/design.service';


@Component({
  moduleId:     'module.id',
  selector:     'my-testformulations',
  templateUrl:  './test.formulations.html',
})

export class TestFormulations implements OnInit

{
  constructor(private design:            DesignService,
                  private state:            StateService,
                  private experimentSetup:  ExperimentSetupService,
                  ) 
  {
  }

  ngOnInit()
  {
    this.design.submitExpTypeForm();
  }
}
