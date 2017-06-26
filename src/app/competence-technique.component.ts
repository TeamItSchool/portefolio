import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

@Component({
  selector: 'competence-technique',
  templateUrl: './competence-technique.component.html',
  styleUrls: [ './realisation-detail.component.css' ]
})
export class CompetenceTechniqueComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
      
  }

  goBack(): void {
    this.location.back();
  }
}