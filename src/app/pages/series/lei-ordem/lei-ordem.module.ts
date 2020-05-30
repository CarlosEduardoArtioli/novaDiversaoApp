import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeiOrdemPageRoutingModule } from './lei-ordem-routing.module';

import { LeiOrdemPage } from './lei-ordem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeiOrdemPageRoutingModule
  ],
  declarations: [LeiOrdemPage]
})
export class LeiOrdemPageModule {}
