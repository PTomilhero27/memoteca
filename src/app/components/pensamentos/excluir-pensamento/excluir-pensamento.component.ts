import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.scss']
})
export class ExcluirPensamentoComponent implements OnInit {


  constructor(private pensamentoService: PensamentoService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.pensamentoService.buscarPorId(parseInt(id!)).subscribe(pensamento => {
      this.pensamento = pensamento;
    })
  }
  
  pensamento:Pensamento = {
    id: 0,
    autoria: '',
    conteudo: '',
    modelo: '',
  }

  excluirPensamento() {
    if(this.pensamento.id) {
      this.pensamentoService.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }
}
