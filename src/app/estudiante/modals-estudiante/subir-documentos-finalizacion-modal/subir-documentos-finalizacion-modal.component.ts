import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import {
  Storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from '@angular/fire/storage';
import { isEmpty } from '@firebase/util';
import { response } from 'express';
import { uploadBytes } from 'firebase/storage';
import { SolicitudDocumentosService } from 'src/app/services/solicitud-documentos.service';
declare var $: any;

@Component({
  selector: 'app-subir-documentos-finalizacion-modal',
  templateUrl: './subir-documentos-finalizacion-modal.component.html',
  styleUrls: ['./subir-documentos-finalizacion-modal.component.scss'],
})
export class SubirDocumentosFinalizacionModalComponent implements OnInit {
  @Input() soli?: any;
  @Input() accion?: number;
  @Input() titulo?: string;
  file: any = {};
  file1: any = {};
  urlinforme?: string;
  urlconstancias?: string;
  constructor(
    public storage: Storage,
    private solidocumento: SolicitudDocumentosService
  ) {}

  ngOnInit(): void {}
  choseFiel(event: any) {
    this.file = event.target.files[0];
  }
  choseFiel1(event: any) {
    this.file1 = event.target.files[0];
  }

  showNotification1(from: any, align: any, nombreArchivo: any) {
    $.notify(
      {
        icon: 'face',
        title: 'Alerta:',
        message: `Seleccione los dos documentos finales`,
      },

      {
        type: 'warning',
        timer: 5000,
        delay: 5000,
        placement: {
          from: from,
          align: align,
        },
      }
    );
  }

  addData2() {
    console.log(this.soli.id_solicitud);
    if (this.file.name == null || this.file1.name == null) {
      this.showNotification1('top', 'right', 'nombre');
    } else {
      if (this.accion == 1) {
        const storageRef = ref(this.storage, 'fileweb/' + this.file1.name);
        uploadBytes(storageRef, this.file1).then((response) => {
          const starsRef = ref(this.storage, 'fileweb/' + this.file1.name);

          getDownloadURL(starsRef).then((data) => {
            this.urlconstancias = data;
            
            const storageRef = ref(this.storage, 'fileweb/' + this.file.name);
            uploadBytes(storageRef, this.file).then((response) => {
              const starsRef = ref(this.storage, 'fileweb/' + this.file.name);

              getDownloadURL(starsRef).then((data) => {
                this.urlinforme = data;
                this.solidocumento
                  .insertDocumentosFinales(
                    this.urlinforme!,
                    this.urlconstancias!,
                    this.soli.id_solicitud!
                  )
                  .subscribe((data) => {
                    this.file = {};
                    this.file1 = {};
                    $('#subirDocPracticas').modal('hide');
                  });
              });
            });
          });
        });
      } else {
        this.editdocumentos();
      }
    }
  }
  editdocumentos() {
    const storageRef = ref(this.storage, 'fileweb/' + this.file1.name);
    uploadBytes(storageRef, this.file1).then((response) => {
      const starsRef = ref(this.storage, 'fileweb/' + this.file1.name);

      getDownloadURL(starsRef).then((data) => {
        this.urlconstancias = data;
        console.log(this.urlconstancias);
        const storageRef = ref(this.storage, 'fileweb/' + this.file.name);
        uploadBytes(storageRef, this.file).then((response) => {
          const starsRef = ref(this.storage, 'fileweb/' + this.file.name);

          getDownloadURL(starsRef).then((data) => {
            this.urlinforme = data;
            this.solidocumento
              .updateDoucmentos(
                this.urlinforme!,
                this.urlconstancias!,
                this.soli.id_solicitud!
              )
              .subscribe((data) => {
                this.file = {};
                this.file1 = {};
                $('#subirDocPracticas').modal('hide');
              });
          });
        });
      });
    });
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
}
