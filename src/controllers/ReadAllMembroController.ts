import { ReadAllMembrosServices } from '@services/ReadAllMembroService';
import { Request, Response } from 'express';

export class ReadAllMembroController {
  async handle(request: Request, response: Response) {
    const service = new ReadAllMembrosServices();

    const membro = await service.execute();
    return response.json(membro);
  }
}
