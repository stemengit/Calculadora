import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
})
export class Component2 implements OnInit {
  history: string[];

  constructor(private historyService: HistoryService) {
    this.history = [];
  }

  ngOnInit(): void {
    this.history = this.historyService.getHistory();
  }
}
