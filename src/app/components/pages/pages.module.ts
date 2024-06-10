import { NgModule } from '@angular/core';
import { CalculadoraModule } from './calculadora/calculadora.module';
import { HomeModule } from './home/home.module';
import { TareasModule } from './tareas/tareas.module';
import { AjustesModule } from './ajustes/ajustes.module';

@NgModule({
  imports: [
    CalculadoraModule,
    HomeModule,
    TareasModule,
    AjustesModule
  ],
  exports: [
    CalculadoraModule,
    HomeModule,
    TareasModule,
    AjustesModule
  ]
})
export class PagesModule { }
