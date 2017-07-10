import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { HousingComponent } from './housing/housing.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { JobsComponent } from './jobs/jobs.component';
import { PersonalsComponent } from './personals/personals.component';
import { HousingDetailComponent } from './housing-detail/housing-detail.component';
import { ForSaleDetailComponent } from './for-sale-detail/for-sale-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HousingComponent,
    ForSaleComponent,
    JobsComponent,
    PersonalsComponent,
    HousingDetailComponent,
    ForSaleDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
