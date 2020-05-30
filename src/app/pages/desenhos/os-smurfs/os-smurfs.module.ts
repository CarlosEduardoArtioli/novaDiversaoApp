import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OsSmurfsPageRoutingModule } from './os-smurfs-routing.module';

import { OsSmurfsPage } from './os-smurfs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OsSmurfsPageRoutingModule
  ],
  declarations: [OsSmurfsPage]
})
export class OsSmurfsPageModule {}
