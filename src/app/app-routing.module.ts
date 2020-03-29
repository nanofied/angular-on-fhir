import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { EncounterComponent } from './encounter/encounter.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'patient/:id',  component: PatientComponent },
  { path: 'encounter/:id',  component: EncounterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
