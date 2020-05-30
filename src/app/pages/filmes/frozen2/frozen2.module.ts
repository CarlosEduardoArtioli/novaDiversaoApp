import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Frozen2PageRoutingModule } from './frozen2-routing.module';

import { Frozen2Page } from './frozen2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Frozen2PageRoutingModule
  ],
  declarations: [Frozen2Page]
})
export class Frozen2PageModule {}
