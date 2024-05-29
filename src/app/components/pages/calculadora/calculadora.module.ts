import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacionComponent } from './operacion/operacion.component';
import { HistorialComponent } from './historial/historial.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OperacionComponent,
    HistorialComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports: [
    OperacionComponent,
    HistorialComponent
  ]
})
export class CalculadoraModule { }
