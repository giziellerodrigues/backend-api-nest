import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CategoriaTable1598485890695 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'categoria',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'

                },
                {
                    name: 'descricao',
                    type: 'varchar'
                }

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
