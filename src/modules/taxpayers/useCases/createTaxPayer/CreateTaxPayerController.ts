import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTaxPayerUseCase } from "./CreateTaxPayerUseCase";

class CreateTaxPayerController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, email, phone, cpf_cnpj, operator_id } = request.body

        const createTaxPayerUseCase = container.resolve(CreateTaxPayerUseCase)

        const taxpayer = await createTaxPayerUseCase.execute({ name, email, phone, cpf_cnpj, operator_id })

        return response.json(taxpayer).send()
    }

}

export { CreateTaxPayerController }