import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tipodoc } from 'src/app/models/tipodoc';
import { TipodocService } from 'src/app/services/tipodoc.service';

@Component({
  selector: 'app-registrar-supervisor-modal',
  templateUrl: './registrar-supervisor-modal.component.html',
  styleUrls: ['./registrar-supervisor-modal.component.scss']
})
export class RegistrarSupervisorModalComponent implements OnInit {
   documento?:string;
   nombre?:string;
   correo?:string;
  selectValor:any;
  @ViewChild('tipoDoc') tipoDoc?:ElementRef;

  tipodocs?: tipodoc[];
  constructor(private tipo:TipodocService) { }

  ngOnInit(): void {
    this.tipo.gettipodocs().subscribe((data)=>{
      this.tipodocs=data;
    })
  }


  showDNIorCarnet(){
    this.selectValor = this.tipoDoc?.nativeElement.value;
  }
  registrar(){
    console.log(this.documento,
      this.nombre,
      this.correo,
      this.selectValor,
          )
  }

}
