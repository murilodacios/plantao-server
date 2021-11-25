import { Request, Response } from "express"
import { container } from "tsyringe"
import { EndMeetingUseCase } from "./EndMeetingUseCase"

class EndMeetingController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.body

        const endMeetingUseCase = container.resolve(EndMeetingUseCase)

        const meeting = await endMeetingUseCase.execute(id)

        return res.json(meeting)

    }

}

export { EndMeetingController } 