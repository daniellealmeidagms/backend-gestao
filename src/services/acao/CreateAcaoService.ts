import { AppDataSource } from 'src/database/datasource';
import Acao from 'src/database/entities/Acao';

type AcaoRequest = {
  aluno: number;
  descricaoAcao: string;
  statusAcao: string;
  dataInicio: Date;
  dataFim: Date;
};

export default class CreateAcaoService {
  async execute({
    aluno,
    descricaoAcao,
    statusAcao,
    dataInicio,
    dataFim,
  }: AcaoRequest): Promise<Acao> {
    const repo = AppDataSource.getRepository(Acao);

    const acao = repo.create({
      aluno,
      descricaoAcao,
      statusAcao,
      dataInicio,
      dataFim,
    });

    await repo.save(acao);
    return acao;
  }
}
