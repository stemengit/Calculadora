import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ListaComponent } from './lista/lista.component';
import { TareasComponent } from './tareas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { BorrarComponent } from './borrar/borrar.component';

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
  ],
  declarations: [
    TareasComponent,
    ListaComponent,
    FormularioComponent,
    BorrarComponent,

  ],
})
export class TareasModule { }
