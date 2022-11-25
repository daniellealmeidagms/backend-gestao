import { AppDataSource } from 'src/database/datasource';
import Curso from 'src/database/entities/Curso';

type CursoRequest = {
  descricaoCurso: string;
  turno: string;
  modalidade: string;
  semestral: boolean;
};

export class CreateCursoService {
  async execute({
    descricaoCurso,
    turno,
    modalidade,
    semestral,
  }: CursoRequest): Promise<Curso> {
    const repo = AppDataSource.getRepository(Curso);

    const curso = repo.create({
      descricaoCurso,
      turno,
      modalidade,
      semestral,
    });

    await repo.save(curso);

    return curso;
  }
}
