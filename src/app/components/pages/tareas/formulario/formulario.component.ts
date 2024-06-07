import { Component, Input, Output, EventEmitter } from '@angular/core';
import { boolean } from 'mathjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {
  public titulo: string = '';
  public descripcion: string = '';
  public completada: boolean = false;

  @Output() tareaGuardada = new EventEmitter<{ id: number, titulo: string, descripcion: string, completada: boolean }>();

  save() {
    const date = new Date();
    const id = date.getTime();
    this.tareaGuardada.emit({ id, titulo: this.titulo, descripcion: this.descripcion, completada: this.completada });
    this.titulo = '';
    this.descripcion = '';
  }
}
