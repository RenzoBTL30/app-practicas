import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
declare var $: any;
import swal from 'sweetalert2';
@Component({
  selector: 'app-validar-plaza-modal',
  templateUrl: './validar-plaza-modal.component.html',
  styleUrls: ['./validar-plaza-modal.component.scss'],
})
export class ValidarPlazaModalComponent implements OnInit {
  @ViewChild('close_modal1') close_modal1?: ElementRef;
  @ViewChild('close_modal2') close_modal2?: ElementRef;

  @Input() TipoVisual?: number;
  @Input() soli?: any;
  obser?: string;

  constructor(private solici: SolicitudService) {}

  ngOnInit(): void {}

  ocultarModal1() {
    $('#validarPlaza').modal('hide');
  }
  rechazar(id: number, idpostualnte: number) {
    swal
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
          this.solici.deletesolicitud(id, idpostualnte).subscribe((data) => {
            $('#validarPlaza').modal('hide');
          });
        }
      });
  }
  validar(id: number) {
    swal
      .fire({
        title: 'Se validara esta solicitud:',
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
          this.solici.validarSolicitud(id, 3).subscribe((data) => {
            $('#validarPlaza').modal('hide');
          });
        }
      });
  }
  obserbacion(id: number) {
    this.solici.obserbacionSolicitud(this.obser!, id).subscribe((data) => {
      $('#observacionesPlaza').modal('hide');
      this.obser = '';
    });
  }
  backToModal1() {
    this.close_modal2?.nativeElement.click();
    $('#validarPlaza').modal('show');
  }
}
