import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@angular/fire/storage';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { SolicitudDocumentosService } from 'src/app/services/solicitud-documentos.service';
declare var $: any;

@Component({
  selector: 'app-agregar-carta-presentacion-modal',
  templateUrl: './agregar-carta-presentacion-modal.component.html',
  styleUrls: ['./agregar-carta-presentacion-modal.component.scss'],
})
export class AgregarCartaPresentacionModalComponent implements OnInit {
  @ViewChild('close_modal2') close_modal2?: ElementRef;

  @Input() TipoVisual?: number;
  @Input() soli?: any;
  file: any = {};
  file1: any = {};
  guia?: string;
  carta?: string;
  constructor(
    private storage: Storage,
    private solicitud: SolicitudDocumentosService
  ) {}

  ngOnInit(): void {}

  archivosListosParaSubir() {
    // Quiere decir que si existe un archivo subido en '#file-upload-guia' y si existe un archivo también en '#file-upload-carta'
    if ($('#file-upload-guia').val() && $('#file-upload-carta').val()) {
      // Si se cumple las condicionales de arriba, entonces el boton "Enviar" se habilitará
      $('#btnEnviar').removeAttr('disabled');
    }
  }
  choseFiel(event: any) {
    this.file = event.target.files[0];
  }
  choseFiel1(event: any) {
    this.file1 = event.target.files[0];
  }
  cambiarurl(url: string) {
    $('#ver').prop('src', url);
    $('#ver1').prop('src', url);
  }
  addData2(id: number) {
    const storageRef = ref(this.storage, 'fileweb/' + this.file1.name);
    uploadBytes(storageRef, this.file1).then((response) => {
      const starsRef = ref(this.storage, 'fileweb/' + this.file1.name);

      getDownloadURL(starsRef).then((data) => {
        this.carta = data;

        const storageRef = ref(this.storage, 'fileweb/' + this.file.name);
        uploadBytes(storageRef, this.file).then((response) => {
          const starsRef = ref(this.storage, 'fileweb/' + this.file.name);

          getDownloadURL(starsRef).then((data) => {
            this.guia = data;
            console.log(this.guia);
            console.log(this.carta);
            this.solicitud
              .cartadepresentacion(this.carta!, this.guia!, id)
              .subscribe((data) => {
                this.file = {};
                this.file1 = {};
                $('#agregarCartaPresentacion').modal('hide');
              });
          });
        });
      });
    });
  }
  ocultarModal1() {
    $('#agregarCartaPresentacion').modal('hide');
  }

  descBackToModal1() {
    this.close_modal2?.nativeElement.click();
    $('#agregarCartaPresentacion').modal('show');
  }

  mostrarNombreArchivo(tipoArchivo: number) {
    var archivoSeleccionado, nombre;
    if (tipoArchivo == 1) {
      archivoSeleccionado = $('#file-upload-guia').val();
      nombre = archivoSeleccionado.replace(/.*[\/\\]/, '');
      this.showNotification('top', 'right', nombre);
    } else if (tipoArchivo == 2) {
      archivoSeleccionado = $('#file-upload-carta').val();
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
}
