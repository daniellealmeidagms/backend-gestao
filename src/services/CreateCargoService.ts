import { AppDataSource } from '@database/datasource';
import Cargo from '@database/entities/Cargo';

type CargoRequest = {
  descricaoCargo: string;
};

export default class CreateCargoService {
  //async execute({ }: );
  async execute({ descricaoCargo }: CargoRequest): Promise<Cargo | Error> {
    console.log('Service');
    console.log(descricaoCargo);

    const repo = AppDataSource.getRepository(Cargo);

    if (await repo.findOneBy({ descricaoCargo })) {
      return new Error('Este cargo já existe.');
    }

    const cargo = repo.create({
      descricaoCargo,
    });

    await repo.save(cargo);

    return cargo;
  }
}
