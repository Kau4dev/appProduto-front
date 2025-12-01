import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card-list',
  imports: [],
  templateUrl: './product-card-list.html',
  styleUrl: './product-card-list.css',
})
export class ProductCardList {
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
      nome: 'Relógio de Pulso',
      descricao: 'Relógio elegante com design moderno.',
      preco: 500.0,
      desconto: 30,
      estoque: 0,
      imagem: 'https://example.com/relogio-pulso.jpg',
    },
    {
      nome: 'Mochila Casual',
      descricao: 'Mochila espaçosa e resistente para o dia a dia.',
      preco: 150.0,
      desconto: 25,
      estoque: 15,
      imagem: 'https://example.com/mochila-casual.jpg',
    },
  ];
}
