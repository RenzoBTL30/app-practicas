import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validar-solicitud',
  templateUrl: './validar-solicitud.component.html',
  styleUrls: ['./validar-solicitud.component.scss']
})
export class ValidarSolicitudComponent implements OnInit {

  validator?:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  EsParaValidar(validator:boolean){
    this.validator = validator;
  }

}
