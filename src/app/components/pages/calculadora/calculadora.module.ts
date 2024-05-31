import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacionComponent } from './operacion/operacion.component';
import { HistorialComponent } from './historial/historial.component';
import { CalculadoraComponent } from './calculadora.component';


@NgModule({
  declarations: [
    OperacionComponent,
    HistorialComponent,
    CalculadoraComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    OperacionComponent,
    HistorialComponent,
    CalculadoraComponent
  ]
})
export class CalculadoraModule { }
