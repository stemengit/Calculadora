import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { HistoryService } from '../../../../services/history.service';
import { evaluate } from 'mathjs';


@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent implements OnChanges{

  ngOnChanges( s: SimpleChanges ){
    this.revisarOperadores();

  }


revisarOperadores() {

   if (['+', '-', '*', '/'].includes( this.currentInput[this.currentInput.length-1] )
    && ['+', '-', '*', '/'].includes( this.currentInput[this.currentInput.length-2] )){

      this.currentInput = this.currentInput.substring(0,this.currentInput.length-3) + this.currentInput[this.currentInput.length-1];

  }
  console.log('Hola: ' +this.currentInput[this.currentInput.length-1] )


}
  currentInput: string = '';
  resultShown: boolean = false;

  constructor(private historyService: HistoryService) {}

  onButtonClick(value: string) {
    if (this.resultShown) {
      this.currentInput = '';
      this.resultShown = false;
    }

    if (value === '=') {
      this.calculateResult();
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (value === '-' && this.currentInput.endsWith('-')) {
        this.currentInput = this.currentInput.slice(0, -1);
      } else {
        this.currentInput += ` ${value} `;
      }
    } else if (value === '+/-') {
      if (this.currentInput.startsWith('-')) {
        this.currentInput = this.currentInput.substring(1);
      } else {
        this.currentInput = `-${this.currentInput}`;
      }
    } else if (value === '%') {
      this.currentInput = (parseFloat(this.currentInput) * 0.01).toString();
    } else if (value === 'AC') {
      this.currentInput = '';
    } else {
      this.currentInput += value;
    }
}


  calculateResult() {
    try {
      const rawResult = evaluate(this.currentInput);
      const result = parseFloat(rawResult).toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      });
      const entry = `${this.currentInput} = ${result}`;
      this.historyService.addToHistory(entry);
      this.currentInput = result.toString();
      this.resultShown = true;
    } catch {
      this.currentInput = 'Error';
      this.resultShown = true;
    }
  }
}
