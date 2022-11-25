import { randomInt } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('horarios')
export default class Horario {
  @PrimaryColumn()
  id: number;

  @Column()
  horarioInicio: string;

  @Column()
  horarioFim: string;

  @Column()
  diaSemana: string;

  constructor() {
    this.id = randomInt(1000);
  }
}
