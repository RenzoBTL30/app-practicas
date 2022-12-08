import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-supervisor-modal',
  templateUrl: './editar-supervisor-modal.component.html',
  styleUrls: ['./editar-supervisor-modal.component.scss']
})
export class EditarSupervisorModalComponent implements OnInit {
  @Input() correo?:string;
  @Input() idsupervisor?:number;

  constructor() { }

  ngOnInit() {
  }

}
