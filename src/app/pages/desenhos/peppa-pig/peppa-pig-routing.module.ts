import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeppaPigPage } from './peppa-pig.page';

const routes: Routes = [
  {
    path: '',
    component: PeppaPigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeppaPigPageRoutingModule {}
