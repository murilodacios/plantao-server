import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateOperatorUseCase } from "./CreateOperatorUseCase";

class CreateOperatorController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, email, cpf, password, matricula, phone, setor, available } = request.body

        const createOperatorUseCase = container.resolve(CreateOperatorUseCase)

        const operator = await createOperatorUseCase.execute({name, email, cpf, password, matricula, phone, setor, available })

        delete operator.password

        return response.json(operator).send()

    }

}

export { CreateOperatorController } 