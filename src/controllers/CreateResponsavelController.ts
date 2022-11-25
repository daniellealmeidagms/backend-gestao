import { Request, Response } from 'express';
import { CreateResponsavelService } from 'src/service/CreateResponsavelService';

export class CreateResponsavelController {
  async handles(request: Request, response: Response) {
    const responsavel = request.body;

    const service = new CreateResponsavelService();

    const result = await service.execute(responsavel);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}
