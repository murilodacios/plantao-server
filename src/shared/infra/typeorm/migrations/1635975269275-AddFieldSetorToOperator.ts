import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddFieldSetorToOperator1635975269275 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("operators", new TableColumn({
            name: "setor",
            type: "varchar"
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn("operators", "setor")

    }

}
