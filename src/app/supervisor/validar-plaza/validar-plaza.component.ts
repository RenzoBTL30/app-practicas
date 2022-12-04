import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validar-plaza',
  templateUrl: './validar-plaza.component.html',
  styleUrls: ['./validar-plaza.component.scss']
})
export class ValidarPlazaComponent implements OnInit {

  validator?:number;

  constructor() { }

  ngOnInit(): void {
  }

  // ---- Tipos de visualizacion: ----
  // Si es 1 es para validar plaza
  // Si es 2 es solo para ver

  TipoVisualizacion(validator:number){
    this.validator = validator;
  }

}
