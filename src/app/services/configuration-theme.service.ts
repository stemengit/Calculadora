import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationThemeService {
  private  tipoColor = 'ColorType';

  changeTipo(tipo: string) {
    document.body.classList.remove('oscuro', 'claro');
    document.body.classList.add(tipo);
    localStorage.setItem(this.tipoColor, tipo);
  }

  loadConfig() {
    const savedTipo = localStorage.getItem(this.tipoColor);
    if (savedTipo) {
      this.changeTipo(savedTipo);
    }
  }
}
