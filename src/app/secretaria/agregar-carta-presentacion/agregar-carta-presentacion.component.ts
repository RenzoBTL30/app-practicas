import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-carta-presentacion',
  templateUrl: './agregar-carta-presentacion.component.html',
  styleUrls: ['./agregar-carta-presentacion.component.scss']
})
export class AgregarCartaPresentacionComponent implements OnInit {

  validator?:number;

  constructor() { }

  ngOnInit(): void {
  }

  // ---- Tipos de visualizacion: ----
  // Si es 1 es para subir los archivos
  // Si es 2 es solo para ver

  TipoVisualizacion(validator:number){
    this.validator = validator;
  }

}
