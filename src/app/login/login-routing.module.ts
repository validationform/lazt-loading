import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogindataComponent } from './logindata/logindata.component';

const routes: Routes = [{ path: 'logindata', component: LogindataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
