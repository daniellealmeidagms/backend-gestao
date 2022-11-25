import { Request, Response, response } from 'express';
import { ReadOneCurso } from 'src/services/ReadOneCurso';

export class ReadOneCursoController {
  async handle(request: Request, response: Response) {
    const service = new ReadOneCurso();

    const cursos = await service.execute();

    return response.json(cursos);
  }
}
