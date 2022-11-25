import { AppDataSource } from 'src/database/datasource';
import Curso from 'src/database/entities/Curso';

export class ReadAllCursoService {
  async execute() {
    const repo = AppDataSource.getRepository(Curso);

    const curso = await repo.find();

    return curso;
  }
}
