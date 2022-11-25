import Membro from 'src/database/entities/Membro';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class popMembro1669214287496 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
  //   const queryBuilder = await getConnection().createQueryBuilder();

  //   let pop = await queryBuilder
  //     .insert()
  //     .into(membros)
  //     .values({
  //       nomeMembro: 'Carlos',
  //       emailMembro: 'carlin123@gmail.com',
  //       telefoneMembro: '639845448',
  //       formacaoMembro: 'psicologia',
  //       horarioAtendimentoMembro: '2020-06-02 22:98:13.120174 UTC',
  //     })
  //     .execute();
  // }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
