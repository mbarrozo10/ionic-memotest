import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadisticasPage } from './estadisticas.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: EstadisticasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadisticasPageRoutingModule {}
