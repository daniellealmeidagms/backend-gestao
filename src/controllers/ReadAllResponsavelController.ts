import { Request, Response } from 'express';

export class ReadAllResponsavelController {
  async handle(request: Request, response: Response) {
    const service = new ReadAllResponsavelService();

    const responsavel = await service.execute();

    return response.json(responsavel);
  }
}
