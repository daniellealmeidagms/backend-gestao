import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('cargos')
export default class Cargo {
  @PrimaryColumn()
  id: number;

  @Column()
  descricaoCargo: string;

  @Column()
  ativo: boolean;
}