import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registrar-solicitud',
  templateUrl: './registrar-solicitud.component.html',
  styleUrls: ['./registrar-solicitud.component.scss']
})
export class RegistrarSolicitudComponent implements OnInit {

  @ViewChild('clicSubir') clicSubir:any;

  constructor() { }

  ngOnInit(): void {
  }

  eventoClicSubir(){
    this.clicSubir.nativeElement.click();
  }

}
