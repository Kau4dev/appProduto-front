import { ProdutoService } from '../../services/produto/produto-service';
import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormProduct } from '../../components/form-product/form-product';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../types/produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-produto',
  imports: [FormProduct, CommonModule],
  templateUrl: './editar-produto.html',
  styleUrl: './editar-produto.css',
})
export class EditarProduto implements OnInit {
  private route = inject(ActivatedRoute);
  private produtoService = inject(ProdutoService);
  private cdr = inject(ChangeDetectorRef);

  produtoSelecionado: Produto | null = null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.produtoService.buscarProdutoPorId(Number(id)).subscribe({
        next: (produto) => {
          this.produtoSelecionado = produto;
          this.cdr.detectChanges();
        },
        error: (erro) => {
          console.error('Erro ao carregar o produto para edição:', erro);
        },
      });
    }
  }
}
