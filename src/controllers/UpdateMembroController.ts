import { UpdateMembroService } from '@services/UpdateMembroService';
import { Request, Response } from 'express';

export class UpdateMembroController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const idint = parseInt(id);

    const service = new UpdateMembroService();

    const result = await service.execute();

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}
