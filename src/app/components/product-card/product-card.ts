import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  produtos = [
    {
      nome: 'Camiseta Preta',
      descricao: 'Camiseta de algodão 100%, confortável e estilosa.',
      preco: 49.0,
      desconto: 10,
      estoque: 50,
      imagem: 'https://down-br.img.susercontent.com/file/7b902f6a5316aa5e2bcbc7d343221cc0',
    },
    {
      nome: 'Calça Jeans Azul',
      descricao: 'Calça jeans clássica, perfeita para qualquer ocasião.',
      preco: 120.0,
      desconto: 15,
      estoque: 30,
      imagem: 'https://example.com/calca-jeans-azul.jpg',
    },
  ];

  get primeirosProdutos() {
    return this.produtos.slice(0, 4);
  }
}
