import { Component, OnInit } from '@angular/core';
import { FhirService } from '../fhir.service'; 

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  private patient

  constructor(fhir: FhirService) {
    this.patient = fhir.getPatient()
  }

  getPatient() {
    return this.patient
  }

  getPatientName() {
    return this.patient.name
  }

  ngOnInit(): void {
  }

}
