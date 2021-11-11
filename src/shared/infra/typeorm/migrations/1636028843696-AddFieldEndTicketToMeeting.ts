import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddFieldEndTicketToMeeting1636028843696 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("meetings", new TableColumn({
            name: "isEndMeeting",
            type: "boolean",
            default: false,
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.dropColumn("meetings", "isEndMeeting")

    }

}
