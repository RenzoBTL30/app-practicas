import { Component, OnInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-agregar-carta-presentacion-modal',
  templateUrl: './agregar-carta-presentacion-modal.component.html',
  styleUrls: ['./agregar-carta-presentacion-modal.component.scss']
})
export class AgregarCartaPresentacionModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  archivosListosParaSubir(){
    
    // Quiere decir que si existe un archivo subido en '#file-upload-guia' y si existe un archivo también en '#file-upload-carta'
    if ($('#file-upload-guia').val() && $('#file-upload-carta').val()) {

      $('#btnEnviar').removeAttr("disabled");

    }
  }

}
