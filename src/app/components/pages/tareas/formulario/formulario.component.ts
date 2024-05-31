import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Output() tareaGuardada = new EventEmitter<{ titulo: string, descripcion: string }>();

  save() {
    this.tareaGuardada.emit({ titulo: this.titulo, descripcion: this.descripcion });
    this.titulo = '';
    this.descripcion = '';
  }
}
