import { Component, OnInit } from '@angular/core';
import { ConfigurationThemeService } from './services/configuration-theme.service';
import { ConfigurationSizeService } from './services/configuration-size.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Calculadora';

  constructor(
    private configThemeService: ConfigurationThemeService,
    private configSizeService: ConfigurationSizeService
  ) {}
  ngOnInit() {
    this.configThemeService.loadConfig();
    this.configSizeService.loadConfig();
  }

}
