import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: "",
    autoria: '',
    modelo: ""
  }

  constructor(private pensamentoService: PensamentoService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.pensamentoService.buscarPorId(parseInt(id!)).subscribe(pensamento => {
      this.pensamento = pensamento;
    })
  }


  pensamentos() {
    if(this.pensamento.id) {
      this.pensamentoService.editar(this.pensamento).subscribe();
    } else {
      this.pensamentoService.criar(this.pensamento).subscribe();
    }

    this.router.navigate(['listarPensamento'])

  }

  cancelar() {
    this.router.navigate(['listarPensamento'])
  }

}
