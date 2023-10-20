import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegoFacilPage } from './juego-facil.page';

const routes: Routes = [
  {
    path: '',
    component: JuegoFacilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegoFacilPageRoutingModule {}
