import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  ventasNetas:number = 245896.26565;
  porcentaje:number = .48;

  constructor() { }

  ngOnInit(): void {
  }

}
