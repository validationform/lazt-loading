import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboarddataComponent } from './dashboarddata/dashboarddata.component';

const routes: Routes = [{ path: 'dashboarddata', component:  DashboarddataComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
