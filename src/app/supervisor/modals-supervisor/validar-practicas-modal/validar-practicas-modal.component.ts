import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@angular/fire/storage';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { SolicitudDocumentosService } from 'src/app/services/solicitud-documentos.service';
declare var $: any;

@Component({
  selector: 'app-validar-practicas-modal',
  templateUrl: './validar-practicas-modal.component.html',
  styleUrls: ['./validar-practicas-modal.component.scss'],
})
export class ValidarPracticasModalComponent implements OnInit {
  @ViewChild('close_modal1') close_modal1?: ElementRef;
  @ViewChild('close_modal2') close_modal2?: ElementRef;
  @ViewChild('close_modal3') close_modal3?: ElementRef;
  @Input() soli?: any;
  nombre?: string;
  constructor(
    public storage: Storage,
    private solidocumento: SolicitudDocumentosService
  ) {}
  file: any = {};
  horas?: number;
  url = '';
  ngOnInit(): void {}

  ocultarModal1(url: string, nombre: string) {
    this.nombre = nombre;
    $('#ver').prop('src', url);
    $('#validarPracticas').modal('hide');
  }

  descBackToModal1() {
    this.close_modal1?.nativeElement.click();
    $('#validarPracticas').modal('show');
  }
  documentofinal(idsolicitud: number, idpostualnte: number, practica: number) {
    if (this.horas! == null || this.file.name == null) {
      this.showNotification1('top', 'right', '');
    } else {
      const storageRef = ref(this.storage, 'fileweb/' + this.file.name);
      uploadBytes(storageRef, this.file).then((response) => {
        const starsRef = ref(this.storage, 'fileweb/' + this.file.name);

        getDownloadURL(starsRef).then((data) => {
          this.url = data;
          this.solidocumento
            .insertDocumentosFinal(
              idsolicitud,
              idpostualnte,
              this.url,
              this.horas!,
              practica
            )
            .subscribe((data) => {
              this.file = {};

              $('#validarHorasPracticas').modal('hide');
            });
        });
      });
    }
  }
  choseFiel(event: any) {
    this.file = event.target.files[0];
  }
  mostrarNombreArchivo(num: number) {
    var archivoSeleccionado, nombre;
    if (num == 1) {
      archivoSeleccionado = $('#file-upload-informe').val();
      nombre = archivoSeleccionado.replace(/.*[\/\\]/, '');
      this.showNotification('top', 'right', nombre);
    } else if (num == 2) {
      archivoSeleccionado = $('#file-upload-constancia').val();
      nombre = archivoSeleccionado.replace(/.*[\/\\]/, '');
      this.showNotification('top', 'right', nombre);
    }
  }

  showNotification(from: any, align: any, nombreArchivo: any) {
    $.notify(
      {
        icon: 'face',
        title: 'Archivo:',
        message: `<strong>${nombreArchivo}</strong> seleccionado`,
      },

      {
        type: 'success',
        timer: 2500,
        delay: 2500,
        placement: {
          from: from,
          align: align,
        },
        z_index: 1080,
      }
    );
  }
  showNotification1(from: any, align: any, nombreArchivo: any) {
    $.notify(
      {
        icon: 'face',
        title: 'Error:',
        message: `<strong>Completar todos los campos</strong>`,
      },

      {
        type: 'warning',
        timer: 2500,
        delay: 2500,
        placement: {
          from: from,
          align: align,
        },
        z_index: 1080,
      }
    );
  }
  horasbackToModal1() {
    this.close_modal3?.nativeElement.click();
    $('#validarPracticas').modal('show');
  }
}
