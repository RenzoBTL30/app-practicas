import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validar-solicitud',
  templateUrl: './validar-solicitud.component.html',
  styleUrls: ['./validar-solicitud.component.scss']
})
export class ValidarSolicitudComponent implements OnInit {

  validator?:number;

  constructor() { }

  ngOnInit(): void {
  }

  // ---- Tipos de visualizacion: ----
  // Si es 1 es para hacer las observaciones y validar
  // Si es 2 es para ver las observaciones y validar
  // Si es 3 es solo para ver

  TipoVisualizacion(validator:number){
    this.validator = validator;
  }

}
