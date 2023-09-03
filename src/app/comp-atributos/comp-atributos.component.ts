import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {

  estiloAtributo: string = "enable";
  corFundo: string = "red";
  corDaFonte: string = "green";
  item: string = "";
  lista: string[] = [];
  isEnableBlock: boolean = true;

  constructor() {

  }

  ngOnInit(): void {

  }

  adicionarLista() {
    this.lista.push(this.item);
  }

  trocar() {
    if(this.estiloAtributo === "disable") {
      this.estiloAtributo = "enable";
    } else {
      this.estiloAtributo = "disable";
    }
  }

}
