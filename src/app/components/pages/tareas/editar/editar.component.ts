import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-editar',

  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
})
export class EditarComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() listaTareas: { id:number, titulo: string, descripcion: string }[] = [];
  @Output() tareaEditada = new EventEmitter<{ id:number, titulo: string, descripcion: string }>();


  edit(tarea: { id: number, titulo: string, descripcion: string }) {
    this.tareaEditada.emit(tarea);
    this.titulo = '';
    this.descripcion = '';
  }

}
