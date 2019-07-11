import { Component, OnInit } from '@angular/core';
import { PatientService } from './service/patient.service';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  patientt: Patient;

  constructor(private route : ActivatedRoute,
              private patientService : PatientService,
              private location : Location) {
  }

  ngOnInit() {
    this.getPatient();
  }

  getPatient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("id " + id);
    this.patientService.getPatient(id)
      .subscribe(patientt => this.patientt = patientt)
  }

  goBack() : void{
    this.location.back();
  }
  
}
