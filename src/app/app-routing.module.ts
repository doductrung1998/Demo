import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent} from './patient/patient.component';
import {PatientDetailComponent} from './patient-detail/patient-detail.component';
import { TrungComponent } from './trung/trung.component';


const routes: Routes = [
  {path: 'detail/:id', component : PatientDetailComponent },
  { path: 'trung', component: TrungComponent },
  {path :'', component: PatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
