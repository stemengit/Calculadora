import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrl: './borrar.component.css',
})
export class BorrarComponent {
  @Input() listaTareas: { id:number, titulo: string, descripcion: string }[] = [];
  @Output() borrarTarea = new EventEmitter<number>();

  eliminarTarea(index: number): void {
    this.borrarTarea.emit(index);
  }

}
