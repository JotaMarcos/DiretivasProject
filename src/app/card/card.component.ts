import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  produtos: string[] = [];
  menuType: string = "";
  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo de energia",
      "cabo de rede",
      "fonte de energia",
    ];
  }

  ngOnInit(): void {

  }

  adicionar() {
    this.produtos.push("monitor");
  }
  remover(index: number) {
    this.produtos.splice(index, 1);
  }

}
