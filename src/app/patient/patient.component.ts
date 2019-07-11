import { Component, OnInit , OnChanges, Input } from '@angular/core';
import { PatientService } from '../patient-detail/service/patient.service';
import { filter } from 'minimatch';
import { Patient } from '../patient.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  @Input() filterBy?: boolean = null;
  PATIENTS$: Patient[];

  constructor(private patientService : PatientService) { 
    //this.PATIENTS = this.patientService.getPatients();
    //this.patientService.getPatients().subscribe(data => this.PATIENTS$ = data);
  }

  checkTF(patient : any){
    if (patient.completed === true || patient.completed === "true"){
     return true;
    }
  }
  checkOption(statuss : string,patient : any){
      // for (var i = 0; i < this.PATIENTS.length; i++){
      //   if (this.PATIENTS[i] === patient){
      //     this.PATIENTS[i].status = statuss;
      //   }
      patient.completed = statuss;
      // this.patientService..subscribe(patientt => this.patientt = patientt)
     return true;
    
  }
  changOption(patient : any){
    console.log("before " + patient.completed);
    patient.completed = !patient.completed; // false;
    console.log(patient.completed);
    return false;
  }

  changOption1(event,patient : any){
    console.log("before " + patient.completed);
    patient.completed = true;
    console.log(patient.completed);
    return false;
  }

  // changOption1(patient : any){
  //   patient.completed = true;
  //   console.log(patient.completed);
  //   return true;
  // }


  ngOnInit() {
    return this.patientService.getPatients().subscribe(data => {
      this.PATIENTS$ = data;
      console.log(this.PATIENTS$);
    });
    //console.log(2);
  }

  ngOnChanges(){
    //this.PATIENTS = this.patientService.getPatients();
 
  }

}
