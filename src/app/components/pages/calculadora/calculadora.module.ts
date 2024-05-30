import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacionComponent } from './operacion/operacion.component';
import { HistorialComponent } from './historial/historial.component';


@NgModule({
  declarations: [
    OperacionComponent,
    HistorialComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    OperacionComponent,
    HistorialComponent
  ]
})
export class CalculadoraModule { }
