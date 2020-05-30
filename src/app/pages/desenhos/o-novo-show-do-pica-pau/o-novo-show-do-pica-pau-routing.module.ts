import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ONovoShowDoPicaPauPage } from './o-novo-show-do-pica-pau.page';

const routes: Routes = [
  {
    path: '',
    component: ONovoShowDoPicaPauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ONovoShowDoPicaPauPageRoutingModule {}
