import { Component } from '@angular/core';
import { HistoryService } from '../../../../services/history.service';
import { evaluate } from 'mathjs';


@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent {

  private operadoresUnicos = ['+', '*', '/', '='];

  currentInput: string = '';
  resultShown: boolean = false;

  constructor(private historyService: HistoryService) { }

  onButtonClick(value: string) {

    if (this.resultShown) {
      this.currentInput = '';
      this.resultShown = false;
    }

    if (value === '=') {
      this.calculateResult();
      return;
    }

     if ((this.operadoresUnicos.includes(this.currentInput[this.currentInput.length - 1])
      && this.operadoresUnicos.includes(value))) {
      this.currentInput = this.currentInput.substring(0, this.currentInput.length - 1) + value;
      return;
    }
     if (this.operadoresUnicos.includes(value)) {
      this.currentInput += `${value}`;
      return;
    }
     if (value === '%') {
      this.currentInput = (parseFloat(this.currentInput) * 0.01).toString();
      return;
    }
    if (value === '+/-') {
      this.currentInput = this.currentInput.replace(/\d+$/, match => `-${match}`);
      return;
    }
    if (value === 'AC') {
      this.currentInput = '';
      return;
    }

      this.currentInput += value;
  }


  calculateResult() {
    if (this.currentInput.length > 1) {
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
}
