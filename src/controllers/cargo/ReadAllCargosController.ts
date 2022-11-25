import ReadAllCargosService from '@services/cargo/ReadAllCargosService';
import { Request, Response } from 'express';

export default class ReadAllCargosController {
  async handle(req: Request, res: Response) {
    const service = new ReadAllCargosService();
    const result = await service.execute();
    if (result.length < 1) {
      return res.json('Ainda não foi criado nenhum cargo.');
    }
    return res.json(result);
  }
}
