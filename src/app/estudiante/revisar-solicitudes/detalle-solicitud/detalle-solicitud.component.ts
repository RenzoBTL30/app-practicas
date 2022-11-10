import { Component, ElementRef, OnInit, AfterViewInit, Renderer2, ViewChild  } from '@angular/core';


@Component({
  selector: 'app-detalle-solicitud',
  templateUrl: './detalle-solicitud.component.html',
  styleUrls: ['./detalle-solicitud.component.css']
})
export class DetalleSolicitudComponent implements OnInit {

  @ViewChild("cyrcle2") cyrcle2?: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.changeToActiveCyrcle2();
  }

  changeToActiveCyrcle2(){
    this.renderer.addClass(this.cyrcle2?.nativeElement, "active");
  }
  deleteActiveCyrcle2(){
    this.renderer.removeClass(this.cyrcle2?.nativeElement, "active");
  }

}
