import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdAstraPage } from './ad-astra.page';

const routes: Routes = [
  {
    path: '',
    component: AdAstraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdAstraPageRoutingModule {}
