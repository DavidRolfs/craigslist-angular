import { Component, OnInit } from '@angular/core';
import { Housing } from '../housing.model';
import { Router } from '@angular/router';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css'],
  providers: [HousingService]
})

export class HousingComponent implements OnInit{

  housings: Housing[];

  constructor(private router: Router, private housingService: HousingService) {}

  ngOnInit(){
    this.housings = this.housingService.getHousings();
  }

  goToDetailPage(clickedHousing: Housing) {
    this.router.navigate(['housing', clickedHousing.id]);
  };

}
