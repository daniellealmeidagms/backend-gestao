import { randomInt } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('acoes')
export default class Acao {
  @PrimaryColumn()
  id: number;

  @Column()
  aluno: number;

  @Column()
  descricaoAcao: string;

  @Column()
  statusAcao: string;

  @Column()
  datainicio: Date;

  @Column()
  dataFim: Date;

  @Column()
  ativo: boolean;

  constructor() {
    this.id = randomInt(1000);
    this.ativo = true;
  }
}
