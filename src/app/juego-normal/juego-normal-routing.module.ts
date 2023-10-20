import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegoNormalPage } from './juego-normal.page';

const routes: Routes = [
  {
    path: '',
    component: JuegoNormalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegoNormalPageRoutingModule {}
