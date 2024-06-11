import { Component, Input, Output, EventEmitter, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl:'./formulario.component.css'
})
export class FormularioComponent implements OnInit{

  private  tipoColor = 'ColorType';

  public  tipo: null | string= '';

  public titulo: string = '';
  public descripcion: string = '';
  public completada: boolean = false;

  id: undefined | number = undefined;

  ngOnInit(): void {
    this.tipo = localStorage.getItem(this.tipoColor);
  }

  @Input() listaTareas: { id: number, titulo: string, descripcion: string, completada: boolean }[] = [];
  @Input() set tareaSeleccionarEdicion(value: undefined | { id: number, titulo: string, descripcion: string, completada: boolean }) {
    if (value) {
      this.titulo = value.titulo;
      this.descripcion = value.descripcion;
      this.id = value.id;
      this.completada = value.completada;
    }
  }

  @Output() tareaGuardada = new EventEmitter<{ id: number, titulo: string, descripcion: string, completada: boolean }>();
  @Output() notificacionAceptarEdicion = new EventEmitter<{ id: number, titulo: string, descripcion: string, completada: boolean }>();
  @Output() notificarEstadoTarea = new EventEmitter<{ id: number, completada: boolean }>();

  save() {
    const date = new Date();
    const id = date.getTime();
    this.tareaGuardada.emit({ id, titulo: this.titulo, descripcion: this.descripcion, completada: this.completada });
    this.titulo = '';
    this.descripcion = '';
    this.completada = false;
  }

  edit() {
    this.notificacionAceptarEdicion.emit({ id: this.id!, titulo: this.titulo, descripcion: this.descripcion, completada: this.completada });
    this.titulo = '';
    this.descripcion = '';
    this.completada = false;
  }

  estadoTarea(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.completada = checkbox.checked;
    this.notificarEstadoTarea.emit({ id: this.id!, completada: this.completada });
  }
}
