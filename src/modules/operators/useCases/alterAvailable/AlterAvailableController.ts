import { Request, Response } from "express";
import { container } from "tsyringe";
import { AlterAvailableUseCase } from "./AlterAvailableUseCase";

class AlterAvailableController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const alterAvailableUseCase = container.resolve(AlterAvailableUseCase)

        const operator = await alterAvailableUseCase.execute(id)

        return res.json(operator)

    }

}

export { AlterAvailableController }