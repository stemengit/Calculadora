import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationSizeService {
  private  sizeFuente = 'FontSize';

  constructor() {}

  changeSize(size: string) {
    document.body.classList.remove('tamaño1', 'tamaño2', 'tamaño3');
    document.body.classList.add(size);
    localStorage.setItem(this.sizeFuente, size);
  }



  loadConfig() {
    const savedSize = localStorage.getItem(this.sizeFuente);

    if (savedSize) {
      this.changeSize(savedSize);
    }

  }
}
