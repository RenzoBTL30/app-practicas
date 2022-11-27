import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-agregar-postulante',
  templateUrl: './agregar-postulante.component.html',
  styleUrls: ['./agregar-postulante.component.scss']
})
export class AgregarPostulanteComponent implements OnInit {

  selectValor:any;
  @ViewChild('tipoDoc') tipoDoc?:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  showDNIorCarnet(){
    this.selectValor = this.tipoDoc?.nativeElement.value;
  }



}
