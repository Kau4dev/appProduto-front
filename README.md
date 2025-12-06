# 🛒 Front Produtos - Sistema de Gerenciamento de Produtos

![Angular](https://img.shields.io/badge/Angular-21-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple?logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-green)

Sistema web moderno para gerenciamento de produtos com carrinho de compras, desenvolvido com **Angular 21** e **Bootstrap 5**.

---

## 📋 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Executando a Aplicação](#-executando-a-aplicação)
- [Testes](#-testes)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [API Backend](#-api-backend)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

O **Front Produtos** é uma aplicação web single-page (SPA) desenvolvida em Angular 21 que oferece uma interface completa para gerenciamento de produtos e carrinho de compras. O projeto utiliza as mais recentes funcionalidades do Angular, incluindo signals, standalone components e a nova sintaxe de control flow.

### ✨ Destaques Técnicos

- **Angular 21**: Framework mais atualizado com signals e standalone components
- **TypeScript 5.5**: Tipagem estática robusta
- **Reactive Programming**: RxJS para operações assíncronas
- **LocalStorage**: Persistência de dados do carrinho
- **Responsive Design**: Interface adaptável para todos os dispositivos

---

## 🚀 Funcionalidades

### Gerenciamento de Produtos

- ✅ **Criar** novos produtos com validação de formulário
- ✅ **Listar** produtos em cards responsivos
- ✅ **Editar** produtos existentes
- ✅ **Excluir** produtos com confirmação modal
- ✅ **Visualizar** detalhes completos

### Carrinho de Compras

- ✅ **Adicionar** produtos ao carrinho
- ✅ **Remover** produtos do carrinho
- ✅ **Atualizar** quantidade de itens
- ✅ **Calcular** totais automaticamente
- ✅ **Persistir** dados no localStorage
- ✅ **Prevenir** duplicação de produtos
- ✅ **Contador** de itens na navbar

### Interface e UX

- ✅ Alertas personalizados (substituindo `alert()` nativo)
- ✅ Modais de confirmação para ações críticas
- ✅ Navegação intuitiva com roteamento
- ✅ Feedback visual em todas as operações
- ✅ Design responsivo com Bootstrap 5

---

## 🛠 Tecnologias

### Core

- **Angular 21**: Framework principal
- **TypeScript 5.5**: Linguagem de programação
- **RxJS**: Programação reativa
- **Angular Router**: Navegação entre páginas

### UI/UX

- **Bootstrap 5**: Framework CSS
- **Bootstrap Icons**: Biblioteca de ícones
- **CSS3**: Estilização customizada

### Ferramentas de Desenvolvimento

- **Angular CLI**: Ferramenta de linha de comando
- **Karma + Jasmine**: Testes unitários
- **ESBuild**: Compilador rápido
- **TypeScript Compiler**: Verificação de tipos

### Padrões e Arquitetura

- **Standalone Components**: Componentes independentes sem NgModule
- **Signals**: Sistema reativo nativo do Angular
- **Reactive Forms**: Formulários reativos
- **Services com DI**: Injeção de dependências
- **Control Flow Syntax**: `@if`, `@for` (Angular 17+)

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js**: v18.x ou superior
- **npm**: v9.x ou superior (vem com Node.js)
- **Angular CLI**: v19.x ou superior

### Instalando o Angular CLI

```bash
npm install -g @angular/cli
```

### Verificando Versões

```bash
node --version    # v18.x ou superior
npm --version     # v9.x ou superior
ng version        # v19.x ou superior
```

---

## 💻 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/Kau4dev/appProduto-front.git
cd front-produtos
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o ambiente

O projeto possui dois arquivos de ambiente:

- `src/environments/environment.ts` (produção)
- `src/environments/environment.development.ts` (desenvolvimento)

Edite o arquivo de desenvolvimento para configurar a URL da API:

```typescript
// src/environments/environment.development.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080', // URL do backend
};
```

---

## 🏃 Executando a Aplicação

### Modo Desenvolvimento

```bash
npm start
# ou
ng serve
```

A aplicação estará disponível em: **http://localhost:4200**

### Modo Produção

```bash
npm run build
# ou
ng build --configuration production
```

Os arquivos otimizados serão gerados em `dist/front-produtos`.

### Outras Opções

```bash
# Iniciar com porta específica
ng serve --port 4300

# Abrir automaticamente no navegador
ng serve --open

# Modo watch com rebuild automático
ng serve --watch
```

---

## 🧪 Testes

O projeto possui testes unitários completos para os services principais.

### Executar Todos os Testes

```bash
npm test
# ou
ng test
```

### Executar Testes Específicos

```bash
# Apenas CarrinhoService
ng test --include='**/carrinho-service.spec.ts'

# Apenas ProdutoService
ng test --include='**/produto-service.spec.ts'
```

### Testes com Cobertura

```bash
ng test --code-coverage
```

O relatório será gerado em `coverage/index.html`.

### Testes em Modo Headless (CI/CD)

```bash
ng test --browsers=ChromeHeadless --watch=false
```

### Cobertura de Testes

| Service         | Testes   | Cobertura |
| --------------- | -------- | --------- |
| CarrinhoService | 34 specs | 100%      |
| ProdutoService  | 13 specs | 100%      |

**Total**: 47+ testes unitários

---

## 📁 Estrutura do Projeto

```
front-produtos/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes reutilizáveis
│   │   │   ├── alert/           # Componente de alerta personalizado
│   │   │   ├── navbar/          # Barra de navegação
│   │   │   ├── footer/          # Rodapé
│   │   │   ├── product-card/    # Card de produto
│   │   │   ├── product-card-list/ # Lista de produtos
│   │   │   ├── cart-item/       # Item do carrinho
│   │   │   ├── cart-summary/    # Resumo do carrinho
│   │   │   ├── modal-confirm/   # Modal de confirmação
│   │   │   └── form-product/    # Formulário de produto
│   │   ├── pages/               # Páginas da aplicação
│   │   │   ├── home/            # Página inicial
│   │   │   ├── listar-produtos/ # Listagem de produtos
│   │   │   ├── criar-produto/   # Criação de produto
│   │   │   ├── editar-produto/  # Edição de produto
│   │   │   ├── carrinho/        # Página do carrinho
│   │   │   └── nao-encontrado/  # Página 404
│   │   ├── services/            # Services injetáveis
│   │   │   ├── produto/         # ProdutoService + testes
│   │   │   └── carrinho/        # CarrinhoService + testes
│   │   ├── types/               # Interfaces TypeScript
│   │   │   ├── produto.ts       # Interface Produto
│   │   │   └── item-carrinho.ts # Interface ItemCarrinho
│   │   ├── app.config.ts        # Configuração do app
│   │   ├── app.routes.ts        # Rotas da aplicação
│   │   └── app.ts               # Componente raiz
│   ├── assets/                  # Arquivos estáticos
│   ├── environments/            # Configurações de ambiente
│   └── styles.css               # Estilos globais
├── angular.json                 # Configuração do Angular
├── package.json                 # Dependências do projeto
├── tsconfig.json                # Configuração TypeScript
└── README.md                    # Este arquivo
```

---

## 🌐 API Backend

A aplicação consome uma API REST para gerenciamento de produtos.

### Endpoints Utilizados

| Método | Endpoint         | Descrição               |
| ------ | ---------------- | ----------------------- |
| GET    | `/produtos`      | Lista todos os produtos |
| GET    | `/produtos/{id}` | Busca produto por ID    |
| POST   | `/produtos`      | Cria novo produto       |
| PUT    | `/produtos/{id}` | Atualiza produto        |
| DELETE | `/produtos/{id}` | Remove produto          |

### Estrutura do Produto

```typescript
interface Produto {
  id?: number;
  nome: string;
  codigoBarras: string;
  descricao?: string;
  preco: number;
  dataCriacao?: Date;
  dataAtualizacao?: Date;
}
```

### Configuração da API

Edite o arquivo `src/environments/environment.development.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080', // Altere para sua API
};
```

---

## 🎨 Componentes Principais

### CarrinhoService

Service responsável pelo gerenciamento do carrinho de compras usando signals:

```typescript
- adicionarProduto(produto: Produto): boolean
- removerProduto(produtoId: number): void
- atualizarQuantidade(produtoId: number, quantidade: number): void
- limparCarrinho(): void
- produtoNoCarrinho(produtoId: number): boolean
- totalItens(): number (computed)
- valorTotal(): number (computed)
```

### ProdutoService

Service para comunicação com a API de produtos:

```typescript
- criarProduto(produto: Produto): Observable<Produto>
- listarProdutos(): Observable<Produto[]>
- buscarProdutoPorId(id: number): Observable<Produto>
- atualizarProduto(id: number, produto: Produto): Observable<Produto>
- deletarProduto(id: number): Observable<void>
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos abaixo:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Padrões de Código

- Use **TypeScript** com tipagem estática
- Siga o **Angular Style Guide**
- Utilize **Signals** para estado reativo
- Prefira **Standalone Components**
- Use **@if/@for** ao invés de *ngIf/*ngFor quando possível
- Adicione **testes unitários** para novos services

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Kau4dev**

- GitHub: [@Kau4dev](https://github.com/Kau4dev)
- Repositório: [appProduto-front](https://github.com/Kau4dev/appProduto-front)

---

## 📞 Suporte

Para reportar bugs ou sugerir melhorias, abra uma [issue](https://github.com/Kau4dev/appProduto-front/issues) no GitHub.

---

## 🙏 Agradecimentos

- **Minsait** - Projeto desenvolvido durante treinamento
- **Angular Team** - Framework incrível
- **Bootstrap Team** - Framework CSS responsivo

---

<div align="center">

**Desenvolvido com ❤️ usando Angular 21**

⭐ **Dê uma estrela no projeto se ele foi útil!** ⭐

</div>
