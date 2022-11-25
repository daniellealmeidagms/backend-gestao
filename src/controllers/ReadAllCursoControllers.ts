import { Request, Response, response } from 'express';
import { ReadAllCurso } from 'src/services/ReadAllCurso';

export class ReadAllCursoController {
  async handle(request: Request, response: Response) {
    const service = new ReadAllCurso();

    const cursos = await service.execute();

    return response.json(cursos);
  }
}
