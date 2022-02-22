import { Acao } from "../../shared/acao.model";

export interface Investment {

  nome: string,
  objetivo: string,
  indicadorCarencia: string,
  saldoTotal: number,
  acoes?: Acao[],
}
