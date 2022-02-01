import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  nombre:string = 'Susana';
  genero:string = 'femenino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  // i18nPlural
  clientes:string[] = ['Maria', 'Pedro', 'Juan'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCliente() {

    if(this.nombre == 'Susana') {
      this.nombre = 'Enrique';
      this.genero = 'masculino'
    } else {
      this.nombre = 'Susana';
      this.genero = 'femenino'
    }

  }

  borrarCliente() {
    if(this.clientes.length > 0) {
      this.clientes.pop();
    }
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Alan',
    edad: 32,
    direccion: 'Pachuca, Mexico'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ];

  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    },3500);
  })

}
