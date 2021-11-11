import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListOneMeetingUseCase } from "./listOneMeetingUseCase";

class ListOneMeetingController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const listOneMeetingUseCase = container.resolve(ListOneMeetingUseCase)

        const meetings = await listOneMeetingUseCase.execute(id)

        return res.json(meetings).send()

    }

}

export { ListOneMeetingController }