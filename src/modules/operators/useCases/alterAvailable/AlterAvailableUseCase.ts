import { inject, injectable } from "tsyringe";
import { Operator } from "../../infra/typeorm/models/Operator";
import { IOperatorsRepository } from "../../interfaces/IOperatorsRepository";

@injectable()
class AlterAvailableUseCase {

    constructor(
        @inject('OperatorsRepository')
        private operatorsRepository: IOperatorsRepository,
    ) { }

    async execute(id: string): Promise<Operator> {

        const operator = await this.operatorsRepository.alterAvailable(id);

        delete operator.password

        return operator
    }

}

export { AlterAvailableUseCase }