import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SideBarComponent {
  public activePage: string = 'home';
  public title: string = 'Home';

  private titles: { [title: string]: string } = {
    home: 'Home',
    calculadora: 'Calculadora',
    tareas: 'Tareas',
    ajustes: 'Ajustes'
  };

  public setActive(page: string) {
    this.activePage = page;
    this.title = this.titles[page] || 'Home';
  }
}
