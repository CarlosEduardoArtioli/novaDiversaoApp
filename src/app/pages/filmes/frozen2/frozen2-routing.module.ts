import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Frozen2Page } from './frozen2.page';

const routes: Routes = [
  {
    path: '',
    component: Frozen2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Frozen2PageRoutingModule {}
