import { randomInt } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('responsaveis')
export default class Responsavel {
  @PrimaryColumn()
  id: number;

  @Column()
  nomeResponsavel: string;

  @Column()
  emailResponsavel: string;

  @Column()
  telefoneResponsavel: number;

  constructor() {
    this.id = randomInt(1000);
  }
}
