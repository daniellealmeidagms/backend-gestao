import CreateCargoService from '@services/cargo/CreateCargoService';
import { Request, Response } from 'express';

export default class CreateCargoController {
  async handle(req: Request, res: Response) {
    const { descricaoCargo } = req.body;
    console.log('Controller');
    console.log(descricaoCargo);
    const service = new CreateCargoService();
    const result = await service.execute({ descricaoCargo });
    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.json(result);
  }
}
