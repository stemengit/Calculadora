import { Component } from '@angular/core';

@Component({
  selector: 'app-component0',
  templateUrl: './component0.component.html'
})
export class Component0 {
  activePage: string = 'home';

  setActive(page: string) {
    this.activePage = page;
  }

  isActive(page: string) {
    return this.activePage === page;
  }
}
