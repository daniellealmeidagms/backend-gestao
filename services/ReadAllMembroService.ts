import { AppDataSource } from 'src/database/datasource';
import Membro from 'src/database/entities/Membro';

export class ReadAllMembrosServices {
  async execute() {
    const repo = AppDataSource.getRepository(Membro);

    const membro = await repo.find();

    return membro;
  }
}
