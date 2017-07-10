import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Housing } from '../housing.model';
import { HousingService } from '../housing.service'

@Component({
  selector: 'app-housing-detail',
  templateUrl: './housing-detail.component.html',
  styleUrls: ['./housing-detail.component.css'],
  providers: [HousingService]
})

export class HousingDetailComponent implements OnInit {
  housingId: number;
  housingToDisplay: Housing

  constructor(private route: ActivatedRoute, private location: Location, private housingService: HousingService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.housingId = parseInt(urlParameters['id']);
    });
    this.housingToDisplay = this.housingService.getHousingById(this.housingId);
  }

}
