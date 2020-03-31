import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FhirService } from '../fhir.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patient: any

  constructor(
    private route: ActivatedRoute,
    private fhir: FhirService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.patient = this.fhir.getPatient(+params.get('id'))
      }
    )
  }

}
