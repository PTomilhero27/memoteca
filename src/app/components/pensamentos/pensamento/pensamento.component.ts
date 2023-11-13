import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';



@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss']
})

export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    autoria: "Pedro ",
    conteudo: "Estudando Angular",
    modelo: 'modelo2'
  };

  ngOnInit(): void {
    
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return "pensamento-g"
    }
    return "pensamento-p"
  }


}
