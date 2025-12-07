export interface Produto {
  id?: number;
  nome: string;
  codigoBarras: string;
  descricao?: string;
  preco: number;
  dataCriacao?: Date;
  dataAtualizacao?: Date;
}
