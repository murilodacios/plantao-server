import { ICreateTaxPayerDTO } from "../dtos/ITaxPayerDTO";
import { TaxPayer } from "../infra/typeorm/models/TaxPayer";

interface ITaxPayerRepository {
    create({name, email, phone, cpf_cnpj, operator_id}: ICreateTaxPayerDTO): Promise<TaxPayer>;
}

export { ITaxPayerRepository } 