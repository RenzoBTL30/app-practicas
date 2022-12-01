import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registrar-supervisor-modal',
  templateUrl: './registrar-supervisor-modal.component.html',
  styleUrls: ['./registrar-supervisor-modal.component.scss']
})
export class RegistrarSupervisorModalComponent implements OnInit {

  selectValor:any;
  @ViewChild('tipoDoc') tipoDoc?:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  showDNIorCarnet(){
    this.selectValor = this.tipoDoc?.nativeElement.value;
  }

}
