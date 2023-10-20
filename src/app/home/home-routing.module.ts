import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'juego',     loadChildren: () => import('../juego/juego.module').then( m => m.JuegoPageModule)
  },
  {
    path: 'juegoFacil',     loadChildren: () => import('../juego-facil/juego-facil.module').then( m => m.JuegoFacilPageModule)
  },
  {
    path: 'juegoNormal',     loadChildren: () => import('../juego-normal/juego-normal.module').then( m => m.JuegoNormalPageModule)
  },{
    path: 'estadisticas', loadChildren: () => import('../estadisticas/estadisticas.module').then( m => m.EstadisticasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
