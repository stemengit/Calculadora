import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  @Input() listaTareas: { titulo: string, descripcion: string }[] = [];
  @Output() borrarTarea = new EventEmitter<number>();

  public borrartarea?: { titulo: string, descripcion: string };

  eliminarTarea(index: number): void {
    this.borrartarea = this.listaTareas[index];
    this.listaTareas.splice(index, 1);
    this.borrarTarea.emit(index);
    localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
  }


  get CapitalizatedTitle(): string {
    return this.title.toUpperCase();
  }

  public title = 'Tareas';
}
