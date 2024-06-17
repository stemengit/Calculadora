import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html'
})
export class TareasComponent implements OnInit {

  public listaTareas: { id: number, titulo: string, descripcion: string, completada: boolean }[] = [];


  ngOnInit() {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas') || '[]');
    this.listaTareas = tareasGuardadas;
  }

  agregarTarea(tarea: { id: number, titulo: string, descripcion: string, completada: boolean }) {
    const nuevaTarea = { ...tarea };
    this.listaTareas.push(nuevaTarea);
    localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
  }

  borrarTarea(id: number) {
    this.listaTareas = this.listaTareas.filter(element => element.id != id);
    localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
  }

  editarTarea(tarea: { id: number, titulo: string, descripcion: string, completada: boolean }) {
    this.listaTareas = this.listaTareas.map(element => {
      if (element.id == tarea.id) element = tarea;
      return element;
    });
    localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
  }

  actualizarEstadoTarea(tareaId: number, completada: boolean) {
    const tarea = this.listaTareas.find(t => t.id === tareaId);
    if (tarea) {
        tarea.completada = completada;
        localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
    }
}



}

