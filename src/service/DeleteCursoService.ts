import { AppDataSource } from 'src/database/datasource';
import Curso from 'src/database/entities/Curso';

type DeleteCursoRequest = {
  idInt: number;
};

export class DeleteCursoService {
  async execute({ idInt }: DeleteCursoRequest): Promise<Curso | Error> {
    const repo = AppDataSource.getRepository(Curso);

    const curso = await repo.findOne({ where: { id: idInt } });

    if (!curso) {
      return new Error('Curso does not exists');
    }

    curso.ativo = false;

    await repo.save(curso);

    return curso;
  }
}
