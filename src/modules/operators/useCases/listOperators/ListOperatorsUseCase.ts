import { inject, injectable } from "tsyringe";
import { Operator } from "../../infra/typeorm/models/Operator";
import { IOperatorsRepository } from "../../interfaces/IOperatorsRepository";

@injectable()
class ListOperatorsUseCase {

    constructor(
        @inject("OperatorsRepository")
        private operatorsRepository: IOperatorsRepository,
    ) {}

    async execute(): Promise<Operator[]> {

        const operators = await this.operatorsRepository.listOperators()

        return operators

    }

}

export { ListOperatorsUseCase } 