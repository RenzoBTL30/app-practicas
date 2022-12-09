import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';
declare var $: any;
@Component({
  selector: 'app-editar-supervisor-modal',
  templateUrl: './editar-supervisor-modal.component.html',
  styleUrls: ['./editar-supervisor-modal.component.scss']
})
export class EditarSupervisorModalComponent implements OnInit {
  @Input() correo?:string;
  @Input() idsupervisor?:number;

  constructor(private supervisor:EstudianteService,private route:Router) { }

  ngOnInit() {
  }
  updateSupervisor(){
    this.supervisor.updateSupervisor(this.idsupervisor!,this.correo!).subscribe((data)=>{
    
      
      
      $("#editarsupervisor").modal("hide");
      this.ngOnInit();
    })
  }

}
