import { AppDataSource } from 'src/database/datasource';
import Cargo from 'src/database/entities/Cargo';

type CargoDeleteRequest = {
  idInt: number;
};

export default class DeleteCargoService {
  async execute({ idInt }: CargoDeleteRequest): Promise<Cargo | Error> {
    const repo = AppDataSource.getRepository(Cargo);
    const cargo = await repo.findOne({ where: { id: idInt } });
    if (!cargo) {
      return new Error('Cargo nao existe');
    }
    cargo.ativo = false;
    await repo.save(cargo);
    return cargo;
  }
}
