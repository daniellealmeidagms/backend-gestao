import { AppDataSource } from 'src/database/datasource';
import Necessidade from '../database/entities/Necessidade';

type NecessidadeRequest = {
  id: number;
  cid: string;
  descricaoSimples: string;
  descricaoTecnica: string;
  ativo: boolean;
};

export class CreateNecessidadeService {
  async execute({
    id,
    cid,
    descricaoSimples,
    descricaoTecnica,
    ativo,
  }: NecessidadeRequest): Promise<Necessidade> {
    const repo = AppDataSource.getRepository(Necessidade);

    const necessidade = repo.create({
      id,
      cid,
      descricaoSimples,
      descricaoTecnica,
      ativo,
    });

    await repo.save(necessidade);

    return necessidade;
  }
}
