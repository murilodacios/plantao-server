import { inject, injectable } from "tsyringe";
import { ICreateMeetingDTO } from "../../dtos/IMeetingDTO";
import { Meeting } from "../../infra/typeorm/models/Meeting";
import { IMeetingsRepository } from "../../interfaces/IMeetingsRepository";

@injectable()
class CreateMeetingUseCase {

    constructor (
        @inject("MeetingsRepository")
        private meetingsRepository: IMeetingsRepository,
    ) {}

    async execute({ticketUrl, operator_id, taxpayer_id, description}: ICreateMeetingDTO): Promise<Meeting> {

        const meeting = await this.meetingsRepository.create({ticketUrl, operator_id, taxpayer_id, description})

        return meeting

    }

}

export { CreateMeetingUseCase }