import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { PostulanteService } from 'src/app/services/postulante.service';
import Swal from 'sweetalert2';
import { EditarPostulanteComponent } from '../modals/editar-postulante/editar-postulante.component';

@Component({
  selector: 'app-gestionar-postulantes',
  templateUrl: './gestionar-postulantes.component.html',
  styleUrls: ['./gestionar-postulantes.component.scss']
})
export class GestionarPostulantesComponent implements OnInit {

  postulantes:any[]=[];

  idpostulante?: number;
  idusuario?: number;
  nomusuario?: String;
  correo?: String;
  practicasComun?: boolean;
  practicasClin?: boolean;

  @Output() mostrarChecksenModalEditar = new EventEmitter<void>();

  @ViewChild(EditarPostulanteComponent) hijo?: EditarPostulanteComponent

  constructor(private postulanteService:PostulanteService) { }

  ngOnInit(): void {
    this.listarPostulantes();
  }

  listarPostulantes(){
    this.postulanteService.getPostulantes().subscribe(data =>{
      this.postulantes = data;

      // Filtra los usuarios postulantes que tengan estado = '1' (activos), excluye a los usuarios postulantes con estado '0' (inactivos) *(este metodo puede servir para cualquier lista de usuarios)
      this.postulantes = this.postulantes.filter(x => x.estado_usuario == '1');
    })
  }

  listarPostulantesOtraVez($event:any){
    this.postulanteService.getPostulantes().subscribe(data =>{
      this.postulantes = data;
      
      // Filtra los usuarios postulantes que tengan estado = '1' (activos), excluye a los usuarios postulantes con estado '0' (inactivos) *(este metodo puede servir para cualquier lista de usuarios)
      this.postulantes = this.postulantes.filter(x => x.estado_usuario == '1');
    })
  }

  edit(
    idpostu: number, 
    idusuario: number, 
    nomusuario: String,
    correo: String,
    practicasComun: boolean,
    practicasClin: boolean
  ) {
    this.idpostulante = idpostu;
    this.idusuario = idusuario;
    this.nomusuario = nomusuario;
    this.correo = correo;
    this.practicasComun = practicasComun;
    this.practicasClin = practicasClin;
  }
  
  cambiarEstado(id:number,estado:string){

    Swal
      .fire({
        title: 'Se eliminara a este postulante:',
        text: '¿Esta seguro que desea eliminar al postulante?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#DD6B55',
        footer: '<span class="red">Lea antes de confirmar</span>',
        allowOutsideClick: false,
      })
      .then((resultado) => {
        if (resultado.value) {

          this.postulanteService.updateestadoSupervisor(id,estado).subscribe(data =>{
            this.listarPostulantes();
          })

          Swal.fire(
            'Completado!',
            'El postulante ha sido eliminado!',
            'success'
          )
        }
      });

   
  }

}
