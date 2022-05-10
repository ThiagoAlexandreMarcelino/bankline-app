
import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { MovimentacoesService } from 'src/app/services/movimentacoes.service';

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})


export class MovimentacaoListComponent implements OnInit {
  movimentacoes:any;
  correntistas:any;
  correntista:any={};
  constructor(
    private movimentacaoService: MovimentacoesService,
    private correntistaService: CorrentistaService,
    ) { }
  ngOnInit(): void {
    this.exibirCorrentistas();
  }

  listMovimentacoes(): void {
    this.movimentacaoService.findByIdConta(this.correntista.id)
      .subscribe(
        data => {
          this.movimentacoes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  exibirCorrentistas(): void {
    this.correntistaService.list()
      .subscribe(
        data => {
          this.correntistas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}