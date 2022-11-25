import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class popHorario1669214373775 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'horario',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
