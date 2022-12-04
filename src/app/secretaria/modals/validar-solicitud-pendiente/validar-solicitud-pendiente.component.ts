import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-validar-solicitud-pendiente',
  templateUrl: './validar-solicitud-pendiente.component.html',
  styleUrls: ['./validar-solicitud-pendiente.component.scss']
})
export class ValidarSolicitudPendienteComponent implements OnInit {

  @ViewChild("close_modal1") close_modal1?:ElementRef
  @ViewChild("close_modal2") close_modal2?:ElementRef
  @ViewChild("close_modal3") close_modal3?:ElementRef

  @Input() TipoVisual?: number;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    
  }
  

  ocultarModal1(){
    $('#validarSolicitudPendiente').modal('hide');
  }

  backToModal1(){
    this.close_modal2?.nativeElement.click();
    $('#validarSolicitudPendiente').modal('show');
  }

  descBackToModal1(){
    this.close_modal3?.nativeElement.click();
    $('#validarSolicitudPendiente').modal('show');
  }

  

}
