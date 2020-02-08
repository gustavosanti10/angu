import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro-listado',
  templateUrl: './libro-listado.component.html',
  styleUrls: ['./libro-listado.component.css']
})
export class LibroListadoComponent implements OnInit {

  names:string [] ;
  constructor() {
    this.names=['Cancion de hielo y fuego','Harry Potter','Condorito']
  }

  ngOnInit() {
  }

}
