import { AppDataSource } from 'src/database/datasource';
import Necessidade from '../database/entities/Necessidade';

type NecessidadeDeleteRequest = {
  id: number;
};

export class DeleteNecessidadeService {
  async execute({ id }: NecessidadeDeleteRequest) {
    const repo = AppDataSource.getRepository(Necessidade);
    const necessidade = await repo.findOne({ where: { id } });
    if (!Necessidade) {
      return new Error('Necessidade does not existis');
    }
    Necessidade.ativo = false;

    await repo.delete(Necessidade);
    return necessidade;
  }
}
