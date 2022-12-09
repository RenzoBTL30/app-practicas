import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-validar-plaza-modal',
  templateUrl: './validar-plaza-modal.component.html',
  styleUrls: ['./validar-plaza-modal.component.scss'],
})
export class ValidarPlazaModalComponent implements OnInit {
  @ViewChild('close_modal1') close_modal1?: ElementRef;
  @ViewChild('close_modal2') close_modal2?: ElementRef;

  @Input() TipoVisual?: number;
  @Input() soli?: any;

  constructor() {}

  ngOnInit(): void {}

  ocultarModal1() {
    $('#validarPlaza').modal('hide');
  }

  backToModal1() {
    this.close_modal2?.nativeElement.click();
    $('#validarPlaza').modal('show');
  }
}
