import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FhirService } from '../fhir.service';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit {

  encounter: any

  constructor(
    private route: ActivatedRoute,
    private fhir: FhirService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.encounter = this.fhir.getEncounter(+params.get('id'))
      }
    )
  }

}
