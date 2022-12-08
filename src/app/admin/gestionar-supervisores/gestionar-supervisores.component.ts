import { Component, OnInit } from '@angular/core';
import { tipodoc } from 'src/app/models/tipodoc';
import { TipodocService } from 'src/app/services/tipodoc.service';

@Component({
  selector: 'app-gestionar-supervisores',
  templateUrl: './gestionar-supervisores.component.html',
  styleUrls: ['./gestionar-supervisores.component.scss']
})
export class GestionarSupervisoresComponent implements OnInit {
  tipodocs?: tipodoc[];
  constructor(private tipo:TipodocService) { }

  ngOnInit(): void {
    this.tipo.gettipodocs().subscribe((data)=>{
      this.tipodocs=data;
    })
  }

}
