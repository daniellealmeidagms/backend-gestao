import { Request, Response } from 'express';

export class UpdateResponsavelController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { nomeResponsavel, emailResponsavel, telefoneResponsavel } =
      request.body;
    const service = new UpdateResponsavelService();
    const result = await service.execute({});
  }
}
