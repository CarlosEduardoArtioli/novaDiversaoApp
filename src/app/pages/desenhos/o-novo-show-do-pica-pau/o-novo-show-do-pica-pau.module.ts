import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ONovoShowDoPicaPauPageRoutingModule } from './o-novo-show-do-pica-pau-routing.module';

import { ONovoShowDoPicaPauPage } from './o-novo-show-do-pica-pau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ONovoShowDoPicaPauPageRoutingModule
  ],
  declarations: [ONovoShowDoPicaPauPage]
})
export class ONovoShowDoPicaPauPageModule {}
