import { Component, OnInit, ViewChild } from '@angular/core';
declare var $:any;

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

  mostrarNombreArchivo(){
    var archivoSeleccionado, nombre;
    archivoSeleccionado = $('#file-upload-descripcion').val();
    nombre = archivoSeleccionado.replace(/.*[\/\\]/, '');
    this.showNotification('top','right',nombre);
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
    });
  }

}
