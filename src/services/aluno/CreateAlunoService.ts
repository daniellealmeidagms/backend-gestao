import Aluno from '@database/entities/Aluno';
import { AppDataSource } from 'src/database/datasource';

type AlunoRequest = {
  id: number;
  fkMembro: number;
  cpfAluno: string;
  nomeAluno: string;
  nomeSocialAluno: string;
  emailAluno: string;
  telefoneAluno: number;
  dataNascimento: Date;
  prioridade: string;
  inicioAtendimento: Date;
  fimAtendimento: Date;
  ativo: boolean;
};

export class CreateAlunoService {
  async execute({
    id,
    fkMembro,
    cpfAluno,
    nomeAluno,
    nomeSocialAluno,
    emailAluno,
    telefoneAluno,
    dataNascimento,
    prioridade,
    inicioAtendimento,
    fimAtendimento,
    ativo,
  }: AlunoRequest): Promise<Aluno> {
    const repo = AppDataSource.getRepository(Aluno);

    const aluno = repo.create({
      id,
      fkMembro,
      cpfAluno,
      nomeAluno,
      nomeSocialAluno,
      emailAluno,
      telefoneAluno,
      dataNascimento,
      prioridade,
      inicioAtendimento,
      fimAtendimento,
      ativo,
    });

    await repo.save(aluno);

    return aluno;
  }
}
