import { AppDataSource } from 'src/database/datasource';
import Membro from 'src/database/entities/Membro';

type MembroUpdateRequest = {
  idint: number;
  fkCargo: number;
  cpfMembro: string;
  nomeMembro: string;
  emailMembro: string;
  telefoneMembro: number;
  formacao: string;
  permissao: string;
};

export class UpdateMembroService {
  async execute({
    idint,
    fkCargo,
    cpfMembro,
    nomeMembro,
    emailMembro,
    telefoneMembro,
    formacao,
    permissao,
  }: MembroUpdateRequest) {
    const repo = AppDataSource.getRepository(Membro);

    const membro = await repo.findOne({ where: { id: idint } });

    if (!membro) {
      return new Error('Membro nao existe!');
    }

    membro.fkCargo = fkCargo ? fkCargo : membro.fkCargo;
    membro.cpfMembro = cpfMembro ? cpfMembro : membro.cpfMembro;
    membro.nomeMembro = nomeMembro ? nomeMembro : membro.nomeMembro;
    membro.emailMembro = emailMembro ? emailMembro : membro.nomeMembro;
    membro.telefoneMembro = telefoneMembro
      ? telefoneMembro
      : membro.telefoneMembro;
    membro.formacao = formacao ? formacao : membro.formacao;
    membro.permissao = permissao ? permissao : membro.permissao;

    await repo.save(membro);
    return membro;
  }
}
