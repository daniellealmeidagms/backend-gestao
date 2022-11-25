import { AppDataSource } from '@database/datasource';
import Cargo from '@database/entities/Cargo';

type CargoDeleteRequest = {
  idInt: number;
};

export default class DeleteCargoService {
  async execute({ idInt }: CargoDeleteRequest): Promise<String | Error> {
    const repo = AppDataSource.getRepository(Cargo);
    const cargo = await repo.findOne({ where: { id: idInt } });
    if (!cargo) {
      return new Error('Este cargo não existe.');
    }
    cargo.ativo = false;
    await repo.save(cargo);
    return 'Excluído com sucesso!';
  }
}
