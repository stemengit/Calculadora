import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../../../services/history.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrl: 'historial.component.css'
})
export class HistorialComponent implements OnInit {
  history: string[];

  constructor(private historyService: HistoryService) {
    this.history = [];
  }

  ngOnInit(): void {
    this.history = this.historyService.getHistory();
  }
}
