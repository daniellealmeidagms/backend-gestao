import { randomInt } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('cursos')
export default class Curso {
  @PrimaryColumn()
  id: number;

  @Column()
  descricaoCurso: string;

  @Column()
  turno: string;

  @Column()
  modalidade: string;

  @Column()
  semestral: boolean;

  @Column()
  ativo: boolean;
  idInt: number;

  constructor() {
    this.id = randomInt(1000);
    this.ativo = true;
  }
}
