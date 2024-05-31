import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ListaComponent } from './lista/lista.component';
import { TareasComponent } from './tareas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TareasComponent,
    ListaComponent,
    FormularioComponent
  ],
  declarations: [
    TareasComponent,
    ListaComponent,
    FormularioComponent
  ],
})
export class TareasModule { }
