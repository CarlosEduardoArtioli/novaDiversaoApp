import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlhaDaFantasiaPageRoutingModule } from './ilha-da-fantasia-routing.module';

import { IlhaDaFantasiaPage } from './ilha-da-fantasia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlhaDaFantasiaPageRoutingModule
  ],
  declarations: [IlhaDaFantasiaPage]
})
export class IlhaDaFantasiaPageModule {}
