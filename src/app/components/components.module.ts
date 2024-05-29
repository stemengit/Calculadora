import { NgModule } from '@angular/core';
import { SideBarModule } from './sidebar/sidebar.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [
    SideBarModule,
    PagesModule
  ],
  exports: [
    SideBarModule,
    PagesModule
  ]
})
export class ComponentModule { }
