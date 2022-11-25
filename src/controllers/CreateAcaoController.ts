import {Request, Response } from "express";
//import {CreateAcaoService } from '../service/CreateAcaoService';

export class CreateAcaoController{
  async handle(request: Request, response: Response){
    const {nome, description} = request.body

    const service = new CreateAcaoController();

    const result = await service.execute({
      id,
      aluno,
      descricaoAcao,
      statusAcao,
      datainicio,
      dataFim,
      ativo

    });

    if(result instanceof Error){
      return response.status(400).json(result.message);

    }
    
    return response.json(result)

  }
}