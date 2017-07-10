import { Injectable } from '@angular/core';
import { Housing } from './housing.model';
import { HOUSINGS } from './mock-housing';

@Injectable()
export class HousingService {

  constructor() { }

  getHousings() {
  return HOUSINGS;
  }

  getHousingById(housingId: number){
  for (var i = 0; i <= HOUSINGS.length - 1; i++) {
    if (HOUSINGS[i].id === housingId) {
      return HOUSINGS[i];
    }
  }
}

}
