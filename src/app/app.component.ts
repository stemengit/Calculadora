import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './services/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'Calculadora';

  constructor(private configService: ConfigurationService) {}

  ngOnInit() {
    this.configService.loadConfig();
  }

}
