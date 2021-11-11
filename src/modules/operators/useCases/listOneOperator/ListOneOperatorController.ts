import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListOneOperatorUseCase } from "./ListOneOperatorUseCase";

class ListOneOperatorController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const listOneOperatorUseCase = container.resolve(ListOneOperatorUseCase)

        const operator = await listOneOperatorUseCase.execute(id)

        //@ts-ignore
        delete operator.password

        return res.json(operator)

    }

}

export { ListOneOperatorController }