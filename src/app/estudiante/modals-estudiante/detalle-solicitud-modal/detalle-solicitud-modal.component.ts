import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { solicitud } from 'src/app/models/solicitud';
declare var $: any;

@Component({
  selector: 'app-detalle-solicitud-modal',
  templateUrl: './detalle-solicitud-modal.component.html',
  styleUrls: ['./detalle-solicitud-modal.component.scss'],
})
export class DetalleSolicitudModalComponent implements OnInit {
  @Input() soli?:any;
  @ViewChild('close_modal1') close_modal1?: ElementRef;
  nombre?:string;
  url?:string;
  constructor() {}

  ngOnInit(): void {
    
  }

  ocultarModal1(url:string,nombre:string) {
   
   this.nombre=nombre;
   
    
    $('#ver').prop("src",url);
    $('#detalleSolicitud').modal('hide');
  }

  descBackToModal1() {
    this.close_modal1?.nativeElement.click();
    $('#detalleSolicitud').modal('show');
  }
}
