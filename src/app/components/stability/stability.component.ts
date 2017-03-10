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
      this.state.current.name = 'stability';
      this.stability.loadStabilityView();
      //this.stability.loadStabilityPlots();
    } 
    ngOnInit()
    {
      this.stability.stabilityHotDiv = document.getElementById('stability-grid');
    
      this.stability.stabilityPlotDivAll = document.getElementById('stability-plots-all');
      this.stability.stabilityPlotDivThis = document.getElementById('stability-plots-this-pH');
    }
  
}