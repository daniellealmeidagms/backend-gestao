import { Request, Response } from 'express';
import { CreateAlunoService } from '../services/CreateAlunoService';

export class CreateAlunoController {
  async handle(request: Request, response: Response) {
    const {
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
    } = request.body;

    const service = new CreateAlunoService();

    const result = await service.execute({
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

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
