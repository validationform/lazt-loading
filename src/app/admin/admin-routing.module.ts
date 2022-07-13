import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindataComponent } from './admindata/admindata.component';

const routes: Routes = [{ path: 'admindata', component: AdmindataComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
