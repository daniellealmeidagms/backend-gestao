import { type } from 'os';
import { AppDataSource } from 'src/database/datasource';
import Responsavel from 'src/database/entities/Responsavel';

type DeleteResponsavelRequest = {
  idInt: number;
};

export class DeleteResponsavelService {
  async execute({ idInt }: DeleteResponsavelRequest): Promise<Responsavel | Error> {
    const repo = AppDataSource.getRepository(Responsavel);

    const responsavel = await repo.findOne{(where: { id: idInt })};

    if (!(await repo.findOne(id))) {
      return new Error('Responsavel doest not exists!');
    }

    await repo.delete(id);
  }
}
