import { AppDataSource } from 'src/database/datasource';
import Membro from 'src/database/entities/Membro';

type MembroRequest = {
  fkCargo: number;
  cpfMembro: string;
  nomeMembro: string;
  emailMembro: string;
  telefoneMembro: number;
  formacao: string;
  permissao: string;
};

export class CreateMembroService {
  async execute({
    fkCargo,
    cpfMembro,
    nomeMembro,
    emailMembro,
    telefoneMembro,
    formacao,
    permissao,
  }: MembroRequest): Promise<Membro | Error> {
    const repo = AppDataSource.getRepository(Membro);

    const membro = repo.create({
      fkCargo,
      cpfMembro,
      nomeMembro,
      emailMembro,
      telefoneMembro,
      formacao,
      permissao,
    });

    await repo.save(membro);

    return membro;
  }
}
