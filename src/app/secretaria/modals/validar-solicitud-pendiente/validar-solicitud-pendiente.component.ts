import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';
import Swal from 'sweetalert2';
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

  @ViewChild("observacion") observacion?:ElementRef


  @Input() TipoVisual?: number;
  @Input() Solicitud?: any;

  @Output() volveraListarSolicitudes = new EventEmitter<void>();
  @Output() volveraListarSolicitudesAptas = new EventEmitter<void>();


  constructor(private solicitudService: SolicitudService) { }

  ngOnInit(): void { }

  

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

  

  //lin 53: valida que el input de observacion no este vacio
  //si esta vacío mostrará una notificacion de error (lin 54)
  //si no, continua con la logica
  observarSolicitud(){
    if (this.observacion?.nativeElement.value == '') {
      this.mostrarAlertaDeSinTextoEnObservacion('top','right');
    } else {
      Swal.fire({
        title: '¿Está seguro que desea hacer esta observación?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, observar'
      }).then((result) => {
        if (result.isConfirmed) {
  
          this.solicitudService.obserbacionSolicitud(this.observacion?.nativeElement.value, this.Solicitud?.id_solicitud).subscribe(data => {
              this.observacion!.nativeElement.value = '';
              this.close_modal2?.nativeElement.click();
              this.volveraListarSolicitudes.emit();
              $('#validarSolicitudPendiente').modal('hide');
          });
  
          Swal.fire(
            'Completado!',
            'Su observación fue registrada correctamente!',
            'success'
          )
        }
      })
    }
    
  }

  mostrarAlertaDeSinTextoEnObservacion(from:any, align:any){

    $.notify({
      icon: "face",
      title: "Error:",
      message: `Debes completar el campo de observaciones`
    
    },
    
    {
      type: 'danger',
      timer: 2500,
      delay: 2500,
      placement: {
        from: from,
        align: align
      },
      z_index: 1080
    });
  }

  validarSolicitud(idsolicitud:number){
    Swal
      .fire({
        title: 'Se validara esta solicitud:',
        text: '¿Esta seguro que desea hacer la validación?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, validar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#DD6B55',
        footer: '<span class="red">Lea antes de confirmar</span>',
        allowOutsideClick: false,
      })
      .then((resultado) => {
        if (resultado.value) {
          this.solicitudService.validarSolicitud(idsolicitud, 2).subscribe((data) => {
            this.close_modal2?.nativeElement.click();
            this.volveraListarSolicitudes.emit();
            this.volveraListarSolicitudesAptas.emit();
            $('#validarSolicitudPendiente').modal('hide');
          });

          Swal.fire(
            'Completado!',
            'Solicitud validada correctamente!',
            'success'
          )
        }
      });
  }


  rechazarSolicitud(idsolicitud:number, idpostulante:number){
    Swal
      .fire({
        title: 'Se rechazara la solicitud:',
        text: '¿Esta seguro de continuar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#DD6B55',
        footer: '<span class="red">Lea antes de confirmar</span>',
        allowOutsideClick: false,
      })
      .then((resultado) => {
        if (resultado.value) {
          this.solicitudService.deletesolicitud(idsolicitud, idpostulante).subscribe((data) => {
            this.close_modal2?.nativeElement.click();
            this.volveraListarSolicitudes.emit();
            $('#validarSolicitudPendiente').modal('hide');
          });

          Swal.fire(
            'Completado!',
            'La solicitud ha sido rechazada',
            'success'
          )
        }
      });
  }

  
  
}
