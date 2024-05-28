import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalculatorModule } from './components/calculator.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CalculatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
