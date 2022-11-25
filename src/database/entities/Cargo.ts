import { randomInt } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('cargos')
export default class Cargo {
  @PrimaryColumn()
  id: number;

  @Column()
  descricaoCargo: string;

  @Column()
  ativo: boolean;

  constructor() {
    this.id = randomInt(1000);
    this.ativo = true;
  }
}
