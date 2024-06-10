import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private  sizeFuente = 'FontSize';
  private  tipoColor = 'ColorType';

  constructor() {}

  changeSize(size: string) {
    document.body.classList.remove('tamaño1', 'tamaño2', 'tamaño3');
    document.body.classList.add(size);
    localStorage.setItem(this.sizeFuente, size);
  }

  changeTipo(tipo: string) {
    document.body.classList.remove('oscuro', 'claro');
    document.body.classList.add(tipo);
    localStorage.setItem(this.tipoColor, tipo);
  }

  loadConfig() {
    const savedSize = localStorage.getItem(this.sizeFuente);
    const savedTipo = localStorage.getItem(this.tipoColor);

    if (savedSize) {
      this.changeSize(savedSize);
    }

    if (savedTipo) {
      this.changeTipo(savedTipo);
    }
  }
}
