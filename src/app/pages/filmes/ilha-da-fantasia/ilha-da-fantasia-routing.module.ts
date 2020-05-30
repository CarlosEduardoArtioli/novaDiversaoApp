import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlhaDaFantasiaPage } from './ilha-da-fantasia.page';

const routes: Routes = [
  {
    path: '',
    component: IlhaDaFantasiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlhaDaFantasiaPageRoutingModule {}
