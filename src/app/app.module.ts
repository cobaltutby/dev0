//browser
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';

//http
import { HttpModule }           from '@angular/http';

//components

//app
import { AppComponent }         from './app.component';

//header
import { HeaderComponent }      from './components/header/header.component';

//design
import { DesignComponent }              from './components/design/design.component';
import { ParentFormulationComponent }   from './components/design/views/parent.formulation/parent.formulation';
import { ExperimentType }               from './components/design/views/experiment.type/experiment.type';
import { TestFormulations }             from './components/design/views/test.formulations/test.formulations';
import { ProcessParameters }            from './components/design/views/process.parameters/process.parameters';
import { TestShedule }                  from './components/design/views/test.shedule/test.shedule';

//formulation
import { FormulationComponent } from './components/formulation/formulation.component';

//stability
import { StabilityComponent }   from './components/stability/stability.component';

//directives

//pipes
import { UniquePipe }           from './pipes/unic.pipe';
import { ContainPipe }          from './pipes/contain.pipe';

//routing AppRoutingModule
import { AppRoutingModule }     from './routing/app.routing';
import { Router }               from '@angular/router'

//drag&drop
import { DndModule }            from 'ng2-dnd';

//files
//import { FileDropModule }       from 'angular2-file-drop';

import { StateService }             from './services/state.service';
import { StateParamsService }       from './services/stateparams.service';
import { HTTPService }              from './services/http.service';
import { ConfigService }            from './services/config.service';

import { ExperimentSetupService }   from './services/experimentsetup.service';
import { TrialService }             from './services/trial.service';
import { AppService }               from './services/app.service';
import { DesignService }            from './services/design.service';






@NgModule({
  imports:      [ BrowserModule,  FormsModule,  HttpModule, AppRoutingModule, 
                  DndModule.forRoot(), 
  
                  //files
                  //FileDropModule, 
                  
                ],
  declarations: [ 
                  //components
                  AppComponent, 
                  HeaderComponent, 
                  DesignComponent, 
                  FormulationComponent,  
                  ParentFormulationComponent, 
                  ExperimentType, 
                  TestFormulations, 
                  ProcessParameters, 
                  TestShedule,
                  StabilityComponent, 
                  //directives
                  

                  //pipes
                  UniquePipe, ContainPipe, 
                ],
  providers:    [                   

                  ],
  bootstrap:    [ AppComponent ],
})
export class AppModule 
{ 

}

