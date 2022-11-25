import { AppDataSource } from 'src/database/datasource';
import Responsavel from 'src/database/entities/Responsavel';

export class GetAllResponsavelService {
  async execute() {
    const repo = AppDataSource.getRepository(Responsavel);

    const responsavel = await repo.find();

    return responsavel;
  }
}
