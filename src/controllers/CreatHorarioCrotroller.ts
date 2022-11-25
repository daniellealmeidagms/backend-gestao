import Horario from "src/database/entities/Horario";
import { DataSource } from "typeorm";

export class CreatHorarioController {
  execute: any;

  async handle(request: Horario, response: Horario){
    const {id} = request.params;
    const {horarioInicio,horarioFim,diaSemana,} = request.params;

    const service = new CreatHorarioController();

    const result = await service.execute({id, horarioInicio, horarioFim, diaSemana,})

    if(CreatHorarioController) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
} 