import { Component } from '@angular/core';
import { ConfigurationThemeService } from '../../../services/configuration-theme.service';
import { ConfigurationSizeService } from '../../../services/configuration-size.service';


@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrl: './ajustes.component.css'
})
export class AjustesComponent {

  constructor(
    private configThemeService: ConfigurationThemeService,
    private configSizeService: ConfigurationSizeService
  ) {}

  ngOnInit() {
    this.configThemeService.loadConfig();
    this.configSizeService.loadConfig();
  }

  changeSize(size: string) {
    this.configSizeService.changeSize(size);
  }

  changeTipo(tipo: string) {
    this.configThemeService.changeTipo(tipo);
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
