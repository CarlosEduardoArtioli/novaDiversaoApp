import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AprendizDeEspiaPageRoutingModule } from './aprendiz-de-espia-routing.module';

import { AprendizDeEspiaPage } from './aprendiz-de-espia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AprendizDeEspiaPageRoutingModule
  ],
  declarations: [AprendizDeEspiaPage]
})
export class AprendizDeEspiaPageModule {}
