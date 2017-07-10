import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HousingComponent } from './housing/housing.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { JobsComponent } from './jobs/jobs.component';
import { PersonalsComponent } from './personals/personals.component';
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
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
