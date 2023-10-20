import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegoFacilPageRoutingModule } from './juego-facil-routing.module';

import { JuegoFacilPage } from './juego-facil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegoFacilPageRoutingModule
  ],
  declarations: [JuegoFacilPage]
})
export class JuegoFacilPageModule {}
