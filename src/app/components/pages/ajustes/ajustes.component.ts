import { Component } from '@angular/core';
import { ConfigurationService } from '../../../services/configuration.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrl: './ajustes.component.css'
})
export class AjustesComponent {

  constructor(private configService: ConfigurationService) {}

  ngOnInit() {
    this.configService.loadConfig();
  }

  changeSize(size: string) {
    this.configService.changeSize(size);
  }

  changeTipo(tipo: string) {
    this.configService.changeTipo(tipo);
  }

  isSizeSelected(size: string): boolean {
    const bodyClasses = document.body.classList;
    return bodyClasses.contains(size);
  }

  isTipoSelected(tipo: string): boolean {
    const bodyClasses = document.body.classList;
    return bodyClasses.contains(tipo);
  }
}
