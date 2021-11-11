import { inject, injectable } from "tsyringe";
import { Meeting } from "../../infra/typeorm/models/Meeting";
import { IMeetingsRepository } from "../../interfaces/IMeetingsRepository";

@injectable()
class ListMeetingsByOperatorUseCase {

    constructor(
        @inject("MeetingsRepository")
        private meetingsRepository: IMeetingsRepository
    ) {}

    async execute(id: string): Promise<Meeting[]> {

        const meetings = await this.meetingsRepository.listByOperator(id)

        return meetings

    }

}

export { ListMeetingsByOperatorUseCase }