import { AppDataSource } from "src/database/datasource";
import Horario from "src/database/entities/Horario";


type HorarioRequeste = {
  id:number
  horarioInicio: string
  horarioFim: string
  diaSemana: string
}

export class CreatHorarioService {
  async excute ({id, horarioInicio ,horarioFim ,diaSemana}:HorarioRequeste): Promise<Horario> {
  const repo = AppDataSource.getRepository(Horario); 
  

  const horario = repo.create({
    id,
    horarioInicio,
    horarioFim,
    diaSemana,
    
  })
  await repo.save(horario);

  return horario
  }
}