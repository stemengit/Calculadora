import { NgModule } from '@angular/core';
import { CalculadoraModule } from './calculadora/calculadora.module';
import { HomeModule } from './home/home.module';
import { TareasModule } from './tareas/tareas.module';

@NgModule({
  imports: [
    CalculadoraModule,
    HomeModule,
    TareasModule
  ],
  exports: [
    CalculadoraModule,
    HomeModule,
    TareasModule

  ]
})
export class PagesModule { }
