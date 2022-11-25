import { AppDataSource } from 'src/database/datasource';
import Curso from 'src/database/entities/Curso';

type UpdateCursoRequest = {
  idInt: number;
  descricaoCurso: string;
  turno: string;
  modalidade: string;
  semestral: boolean;
  ativo: boolean;
};

export class UpdateCursoService {
  async execute({
    idInt,
    descricaoCurso,
    turno,
    modalidade,
    semestral,
    ativo,
  }: UpdateCursoRequest) {
    const repo = AppDataSource.getRepository(Curso);

    const curso = await repo.findOne({ where: { id: idInt } });

    if (!curso) {
      return new Error('Curso does not exists');
    }
    curso.idInt = idInt;
    curso.descricaoCurso = descricaoCurso;
    curso.turno = turno;
    curso.modalidade = modalidade;
    curso.semestral = semestral;
    curso.ativo = ativo;

    await repo.save(curso);

    return curso;
  }
}
