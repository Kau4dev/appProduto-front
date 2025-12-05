import { Component, inject, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProdutoService } from '../../services/produto/produto-service';
import { Produto } from '../../types/produto';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-product',
  imports: [ReactiveFormsModule],
  templateUrl: './form-product.html',
  styleUrl: './form-product.css',
})
export class FormProduct {
  private produtoService = inject(ProdutoService);
  private location = inject(Location);

  private _produtoParaEditar: Produto | null = null;

  @Input() titulo: string = '';

  produtoForm = new FormGroup({
    id: new FormControl<number | null>(null),
    nome: new FormControl('', Validators.required),
    codigoBarras: new FormControl('', Validators.required),
    descricao: new FormControl(''),
    preco: new FormControl(0, [Validators.required, Validators.min(0.01)]),
  });

  @Input()
  set produtoParaEditar(value: Produto | null) {
    this._produtoParaEditar = value;
    if (value) {
      this.produtoForm.reset();
      this.produtoForm.patchValue({
        id: value.id ?? null,
        nome: value.nome ?? '',
        codigoBarras: value.codigoBarras ?? '',
        descricao: value.descricao ?? '',
        preco: value.preco ?? 0,
      });
    }
  }
  get produtoParaEditar(): Produto | null {
    return this._produtoParaEditar;
  }

  salvar() {
    if (this.produtoForm.invalid) {
      alert('Preencha os campos obrigatórios!');
      return;
    }

    const produto = this.produtoForm.getRawValue() as Produto;

    if (this.produtoParaEditar && this.produtoParaEditar.id) {
      this.editar(produto);
    } else {
      this.criar(produto);
    }
  }

  private criar(produto: Produto) {
    this.produtoService.criarProduto(produto).subscribe({
      next: () => {
        alert('Produto criado com sucesso!');
        this.location.back();
      },
      error: (erro) => console.error('Erro ao criar', erro),
    });
  }

  private editar(produto: Produto) {
    const id = this.produtoParaEditar?.id;
    if (typeof id !== 'number') {
      alert('ID do produto inválido. Não foi possível atualizar.');
      return;
    }

    this.produtoService.atualizarProduto(id, produto).subscribe({
      next: () => {
        alert('Produto atualizado com sucesso!');
        this.location.back();
      },
      error: (erro) => console.error('Erro ao atualizar', erro),
    });
  }
}
