import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';
declare var $:any;

@Component({
  selector: 'app-validar-solicitud-pendiente',
  templateUrl: './validar-solicitud-pendiente.component.html',
  styleUrls: ['./validar-solicitud-pendiente.component.scss']
})
export class ValidarSolicitudPendienteComponent implements OnInit, OnChanges {

  @ViewChild("close_modal1") close_modal1?:ElementRef
  @ViewChild("close_modal2") close_modal2?:ElementRef
  @ViewChild("close_modal3") close_modal3?:ElementRef

  @Input() TipoVisual?: number;
  @Input() Id_Solicitud?: number;

  //solicitud:solicitud = new solicitud();
  //solicitud:solicitud[]=[];

  solicitudObject:any;
  solicitud:any[]=[];

  constructor(private solicitudService: SolicitudService) { }

  ngOnInit(): void {
    this.solicitudObject = new Object();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.Id_Solicitud);
    this.listarSolicitudesPorEstadoyId(this.Id_Solicitud!,1);
  }

  listarSolicitudesPorEstadoyId(idsolicitud:number, idsolestado:number){
    this.solicitudService.listSolicitudesPorEstadoyId(idsolicitud,idsolestado).subscribe(data => {
      this.solicitud = data;
      this.solicitudObject = this.solicitud[0];
      console.log(this.solicitudObject);
    })
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
