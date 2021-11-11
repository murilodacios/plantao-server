import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddFieldPhoneToOperator1635998229035 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("operators", new TableColumn({
            name: "phone",
            type: "varchar",
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn("operators", "phone")

    }

}
