import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';

  @Output() tareaGuardada = new EventEmitter<{ id:number, titulo: string, descripcion: string }>();

  save() {
    const date = new Date();
    const id = date.getTime();
    this.tareaGuardada.emit({ id:id, titulo: this.titulo, descripcion: this.descripcion });
    this.titulo = '';
    this.descripcion = '';
  }
}
