import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AprendizDeEspiaPage } from './aprendiz-de-espia.page';

const routes: Routes = [
  {
    path: '',
    component: AprendizDeEspiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AprendizDeEspiaPageRoutingModule {}
