import { MigrationInterface, QueryRunner } from 'typeorm';

export class CourseRefactoring1654471522736 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "courses" RENAME COLUMN "name" TO "course"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "courses" RENAME COLUMN "name" TO "name"`,
    );
  }
}
