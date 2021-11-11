import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'
import { Operator } from '../../../../operators/infra/typeorm/models/Operator';

@Entity('taxpayers')
class TaxPayer {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cpf_cnpj: string;

    @Column()
    phone: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Operator)
    @JoinColumn({name: 'operator_id'})
    operator: Operator;

    @Column()
    operator_id: string;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }

}

export { TaxPayer }