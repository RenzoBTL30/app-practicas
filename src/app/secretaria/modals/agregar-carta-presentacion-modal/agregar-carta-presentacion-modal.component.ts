import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-agregar-carta-presentacion-modal',
  templateUrl: './agregar-carta-presentacion-modal.component.html',
  styleUrls: ['./agregar-carta-presentacion-modal.component.scss']
})
export class AgregarCartaPresentacionModalComponent implements OnInit {

  @ViewChild("close_modal2") close_modal2?:ElementRef

  @Input() TipoVisual?: number;

  constructor() { }

  ngOnInit(): void {
  }

  archivosListosParaSubir(){
    
    // Quiere decir que si existe un archivo subido en '#file-upload-guia' y si existe un archivo también en '#file-upload-carta'
    if ($('#file-upload-guia').val() && $('#file-upload-carta').val()) {

      $('#btnEnviar').removeAttr("disabled");

    }
  }

  ocultarModal1(){
    $('#agregarCartaPresentacion').modal('hide');
  }

  descBackToModal1(){
    this.close_modal2?.nativeElement.click();
    $('#agregarCartaPresentacion').modal('show');
  }

  mostrarNombreArchivo(tipoArchivo:number){
    var archivoSeleccionado, nombre;
    if (tipoArchivo == 1) {

      archivoSeleccionado = $('#file-upload-guia').val();
      nombre = archivoSeleccionado.replace(/.*[\/\\]/, '');
      $('#nombre-archivo-guia').text(nombre);

    } else if (tipoArchivo == 2){
      
      archivoSeleccionado = $('#file-upload-carta').val();
      nombre = archivoSeleccionado.replace(/.*[\/\\]/, '');
      $('#nombre-archivo-carta').text(nombre);

    }
  }

}
