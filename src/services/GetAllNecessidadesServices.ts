import { AppDataSource } from 'src/database/datasource';
import Necessidade from '../database/entities/Necessidade';
export class GetAllCategoriesService {
  async execute() {
    const repo = AppDataSource.getRepository(Necessidade);
    const necessidades = await repo.find();
    return necessidades;
  }
}
