import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FhirService {

  constructor() { }

  public getPatient() {
    return {
      name: 'John Doe'
    }
  }

  public getEncounter() {
    return {
      type: 'Inpatient'
    }
  }
  
}
