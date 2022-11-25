import { AppDataSource } from "../database/datasource";
import Acao from "../database/entities/Acao";

type AcaoDeleteRequest = {
  id: number;
}
export class DeleteAcaoSercvices{
  async execute({id}:AcaoDeleteRequest) {
    const repo = AppDataSource.getRepository(Acao);
    
    const acao = await repo.findOne({ where: { id } });

    if (!acao) {
      return new Error('Acao nao Existe.');
    }

    acao.ativo = false;
    

    await repo.save(acao)
    return acao
  }
}
