import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMeetings1635963820413 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "meetings",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "ticketUrl",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "operator_id",
                        type: "uuid",
                        isNullable: false,
                    },
                    {
                        name: "taxpayer_id",
                        type: "uuid",
                        isNullable: false,
                    },
                    {
                        name: "startAt",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "endAt",
                        type: "timestamp",
                        default: "now()",
                        isNullable: true
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKTaxPayers",
                        referencedTableName: "taxpayers", //Tabela externa que queremos trazer
                        referencedColumnNames: ["id"], //Campo da tabela externa
                        columnNames: ["taxpayer_id"], //Campo da tabela atual que será FK
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKOperators",
                        referencedTableName: "operators", //Tabela externa que queremos trazer
                        referencedColumnNames: ["id"], //Campo da tabela externa
                        columnNames: ["operator_id"], //Campo da tabela atual que será FK
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("meetings")

    }

}
