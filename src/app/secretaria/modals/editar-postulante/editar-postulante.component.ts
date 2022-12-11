import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { PostulanteService } from 'src/app/services/postulante.service';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-editar-postulante',
  templateUrl: './editar-postulante.component.html',
  styleUrls: ['./editar-postulante.component.scss']
})
export class EditarPostulanteComponent implements OnInit {

  @Input() idpostulan?:number;
  @Input() idusuario?:number;
  @Input() nomusu?:String;
  @Input() correo?:String;
  @Input() prac_comunitarias?:boolean;
  @Input() prac_clinicas?:boolean;

  @Output() volveraListarPostulantes = new EventEmitter<void>();

  constructor(private postulanteService: PostulanteService, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  editarPostulante(){
    


    this.postulanteService.editPostulante(
      this.idpostulan!,
      this.idusuario!,
      this.nomusu!,
      this.correo!,
      String(+this.prac_comunitarias!),
      String(+this.prac_clinicas!)

    ).subscribe(data => {
      $("#editarPostulante").modal("hide");
      this.volveraListarPostulantes.emit();
    })

    Swal.fire(
      'Completado!',
      'El postulante fue modificado correctamente!',
      'success'
    )
  }

}
