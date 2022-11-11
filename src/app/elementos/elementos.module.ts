import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarTrabajadorComponent } from './sidebar-trabajador/sidebar-trabajador.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SidebarTrabajadorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    SidebarTrabajadorComponent
  ]
})
export class ElementosModule { }
