import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { tipodoc } from 'src/app/models/tipodoc';
import { PostulanteService } from 'src/app/services/postulante.service';
import { TipodocService } from 'src/app/services/tipodoc.service';
import Swal from 'sweetalert2';
declare var $:any;

@Component({
  selector: 'app-agregar-postulante',
  templateUrl: './agregar-postulante.component.html',
  styleUrls: ['./agregar-postulante.component.scss']
})
export class AgregarPostulanteComponent implements OnInit {

  numdoc?: String;
  nomusuario?: String;
  correo?: String;
  idtipodoc?: number;
  codalumno?: String;
  practicascomunitarias: boolean = false;
  practicasclinicas: boolean = false;

  selectValor:any;
  @ViewChild('tipoDoc') tipoDoc?:ElementRef;

  //@ViewChild('practicasComunCheck') practicasComunCheck?:ElementRef;
  //@ViewChild('practicasClinCheck') practicasClinCheck?:ElementRef;

  @Output() volveraListarPostulantes = new EventEmitter<void>();


  tipodocs?: tipodoc[];

  constructor(private tipo:TipodocService, private postulanteService: PostulanteService) { }

  ngOnInit(): void {
    this.listarTipoDocs();
  }

  //Lista los dos tipos de documentos (DNI -> 1 , Carnet -> 2 y Otros -> 3)
  listarTipoDocs(){
    this.tipo.gettipodocs().subscribe((data)=>{
      this.tipodocs=data;
    })
  }

  showDNIorCarnet(){
    this.selectValor = this.tipoDoc?.nativeElement.value;
  }

  crearPostulante(){

    /* ---- Antiguo ----
    if ($('#practicasComunCheck').is(":checked")) {
      this.practicascomunitarias! = '1';
    } else {
      this.practicascomunitarias! = '0';
    }

    if ($('#practicasClinCheck').is(":checked")) {
      this.practicasclinicas! = '1';
    } else {
      this.practicasclinicas! = '0';
    }*/



    // ---- Optimizado ----
    
    // implicit cast
    // El signo más convierte el true en '1' y el false en '0'
    // +true -> 1
    // +false -> 0

    // El String() convierte cualquier valor dentro del paréntesis en string

    this.postulanteService.insertPostulante(
      
      this.numdoc!,
      this.nomusuario!,
      this.correo!,
      this.selectValor!,
      this.codalumno!,
      String(+this.practicascomunitarias!),
      String(+this.practicasclinicas!)

    ).subscribe(data =>{
      $("#añadirPostulante").modal("hide");
      this.volveraListarPostulantes.emit();
    })

    Swal.fire(
      'Completado!',
      'El postulante fue registrado correctamente!',
      'success'
    )
  }

  

}
