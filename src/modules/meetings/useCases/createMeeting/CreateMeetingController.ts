import { Request, Response } from "express";
import { container } from "tsyringe";
import { io } from "../../../../shared/infra/http/server";
import { CreateMeetingUseCase } from "./CreateMeetingUseCase";

class CreateMeetingController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { ticketUrl, operator_id, taxpayer_id, description } = req.body

        const createMeetingUseCase = container.resolve(CreateMeetingUseCase)

        const meeting = await createMeetingUseCase.execute({ticketUrl, operator_id, taxpayer_id, description})

        return res.json(meeting)

    }

}

export { CreateMeetingController }