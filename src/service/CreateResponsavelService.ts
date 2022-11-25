import { AppDataSource } from 'src/database/datasource';
import Responsavel from 'src/database/entities/Responsavel';

type ResponsavelRequest = {
  id: number;
  nomeResponsavel: string;
  emailResponsavel: string;
  telefoneResponsavel: number;
};
export class CreateResponsavelService {
  async execute({
    id,
    nomeResponsavel,
    emailResponsavel,
    telefoneResponsavel,
  }: ResponsavelRequest): Promise<Responsavel> {
    const repo = AppDataSource.getRepository(Responsavel);

    const responsavel = repo.create({
      id,
      nomeResponsavel,
      emailResponsavel,
      telefoneResponsavel,
    });

    await repo.save(responsavel);

    return responsavel;
  }
}
