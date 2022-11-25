import { Request, Response } from 'express';
import { CreateCursoService } from 'src/service/CreateCursoService';

export class CreateCursoController {
  async handle(request: Request, response: Response) {
    const { id, descricaoCurso, turno, modalidade, semestral, ativo } =
      request.body;

    const service = new CreateCursoService();
    const result = await service.execute({
      id,
      descricaoCurso,
      turno,
      modalidade,
      semestral,
      ativo,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
