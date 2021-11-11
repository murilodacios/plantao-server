import { inject, injectable } from "tsyringe";
import { Operator } from "../../infra/typeorm/models/Operator";
import { IOperatorsRepository } from "../../interfaces/IOperatorsRepository";

@injectable()
class ListOneOperatorUseCase {

    constructor(
        @inject("OperatorsRepository")
        private operatorsRepository: IOperatorsRepository,
    ) {}

    async execute(id: string): Promise<Operator> {

        const operator = await this.operatorsRepository.findById(id)

        return operator
    }

}

export { ListOneOperatorUseCase } 