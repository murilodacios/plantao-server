import { inject, injectable } from "tsyringe";
import { ICreateTaxPayerDTO } from "../../dtos/ITaxPayerDTO";
import { TaxPayer } from "../../infra/typeorm/models/TaxPayer";
import { ITaxPayerRepository } from "../../interfaces/ITaxPayerRepository";

@injectable()
class CreateTaxPayerUseCase {

    constructor (
        @inject("TaxPayerRepository")
        private taxPayersRepository: ITaxPayerRepository
    ) {}

    async execute({name, email, phone, cpf_cnpj, operator_id}: ICreateTaxPayerDTO): Promise<TaxPayer> {

        const taxpayer = await this.taxPayersRepository.create({name, email, phone, cpf_cnpj, operator_id})

        return taxpayer

    }

}

export { CreateTaxPayerUseCase } 