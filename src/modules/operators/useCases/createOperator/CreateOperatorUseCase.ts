import { inject, injectable } from "tsyringe";
import { ICreateOperatorDTO } from "../../dtos/OperatorDTO";
import { Operator } from "../../infra/typeorm/models/Operator";
import { IOperatorsRepository } from "../../interfaces/IOperatorsRepository";
import { hash } from 'bcryptjs'

@injectable()
class CreateOperatorUseCase {

    constructor(
        @inject('OperatorsRepository')
        private operatorsRepository: IOperatorsRepository,
    ) { }

    async execute({ name, email, cpf, password, matricula, phone, setor, available }: ICreateOperatorDTO): Promise<Operator> {

        const passwordHashed = await hash(password, 8)

        const operator = await this.operatorsRepository.create({ name, email, cpf, password: passwordHashed, phone, matricula, setor, available });

        return operator;

    }

}

export { CreateOperatorUseCase }