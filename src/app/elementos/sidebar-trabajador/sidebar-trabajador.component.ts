import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}


// ---- Rutas de secretaria ----
export const ROUTES1: RouteInfo[] = [
    { path: '/secretaria/pages/home', title: 'Home',  icon: 'home', class: '' },
    { path: '/secretaria/pages/validar-solicitud', title: 'Validar Solicitudes',  icon:'verified', class: '' },
    { path: '/secretaria/pages/agregar-carta', title: 'Agregar Carta presentación',  icon:'add_circle_outline', class: '' },
    { path: '/secretaria/pages/gestionar-postulantes', title: 'Gestionar Postulantes',  icon:'manage_accounts', class: '' },
    { path: '', title: 'SALIR',  icon:'', class: 'active-pro' },
];


// ---- Rutas de supervisor ----
export const ROUTES2: RouteInfo[] = [
  { path: '/supervisor/pages/validar-plaza', title: 'Validar plazas',  icon: 'home', class: '' },
  { path: '/supervisor/pages/validar-practicas', title: 'Validar prácticas',  icon:'verified', class: '' },
  { path: '', title: 'SALIR',  icon:'', class: 'active-pro' },
];


// ---- Rutas de admin ----
export const ROUTES3: RouteInfo[] = [
  { path: '/admin/pages/home', title: 'Home',  icon: 'home', class: '' },
  { path: '/admin/pages/gestionar-supervisores', title: 'Gestionar Supervisores',  icon:'verified', class: '' },
  { path: '', title: 'SALIR',  icon:'', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar-trabajador',
  templateUrl: './sidebar-trabajador.component.html',
  styleUrls: ['./sidebar-trabajador.component.scss']
})
export class SidebarTrabajadorComponent implements OnInit {

  menuItems?: any[];
  rol?: any;

  constructor() { }

  ngOnInit() {
    this.rol = localStorage.getItem('rol');
    this.cambioRol(this.rol);
  }

  cambioRol(rol:any){
    switch (rol) {
      case 'secretaria':
        this.menuItems = ROUTES1.filter(menuItem => menuItem);
        break;

      case 'supervisor':
        this.menuItems = ROUTES2.filter(menuItem => menuItem);
        break;

      case 'admin':
        this.menuItems = ROUTES3.filter(menuItem => menuItem);
        break;
    
      default:
        break;
    }
  }

}
