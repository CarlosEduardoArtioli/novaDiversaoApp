import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeppaPigPageRoutingModule } from './peppa-pig-routing.module';

import { PeppaPigPage } from './peppa-pig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeppaPigPageRoutingModule
  ],
  declarations: [PeppaPigPage]
})
export class PeppaPigPageModule {}
