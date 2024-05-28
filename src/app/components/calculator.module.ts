import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component0 } from './component0/component0.component';
import { Component1 } from './component1/component1.component';
import { Component2 } from './component2/component2.component';

@NgModule({
  declarations: [
    Component0,
    Component1,
    Component2
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Component0,
    Component1,
    Component2
  ]
})
export class CalculatorModule { }
