import { getRepository, Repository } from "typeorm";
import { ICreateTaxPayerDTO } from "../../../dtos/ITaxPayerDTO";
import { ITaxPayerRepository } from "../../../interfaces/ITaxPayerRepository";
import { TaxPayer } from "../models/TaxPayer";

class TaxPayerRepository implements ITaxPayerRepository {

    private repository: Repository<TaxPayer>;

    constructor() {
        this.repository = getRepository(TaxPayer)
    }

    async create({ name, email, phone, cpf_cnpj, operator_id }: ICreateTaxPayerDTO): Promise<TaxPayer> {
        const taxpayer = this.repository.create({ name, email, phone, cpf_cnpj, operator_id })

        return await this.repository.save(taxpayer)
    }

}

export { TaxPayerRepository }