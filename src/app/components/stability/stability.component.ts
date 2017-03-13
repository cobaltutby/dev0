import { Component }          from '@angular/core';

import { StateService }       from '../../services/state.service';
import { StabilityService }   from '../../services/stability.service';


@Component({
  // moduleId:     'module.id',
  selector:     'my-stability',
  templateUrl:  './stability.component.html',

})
export class StabilityComponent  
{
    showPlots: boolean = false;
    newTestWeek: string;
    constructor(
   
                private state:      StateService,
                private stability:  StabilityService,
                )
    {
      
    } 
    ngOnInit()
    {
      for (let test in this.stability.tests)
      {
          this.stability.tests[test]['divThis'] = document.getElementById('stability-plots-this-' + this.stability.tests[test]['div']);
          this.stability.tests[test]['divAll'] = document.getElementById('stability-plots-all-' + this.stability.tests[test]['div']);
      }
      this.stability.stabilityHotDiv = document.getElementById('stability-grid');
      this.stability.stabilityPlotDivAll = document.getElementById('stability-plots-all');
      this.stability.stabilityPlotDivThis = document.getElementById('stability-plots-this-pH');
      this.stability.loadStabilityView();
    }
}