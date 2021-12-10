// npm run typeorm migration:create -- -n FirstMigration
// typeorm migration:run
// npm run migration ts-node --transpile-only ./node_modules/typeorm/cli.js migration:run

import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class FirstMigration1639160691517 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "task",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "title",
            type: "varchar",
            length: "100",
          },
          {
            name: "desc",
            type: "varchar",
          },
          {
            name: "status",
            type: "enum",
            enum: ["done", "active", "removed"],
            default: "'active'",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("task");
  }
}
