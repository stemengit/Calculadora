import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SideBarModule } from './sidebar/sidebar.module';
import { PagesModule } from './pages/pages.module';
import { HomeModule } from './pages/home/home.module';
import { TareasModule } from './pages/tareas/tareas.module';

@NgModule({
  imports: [
    SideBarModule,
    PagesModule,
    RouterModule,
    HomeModule,
    TareasModule
  ],
  exports: [
    SideBarModule,
    PagesModule,
    HomeModule,
    TareasModule

  ]
})
export class ComponentModule { }
