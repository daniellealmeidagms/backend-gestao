import { Request, Response } from 'express';
import { GetAllAlunoService } from '../services/GetAllAlunoService';

export class GetAllAlunoController{
  async handle(request: Request, response: Response) {
    const service = new GetAllAlunoService();

    const alunos = await service.execute();

    return response.json(alunos);
  }
}