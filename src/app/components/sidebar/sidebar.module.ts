import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './sidebar.component';
import { RoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports: [
    SideBarComponent
  ]
})
export class SideBarModule { }
