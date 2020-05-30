import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeiOrdemPage } from './lei-ordem.page';

const routes: Routes = [
  {
    path: '',
    component: LeiOrdemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeiOrdemPageRoutingModule {}
