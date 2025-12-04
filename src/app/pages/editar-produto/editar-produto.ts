import { ProdutoService } from './../../services/produto/produto';
import { Component, inject, OnInit } from '@angular/core';
import { FormProduct } from '../../components/form-product/form-product';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../types/produto';
@Component({
  selector: 'app-editar-produto',
  imports: [FormProduct],
  templateUrl: './editar-produto.html',
  styleUrl: './editar-produto.css',
})
export class EditarProduto implements OnInit {
  private route = inject(ActivatedRoute);
  private produtoService = inject(ProdutoService);

  produtoSelecionado: Produto | null = null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.produtoService.buscarProdutoPorId(Number(id)).subscribe({
        next: (produto) => {
          this.produtoSelecionado = produto;
        },
        error: (erro) => {
          console.error('Erro ao obter produto', erro);
          alert('Erro ao carregar o produto para edição.');
        },
      });
    }
  }
}
