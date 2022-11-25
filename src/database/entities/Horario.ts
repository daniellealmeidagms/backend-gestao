import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('horarios')
export default class Horario {
  params: { id: any; horarioInicio: any; horarioFim: any; diaSemana: any; };
  json(result: any) {
    throw new Error("Method not implemented.");
  }
  @PrimaryColumn()
  id: number;

  @Column()
  horarioInicio: string;

  @Column()
  horarioFim: string;

  @Column()
  diaSemana: string;
  status: any;
}
