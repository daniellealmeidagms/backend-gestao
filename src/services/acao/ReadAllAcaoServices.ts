import { AppDataSource } from "src/database/datasource";
import  Acao  from "../database/entities/Acao";

export class ReadAllAcaoServices {
  async execute() {
    const repo = AppDataSource.getRepository(ReadAllAcaoServices);
    const Acao = await repo.find();

    return Acao;
  } 
}