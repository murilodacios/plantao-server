import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddFieldPassWordToOperator1635998111746 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("operators", new TableColumn({
            name: "password",
            type: "varchar"
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn("operators", "password")

    }

}
