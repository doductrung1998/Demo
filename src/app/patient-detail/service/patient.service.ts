import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from 'src/app/patient.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  //PATIENTS = [];
  
  PATIENTS$: any;
  apiUrl= "https://jsonplaceholder.typicode.com/todos"
  constructor(private _http : HttpClient) { }
  getPatients() :Observable<any>{
    //return this.PATIENTS = Patient.slice(0);
    this._http.get(this.apiUrl).subscribe(patients => {
      this.PATIENTS$ = patients;
    });
    return this._http.get(this.apiUrl);
  }

  getPatient(id: number): Observable<Patient> {
    console.log("Trung" + this.PATIENTS$);
    return of(this.PATIENTS$.find(p => p.id === id));
    // TODO: send the message _after_ fetching the hero
  }
}

// const Patient = [
//   {"day" : "15-Aug-17" , "time" : "10:00 - 11:05" , "address" : "Quan 7 , TP HCM" , "provider" : "Amstrong jones" , "purpose" : "reassess" , "status" : "Closed"},
//   {"day" : "10-Aug-12" , "time" : "10:00 - 11:05" , "address" : "Quan 7 , TP HCM" , "provider" : "Amstrong jones" , "purpose" : "reassess" , "status" : "Closed"},
//   {"day" : "5-Aug-6" , "time" : "10:00 - 11:05" , "address" : "Quan 7 , TP HCM" , "provider" : "Amstrong jones" , "purpose" : "reassess" , "status" : "Closed"},
// ];
