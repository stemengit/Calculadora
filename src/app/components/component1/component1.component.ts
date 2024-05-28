import { Component } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html'
})
export class Component1 {
  currentInput: string = '';

  constructor(private historyService: HistoryService) {}

  onButtonClick(value: string) {
    if (value === '=') {
      this.calculateResult();
    } else if (['+', '-', '*', '/'].includes(value)) {
      this.currentInput += ` ${value} `;
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
      this.currentInput = '';
    } catch {
      this.currentInput = 'Error';
    }
  }
}
