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
    autoria: "",
    conteudo: "",
    modelo: ''
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
