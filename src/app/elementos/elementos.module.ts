import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarTrabajadorComponent } from './sidebar-trabajador/sidebar-trabajador.component';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SidebarTrabajadorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTooltipModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    SidebarTrabajadorComponent
  ]
})
export class ElementosModule { }
