import { v4 as uuid } from 'uuid'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Operator } from '../../../../operators/infra/typeorm/models/Operator';
import { TaxPayer } from '../../../../taxpayers/infra/typeorm/models/TaxPayer';

@Entity("meetings")
class Meeting {

    @PrimaryColumn()
    id: string;

    @Column()
    ticketUrl: string;

    @Column()
    description: string;

    @ManyToOne(() => Operator)
    @JoinColumn({name: 'operator_id'})
    operator: Operator;

    @Column()
    operator_id: string;

    @ManyToOne(() => TaxPayer)
    @JoinColumn({name: 'taxpayer_id'})
    taxpayer: TaxPayer;

    @Column()
    taxpayer_id: string
    
    @Column()
    startAt: Date;
    
    @Column()
    endAt: Date;
    
    @Column()
    isEndMeeting: boolean;

    constructor () {
        if(!this.id) {
            this.id = uuid()
        }
    }

}

export { Meeting }