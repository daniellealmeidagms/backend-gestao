import { AppDataSource } from "src/database/datasource";
import Acao from "src/database/entities/Acao";


export class ReadOneAcaoServices{
async excute() {
  const repo = AppDataSource.getRepository(ReadOneAcaoServices)
  const aluno = await repo.find();

  if (!Acao) {
    return new Error ('Acao nao Existe')

  }
  return Acao;
}
  
}




