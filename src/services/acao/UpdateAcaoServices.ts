import { AppDataSource } from "../database/datasource";
import Acao from "../database/entities/Acao";

type AcaoUpdateRequest = {
    id: number;
  aluno: number;
  descricaoAcao: string;
  statusAcao: string;
  datainicio: Date;
  dataFim: Date;
  ativo: boolean;
}


export class UpdateAcaoSercvices{
  async execute({ id,aluno,descricaoAcao,statusAcao,datainicio,dataFim,ativo}:AcaoUpdateRequest) {
    const repo = AppDataSource.getRepository(Acao);
    
    const acao = await repo.findOne({ where: { id } });

    if (!acao) {
      return new Error('Acao nao Existe.');
    }

    acao.id = id ? id : acao.id;
    acao.aluno = aluno ? aluno : acao.aluno
    acao.descricaoAcao = descricaoAcao ? descricaoAcao :acao.descricaoAcao
    acao.statusAcao = statusAcao ? statusAcao : acao.statusAcao
    acao.datainicio = datainicio ? datainicio : acao.datainicio
    acao.dataFim = dataFim ? dataFim : acao.dataFim
    acao.ativo = ativo ? ativo : acao.ativo
    

    await repo.save(acao)
    return acao
  }
}