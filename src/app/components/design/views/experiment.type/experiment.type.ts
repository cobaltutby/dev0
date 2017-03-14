import { Component }    from '@angular/core';

import { ExperimentSetupService }   from '../../../../services/experimentsetup.service';
import { DesignService }            from '../../../../services/design.service';
import { StateService }             from '../../../../services/state.service';
import { DesignDataService }        from '../../../../services/designdata.service';

@Component({
  moduleId:     'module.id',
  selector:     'my-experimenttype',
  templateUrl:  './experiment.type.html',
})
export class ExperimentType

{ 

    type: string;
    constructor(
                private state:            StateService,
                private design:           DesignService,
                private designData:       DesignDataService,
                private experimentSetup:  ExperimentSetupService,
                )
    {
    }

    changeType()
    {
      for(let t of this.experimentSetup.experimentType.data.experimentType)
      {
        if(t.Type[0] === this.type)
        {
          this.experimentSetup.experimentType.selected.Type = t.Type;
          this.experimentSetup.experimentType.selected.number = t.number;
          this.experimentSetup.experimentType.selected.list = t.list;
          this.experimentSetup.experimentType.selected.ing = t.ing;
        }
      }
        this.experimentSetup.experimentType.selected.gotData = true;
    }
}
