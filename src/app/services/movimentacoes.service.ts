import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//mude para sua aplicação
const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class MovimentacoesService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacoes`);
  }
}
