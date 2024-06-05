import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  @Input() listaTareas: { id: number, titulo: string, descripcion: string }[] = [];

  get CapitalizatedTitle(): string {
    return this.title.toUpperCase();
  }

  public title = 'Tareas';


}
