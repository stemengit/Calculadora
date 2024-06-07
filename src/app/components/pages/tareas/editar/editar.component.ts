import { Component, EventEmitter, Input, Output } from '@angular/core';
import { boolean } from 'mathjs';

@Component({
  selector: 'app-editar',

  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
})
export class EditarComponent {

  titulo: string = '';
  descripcion: string = '';
  id: undefined | number = undefined;
  completada: boolean = false

  @Input() set tareaSeleccionarEdicion(value: undefined | { id:number, titulo: string, descripcion: string, completada:boolean } ) {
    if (value){
    this.titulo = value.titulo;
    this.descripcion = value.descripcion;
    this.id = value.id;
    this.completada = value.completada
  }
}
  @Output() notificacionAceptarEdicion = new EventEmitter<{ id:number, titulo: string, descripcion: string, completada:boolean }>();


  edit() {
    this.notificacionAceptarEdicion.emit({ id: this.id! , titulo: this.titulo, descripcion: this.descripcion, completada: this.completada });
    this.titulo = '';
    this.descripcion = '';
  }

}
