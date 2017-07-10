import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HousingComponent } from './housing/housing.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { JobsComponent } from './jobs/jobs.component';
import { PersonalsComponent } from './personals/personals.component';
import { HousingDetailComponent } from './housing-detail/housing-detail.component';
import { ForSaleDetailComponent } from './for-sale-detail/for-sale-detail.component'

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'housing',
    component: HousingComponent
  },
  {
    path: 'for-sale',
    component: ForSaleComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'personals',
    component: PersonalsComponent
  },
  {
    path: 'housing/:id',
    component: HousingDetailComponent
  },
  {
    path: 'for-sale/:id',
    component: ForSaleDetailComponent
  }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
