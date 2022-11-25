import { Request, Response } from 'express';
import DeleteCargoService from 'src/service/DeleteResponsavelService';

export default class DeleteCargoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const idInt = parseInt(id);
    const service = new DeleteCargoService();
    const result = await service.execute({ idInt });
    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.json(result);
  }
}
