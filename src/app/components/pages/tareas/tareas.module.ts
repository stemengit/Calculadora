import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ListaComponent } from './lista/lista.component';
import { TareasComponent } from './tareas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { BorrarComponent } from './borrar/borrar.component';
import { EditarComponent } from './editar/editar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TareasComponent,
    ListaComponent,
    FormularioComponent,
    BorrarComponent,
    EditarComponent
  ],
  declarations: [
    TareasComponent,
    ListaComponent,
    FormularioComponent,
    BorrarComponent,
    EditarComponent

  ],
})
export class TareasModule { }
