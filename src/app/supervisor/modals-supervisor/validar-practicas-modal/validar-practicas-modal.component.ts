import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-validar-practicas-modal',
  templateUrl: './validar-practicas-modal.component.html',
  styleUrls: ['./validar-practicas-modal.component.scss']
})
export class ValidarPracticasModalComponent implements OnInit {

  @ViewChild("close_modal1") close_modal1?:ElementRef
  @ViewChild("close_modal2") close_modal2?:ElementRef
  @ViewChild("close_modal3") close_modal3?:ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  ocultarModal1(){
    $('#validarPracticas').modal('hide');
  }

  descBackToModal1(){
    this.close_modal1?.nativeElement.click();
    $('#validarPracticas').modal('show');
  }

  horasbackToModal1(){
    this.close_modal3?.nativeElement.click();
    $('#validarPracticas').modal('show');
  }

}
