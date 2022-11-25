import { AppDataSource } from 'src/database/datasource';
import Membro from 'src/database/entities/Membro';

type MembroDeleteRequest = {
  idint: number;
};

export class DeleteMembroService {
  async execute({ idint }: MembroDeleteRequest): Promise<Membro | Error> {
    const repo = AppDataSource.getRepository(Membro);
    const membro = await repo.findOne({ where: { id: idint } });
    if (!membro) {
      return new Error('Membro não existe');
    }
    membro.ativo = false;
    await repo.delete(idint);
    return membro;
  }
}
