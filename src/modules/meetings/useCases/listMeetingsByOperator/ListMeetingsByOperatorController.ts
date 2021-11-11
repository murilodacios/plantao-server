import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMeetingsByOperatorUseCase } from "./ListMeetingsByOperatorUseCase";

class ListMeetingsByOperatorController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const listMeetingsByOperatorUseCase = container.resolve(ListMeetingsByOperatorUseCase)

        const meetings = await listMeetingsByOperatorUseCase.execute(id)

        return res.json(meetings)

    }

}

export { ListMeetingsByOperatorController }