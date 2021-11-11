import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListOperatorsUseCase } from "./ListOperatorsUseCase";

class ListOperatorsController {

    async handle(req: Request, res: Response): Promise<Response> {

        const listOperatorsUseCase = container.resolve(ListOperatorsUseCase)

        const operators = await listOperatorsUseCase.execute()
      
        return res.json(operators)

    }

}

export { ListOperatorsController } 