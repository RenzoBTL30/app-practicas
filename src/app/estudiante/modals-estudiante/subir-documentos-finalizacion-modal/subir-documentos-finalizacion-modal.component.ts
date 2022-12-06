import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-subir-documentos-finalizacion-modal',
  templateUrl: './subir-documentos-finalizacion-modal.component.html',
  styleUrls: ['./subir-documentos-finalizacion-modal.component.scss']
})
export class SubirDocumentosFinalizacionModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrarNombreArchivo(num:number){
    var archivoSeleccionado, nombre;
    if (num == 1) {

      archivoSeleccionado = $('#file-upload-informe').val();
      nombre = archivoSeleccionado.replace(/.*[\/\\]/, '');
      this.showNotification('top','right',nombre);

    } else if (num == 2){

      archivoSeleccionado = $('#file-upload-constancia').val();
      nombre = archivoSeleccionado.replace(/.*[\/\\]/, '');
      this.showNotification('top','right',nombre);

    }
    
  }

  showNotification(from:any, align:any, nombreArchivo:any){

    $.notify({
      icon: "face",
      title: "Archivo:",
      message: `<strong>${nombreArchivo}</strong> seleccionado`
    },
    
    {
      type: 'success',
      timer: 2500,
      delay: 2500,
      placement: {
        from: from,
        align: align
      },
      z_index: 1080
    });
  }

}
