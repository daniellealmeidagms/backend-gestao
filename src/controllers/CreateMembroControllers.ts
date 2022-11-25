import { CreateMembroService } from '@services/CreateMembroService';
import { Request, Response } from 'express';

export class CreateMembroController {
  async handle(request: Request, response: Response) {
    const membro = request.body;

    const service = new CreateMembroService();

    const result = await service.execute(membro);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
