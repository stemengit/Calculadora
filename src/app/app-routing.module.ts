import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { CalculadoraComponent } from './components/pages/calculadora/calculadora.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TareasComponent } from './components/pages/tareas/tareas.component';
import { AjustesComponent } from './components/pages/ajustes/ajustes.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'calculadora',
    component: CalculadoraComponent
  },

  {
    path: 'tareas',
    component: TareasComponent
  },

  {
    path: 'ajustes',
    component: AjustesComponent
  },

  {
    path: '**',
    redirectTo: 'home'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
