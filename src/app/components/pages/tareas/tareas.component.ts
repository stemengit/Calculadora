import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html'
})
export class TareasComponent implements OnInit {
  public listaTareas: { titulo: string, descripcion: string }[] = [];

  ngOnInit() {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas') || '[]');
    this.listaTareas = tareasGuardadas;
  }

  agregarTarea(tarea: { titulo: string, descripcion: string }) {
    this.listaTareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
  }

}
