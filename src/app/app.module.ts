import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';

//!--- Import
import { AlertModule } from 'ngx-bootstrap';
import { PatientDetailComponent } from './patient-detail/patient-detail.component'; 
import { PatientService } from './patient-detail/service/patient.service';
import { patientFilterPipe } from './patient-detail/service/filter.pipe';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { TrungComponent } from './trung/trung.component';
@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientDetailComponent,
    patientFilterPipe,
    TrungComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [PatientService , patientFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
