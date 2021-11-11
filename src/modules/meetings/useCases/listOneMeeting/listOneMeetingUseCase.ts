import { inject, injectable } from "tsyringe";
import { Meeting } from "../../infra/typeorm/models/Meeting";
import { IMeetingsRepository } from "../../interfaces/IMeetingsRepository";

@injectable()
class ListOneMeetingUseCase {

    constructor(
        @inject("MeetingsRepository")
        private meetingsRepository: IMeetingsRepository
    ) {}

    async execute(id: string): Promise<Meeting> {

        const meeting = await this.meetingsRepository.listOneMeeting(id)

        return meeting

    }

}

export { ListOneMeetingUseCase }