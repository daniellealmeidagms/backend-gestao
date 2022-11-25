import { Request, Response } from 'express';
import Responsavel from 'src/database/entities/Responsavel';

export class ReadOneResponsavelController {
  async handle(request: Request, response: Response) {
    const service = new ReadOneResponsavelService();

    const responsavel = await service.execute();

    return response.json(Responsavel);
  }
}
