import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { ProdutoService } from './produto-service';
import { Produto } from '../../types/produto';
import { environment } from '../../../environments/environment.development';

describe('ProdutoService', () => {
  let service: ProdutoService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.apiUrl;

  const produtoMock: Produto = {
    id: 1,
    nome: 'Produto Teste',
    codigoBarras: '123456',
    descricao: 'Descrição teste',
    preco: 100.0,
  };

  const listaProdutosMock: Produto[] = [produtoMock];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdutoService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ProdutoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  describe('Cenários de Sucesso', () => {
    it('deve criar um produto via POST', () => {
      service.criarProduto(produtoMock).subscribe((produto) => {
        expect(produto).toEqual(produtoMock);
      });

      const req = httpMock.expectOne(`${apiUrl}/produtos`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(produtoMock);
      req.flush(produtoMock);
    });

    it('deve listar produtos via GET', () => {
      service.listarProdutos().subscribe((produtos) => {
        expect(produtos.length).toBe(1);
        expect(produtos).toEqual(listaProdutosMock);
      });

      const req = httpMock.expectOne(`${apiUrl}/produtos`);
      expect(req.request.method).toBe('GET');
      req.flush(listaProdutosMock);
    });

    it('deve buscar produto por ID via GET', () => {
      service.buscarProdutoPorId(1).subscribe((produto) => {
        expect(produto).toEqual(produtoMock);
      });

      const req = httpMock.expectOne(`${apiUrl}/produtos/1`);
      expect(req.request.method).toBe('GET');
      req.flush(produtoMock);
    });

    it('deve atualizar produto via PUT', () => {
      const produtoAtualizado = { ...produtoMock, nome: 'Atualizado' };

      service.atualizarProduto(1, produtoAtualizado).subscribe((produto) => {
        expect(produto.nome).toBe('Atualizado');
      });

      const req = httpMock.expectOne(`${apiUrl}/produtos/1`);
      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual(produtoAtualizado);
      req.flush(produtoAtualizado);
    });

    it('deve deletar produto via DELETE', () => {
      service.deletarProduto(1).subscribe((res) => {
        expect(res).toBeNull(); // Ou toBeUndefined dependendo do retorno da API
      });

      const req = httpMock.expectOne(`${apiUrl}/produtos/1`);
      expect(req.request.method).toBe('DELETE');
      req.flush(null);
    });
  });

  describe('Cenários de Erro (Vitest Style)', () => {
    it('deve lidar com erro ao criar produto', () => {
      service.criarProduto(produtoMock).subscribe({
        next: () => expect.fail('Deveria ter entrado no erro'),
        error: (error) => {
          expect(error.status).toBe(500);
          expect(error.statusText).toBe('Server Error');
        },
      });

      const req = httpMock.expectOne(`${apiUrl}/produtos`);
      req.flush('Erro ao criar', { status: 500, statusText: 'Server Error' });
    });

    it('deve lidar com erro ao listar produtos', () => {
      service.listarProdutos().subscribe({
        next: () => expect.fail('Deveria ter falhado'),
        error: (error) => {
          expect(error.status).toBe(404);
        },
      });

      const req = httpMock.expectOne(`${apiUrl}/produtos`);
      req.flush('Nada encontrado', { status: 404, statusText: 'Not Found' });
    });

    it('deve lidar com erro ao buscar produto inexistente', () => {
      service.buscarProdutoPorId(999).subscribe({
        next: () => expect.fail('Deveria ter falhado'),
        error: (error) => {
          expect(error.status).toBe(404);
        },
      });

      const req = httpMock.expectOne(`${apiUrl}/produtos/999`);
      req.flush('Nada encontrado', { status: 404, statusText: 'Not Found' });
    });

    it('deve lidar com erro ao atualizar produto', () => {
      service.atualizarProduto(1, produtoMock).subscribe({
        next: () => expect.fail('Deveria ter falhado'),
        error: (error) => {
          expect(error.status).toBe(400);
        },
      });

      const req = httpMock.expectOne(`${apiUrl}/produtos/1`);
      req.flush('Dados inválidos', { status: 400, statusText: 'Bad Request' });
    });

    it('deve lidar com erro ao deletar produto', () => {
      service.deletarProduto(1).subscribe({
        next: () => expect.fail('Deveria ter falhado'),
        error: (error) => {
          expect(error.status).toBe(404);
        },
      });

      const req = httpMock.expectOne(`${apiUrl}/produtos/1`);
      req.flush('Erro', { status: 404, statusText: 'Not Found' });
    });
  });
});
