import { Component, OnInit } from '@angular/core';
import { ForSale } from '../for-sale.model';
import { Router } from '@angular/router';
import { ForSaleService } from '../for-sale.service';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css'],
  providers: [ForSaleService]
})
export class ForSaleComponent implements OnInit {

  forSale: ForSale[];

  constructor(private router: Router, private forSaleService: ForSaleService) { }

  ngOnInit() {
    this.forSale = this.forSaleService.getForSale();
  }
  goToDetailPage(clickedForSale: ForSale) {
    this.router.navigate(['for-sale', clickedForSale.id]);
  };

}
