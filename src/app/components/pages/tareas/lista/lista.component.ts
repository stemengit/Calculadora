import { Component, Input, Output, EventEmitter, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  public tareaSeleccionada: undefined | { id: number, titulo: string, descripcion: string, completada: boolean } = undefined;


  @Input() listaTareas: { id: number, titulo: string, descripcion: string, completada: boolean }[] = [];

  @Output() notificarNuevaTarea = new EventEmitter<{ id: number, titulo: string, descripcion: string, completada: boolean }>();
  @Output() notificarEdicionTarea = new EventEmitter<{ id: number, titulo: string, descripcion: string, completada: boolean }>();
  @Output() notificarEliminacionTarea = new EventEmitter<number>();
  @Output() notificarEstadoTarea = new EventEmitter<{ id: number, completada: boolean }>();



  agregarTareaLista($event: { id: number; titulo: string; descripcion: string; completada: boolean; }) {
    this.notificarNuevaTarea.emit($event)
  }

  borrarTareaLista($event: number) {
    this.notificarEliminacionTarea.emit($event)
  }

  editarTareaLista($event: { id: number; titulo: string; descripcion: string; completada: boolean; }) {
    this.notificarEdicionTarea.emit($event)
  }

  seleccionarTarea(index: number) {
    this.tareaSeleccionada = this.listaTareas[index];
  }

  estadoTarea(event: Event, tareaId: number): void {
    const checkbox = event.target as HTMLInputElement;
    const completada = checkbox.checked;
    this.notificarEstadoTarea.emit({ id: tareaId, completada });
  }

  get CapitalizatedTitle(): string {
    return this.title.toUpperCase();
  }

  public title = 'Tareas';


}
