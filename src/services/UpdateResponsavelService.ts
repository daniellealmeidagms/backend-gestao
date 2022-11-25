import { AppDataSource } from 'src/database/datasource';
import Responsavel from 'src/database/entities/Responsavel';

type UpdateResponsavelRequest = {
  idInt: number;
  nomeResponsavel: string;
  emailResponsavel: string;
  telefoneResponsavel: number;
};

export class UpdateResponsavelService {
  async execute({
    idInt,
    nomeResponsavel,
    emailResponsavel,
    telefoneResponsavel,
  }: UpdateResponsavelRequest) {
    const repo = AppDataSource.getRepository(Responsavel);
    const responsavel = await repo.findOne({ where: { id: idInt } });

    if (!responsavel) {
      return new Error('Responsavel already exists');
    }
    responsavel.id = idInt;
    responsavel.nomeResponsavel = nomeResponsavel;
    responsavel.emailResponsavel = emailResponsavel;
    responsavel.telefoneResponsavel = telefoneResponsavel;

    return responsavel;
  }
}
