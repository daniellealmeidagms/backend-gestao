import { AppDataSource } from '@database/datasource';
import Cargo from '@database/entities/Cargo';

export default class CreateCargoService {
  //async execute({ }: );
  async execute() {
    const repo = AppDataSource.getRepository(Cargo);
    const cargos = await repo.find({ where: { ativo: true } });
    return cargos;
  }
}
