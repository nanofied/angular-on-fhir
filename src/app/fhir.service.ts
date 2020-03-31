import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FhirService {

  constructor() { }

  public getPatient(patient: number) {
    return {
      id: patient,
      name: 'John Doe'
    }
  }

  public getEncounter(encounter: number) {
    return {
      id: encounter,
      type: 'Inpatient'
    }
  }
  
}
