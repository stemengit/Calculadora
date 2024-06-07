import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrl: './borrar.component.css',
})
export class BorrarComponent {

  @Input() tareaSeleccionarBorrado:undefined | { id:number, titulo: string, descripcion: string, completada:boolean } = undefined;
  @Output() notificacionAceptarBorrado = new EventEmitter<number>();

  eliminarTarea(): void {
    this.notificacionAceptarBorrado.emit(this.tareaSeleccionarBorrado!.id);
    console.log(this.tareaSeleccionarBorrado?.id)
  }

}
