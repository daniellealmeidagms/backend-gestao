import { AppDataSource } from 'src/database/datasource';
import Membro from 'src/database/entities/Membro';

export class ReadOneMembrosServices {
  async execute() {
    const repo = AppDataSource.getRepository(Membro);

    const membro = await repo.findOne({ where: { id: idint } });

    return membro;
  }
}
