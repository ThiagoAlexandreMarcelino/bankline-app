import { Component, OnInit } from '@angular/core';
import { MovimentacoesService } from 'src/app/services/movimentacoes.service';


@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit {

  movimentacoes: any


  constructor(private movimentacaoService: MovimentacoesService) { }

  ngOnInit(): void {
    this.listMovimentacoes();
  }

  listMovimentacoes(): void {
    this.movimentacaoService.list()
      .subscribe(
        data => {
          this.movimentacoes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
