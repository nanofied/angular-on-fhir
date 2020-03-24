import { Component, OnInit } from '@angular/core';
import { FhirService } from '../fhir.service';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit {

  private encounter

  constructor(fhir: FhirService) {
    this.encounter = fhir.getEncounter()
  }

  getEncounter() {
    return this.encounter
  }

  getEncounterType() {
    return this.encounter.type
  }

  ngOnInit(): void {
  }

}
