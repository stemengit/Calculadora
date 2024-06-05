import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html'
})
export class TareasComponent implements OnInit {
  public listaTareas: { id: number, titulo: string, descripcion: string }[] = [];

  ngOnInit() {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas') || '[]');
    this.listaTareas = tareasGuardadas;
  }

  agregarTarea(tarea: { id: number, titulo: string, descripcion: string }) {
    this.listaTareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
  }

  borrarTarea(index: number) {
    this.listaTareas.splice(index, 1);
    localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
  }

  editarTarea(tarea: { id: number, titulo: string, descripcion: string }) {
    const index = this.listaTareas.findIndex(t => t.id === tarea.id);

    if (index !== -1) {
      this.listaTareas[index] = tarea;

      localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
    } else {
      console.error('La tarea no existe en la lista.');
    }
  }





}
