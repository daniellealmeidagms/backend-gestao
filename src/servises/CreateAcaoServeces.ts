import { AppDataSource } from "src/database/datasource";
import Acao from "src/database/entities/Acao";

type AcaoRequest = {
  id: number;
  aluno: number;
  descricaoAcao: string;
  statusAcao: string;
  datainicio: Date;
  dataFim: Date;
  ativo: boolean; 
}

export class CreateAcaoServices{
  async excute({ id, aluno, descricaoAcao, statusAcao, datainicio,dataFim, ativo }: AcaoRequest): Promise<Acao>{
    const repo = AppDataSource.getRepository(Acao);
  
      
    const acao = repo.create({
      id,
      aluno,
      descricaoAcao,
      statusAcao,
      datainicio,
      dataFim,
      ativo
    });

    await repo.save(acao);
    return acao;
  }

}






