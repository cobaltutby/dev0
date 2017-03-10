import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent }      from '../components/header/header.component';
import { DesignComponent }      from '../components/design/design.component';
import { FormulationComponent }      from '../components/formulation/formulation.component';
import { StabilityComponent }      from '../components/stability/stability.component';
 
const appRoutes: Routes = 
[

    //{ path: '', redirectTo: '/design/:trialname', pathMatch: 'full' },
    { path: 'design/:trialname', component: DesignComponent },
    { path: 'formulation', component: FormulationComponent },
    { path: 'stability', component: StabilityComponent },

    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {} 
