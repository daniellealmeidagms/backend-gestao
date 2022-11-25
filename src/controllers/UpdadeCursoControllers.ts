import { Request, Response, response } from 'express';
import { UpdateCurso } from 'src/controller/UpdateCursoController';

export class UpdateCursoController {
  async handle(request: Request, response: Response) {
    const service = new UpdateCurso();

    const cursos = await service.execute();

    return response.json(cursos);
  }
}
