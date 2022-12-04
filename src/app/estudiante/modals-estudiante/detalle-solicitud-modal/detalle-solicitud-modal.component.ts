import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-detalle-solicitud-modal',
  templateUrl: './detalle-solicitud-modal.component.html',
  styleUrls: ['./detalle-solicitud-modal.component.scss']
})
export class DetalleSolicitudModalComponent implements OnInit {

  @ViewChild("close_modal1") close_modal1?:ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  ocultarModal1(){
    $('#detalleSolicitud').modal('hide');
  }

  descBackToModal1(){
    this.close_modal1?.nativeElement.click();
    $('#detalleSolicitud').modal('show');
  }

}
