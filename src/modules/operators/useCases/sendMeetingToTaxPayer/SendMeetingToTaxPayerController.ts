import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendMeetingToTaxpayerUseCase } from "./SendMeetingToTaxPayerUseCase";

class SendMeetingToTaxPayerController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { meeting_id, meeting_url } = req.body

        const sendMeetingToTaxPayerUseCase = container.resolve(SendMeetingToTaxpayerUseCase)

        await sendMeetingToTaxPayerUseCase.execute(meeting_id, meeting_url)

        return res.status(200).json({success: "Success"})
    }

}

export { SendMeetingToTaxPayerController }