import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OsSmurfsPage } from './os-smurfs.page';

const routes: Routes = [
  {
    path: '',
    component: OsSmurfsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OsSmurfsPageRoutingModule {}
