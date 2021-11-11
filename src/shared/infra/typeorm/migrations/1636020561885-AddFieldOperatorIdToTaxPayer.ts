import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddFieldOperatorIdToTaxPayer1636020561885 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("taxpayers", new TableColumn({
            name: "operator_id",
            type: "varchar"
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn("taxpayers", "operator_id")

    }

}
