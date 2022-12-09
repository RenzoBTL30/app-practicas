import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tipodoc } from 'src/app/models/tipodoc';
import { usuario } from 'src/app/models/usuario';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { TipodocService } from 'src/app/services/tipodoc.service';
declare var $: any;
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
  users?: usuario[];
  @ViewChild('tipoDoc') tipoDoc?:ElementRef;

  tipodocs?: tipodoc[];
  constructor(private tipo:TipodocService,private supervisor:EstudianteService) { }

  ngOnInit(): void {
    this.tipo.gettipodocs().subscribe((data)=>{
      this.tipodocs=data;
    })
  }


  showDNIorCarnet(){
    this.selectValor = this.tipoDoc?.nativeElement.value;
  }
  registrar(){
    this.supervisor.crearSupervisor(this.documento!,this.nombre!,this.correo!,this.selectValor!).subscribe((data)=>{
      $("#registrarSupervisor").modal("hide");
this.listSupervisores();
    })
  }
   listSupervisores(){
  this.supervisor.getSupervisores().subscribe((data)=>{
    this.users=data;
    for(let i = 0; i<this.users.length; i++){
      var numero=Number(this.users[i].estado_usuario);
      if(numero==1){
        this.users[i].estado=1

      }else{
        this.users[i].estado=0
      }

  }})

}
  

      
  }


