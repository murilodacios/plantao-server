import { ICreateMeetingDTO } from "../dtos/IMeetingDTO";
import { Meeting } from "../infra/typeorm/models/Meeting";

interface IMeetingsRepository {
    create({ticketUrl, operator_id, description, taxpayer_id} : ICreateMeetingDTO): Promise<Meeting>
    listByOperator(id: string): Promise<Meeting[]>
    endMeeting(id: string): Promise<Meeting>
    listOneMeeting(id: string): Promise<Meeting>
}

export { IMeetingsRepository } 