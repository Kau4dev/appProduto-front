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
    {
      nome: 'Tênis Esportivo',
      descricao: 'Tênis leve e confortável para suas atividades diárias.',
      preco: 200.0,
      desconto: 20,
      estoque: 20,
      imagem: 'https://example.com/tenis-esportivo.jpg',
    },
    {
      nome: 'Jaqueta de Couro',
      descricao: 'Jaqueta de couro legítimo, estilo e durabilidade.',
      preco: 350.0,
      desconto: 25,
      estoque: 10,
      imagem: 'https://example.com/jaqueta-couro.jpg',
    },
    {
      nome: 'Relógio de Pulso',
      descricao: 'Relógio elegante com design moderno.',
      preco: 500.0,
      desconto: 30,
      estoque: 15,
      imagem: 'https://example.com/relogio-pulso.jpg',
    },
  ];
}
