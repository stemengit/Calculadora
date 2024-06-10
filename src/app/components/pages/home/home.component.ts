import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl:'home.component.html',
})

export class HomeComponent {

  public title: string = 'Bienvenido al HOME';

  get CapitalizatedTitle():string {
   return  this.title.toUpperCase();
  }
}

