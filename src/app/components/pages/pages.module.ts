import { NgModule } from '@angular/core';
import { CalculadoraModule } from './calculadora/calculadora.module';

@NgModule({
  imports: [
    CalculadoraModule
  ],
  exports: [
    CalculadoraModule
  ]
})
export class PagesModule { }
