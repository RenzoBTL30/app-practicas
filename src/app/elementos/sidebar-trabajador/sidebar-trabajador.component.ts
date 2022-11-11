import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/pages/home', title: 'Home',  icon: 'home', class: '' },
    { path: '/pages/validar-solicitud', title: 'Validar Solicitudes',  icon:'verified', class: '' },
    { path: '/pages/agregar-carta', title: 'Agregar Carta presentación',  icon:'add_circle_outline', class: '' },
    { path: '/pages/gestionar-postulantes', title: 'Gestionar Postulantes',  icon:'manage_accounts', class: '' },
    { path: '', title: 'SALIR',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar-trabajador',
  templateUrl: './sidebar-trabajador.component.html',
  styleUrls: ['./sidebar-trabajador.component.scss']
})
export class SidebarTrabajadorComponent implements OnInit {

  menuItems?: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
