import CreateAcaoService from '@services/acao/CreateAcaoService';
import { Request, Response } from 'express';

export class CreateAcaoController {
  async handle(req: Request, res: Response) {
    const { aluno, descricaoAcao, statusAcao, dataInicio, dataFim } = req.body;
    console.log(aluno);
    console.log(descricaoAcao);
    console.log(statusAcao);
    console.log(dataInicio);

    const service = new CreateAcaoService();

    const result = await service.execute({
      aluno,
      descricaoAcao,
      statusAcao,
      dataInicio,
      dataFim,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}
