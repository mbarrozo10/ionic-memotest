import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegoNormalPageRoutingModule } from './juego-normal-routing.module';

import { JuegoNormalPage } from './juego-normal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegoNormalPageRoutingModule
  ],
  declarations: [JuegoNormalPage]
})
export class JuegoNormalPageModule {}
