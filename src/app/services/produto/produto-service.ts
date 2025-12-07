import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../../types/produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private api = environment.apiUrl;
  private http = inject(HttpClient);

  criarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.api}/produtos`, produto);
  }

  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.api}/produtos`);
  }

  buscarProdutoPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.api}/produtos/${id}`);
  }

  atualizarProduto(id: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.api}/produtos/${id}`, produto);
  }

  deletarProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/produtos/${id}`);
  }
}
