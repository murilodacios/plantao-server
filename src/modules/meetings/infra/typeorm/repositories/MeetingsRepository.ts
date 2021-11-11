import { getRepository, Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";

import { ICreateMeetingDTO } from "../../../dtos/IMeetingDTO";
import { IMeetingsRepository } from "../../../interfaces/IMeetingsRepository";
import { Meeting } from "../models/Meeting";

import { zonedTimeToUtc } from 'date-fns-tz';
import { io } from "../../../../../shared/infra/http/server";
import { Operator } from "../../../../operators/infra/typeorm/models/Operator";
import { TaxPayer } from "../../../../taxpayers/infra/typeorm/models/TaxPayer";

class MeetingsRepository implements IMeetingsRepository {

    private repository: Repository<Meeting>;
    private operatorsRepository: Repository<Operator>
    private taxpayersRepository: Repository<TaxPayer>

    constructor() {
        this.repository = getRepository(Meeting)
        this.taxpayersRepository = getRepository(TaxPayer)
        this.operatorsRepository = getRepository(Operator)
    }

    async listOneMeeting(id: string): Promise<Meeting> {
        const findMeeting  = await this.repository.findOne(id);

        if(!findMeeting) {
            throw new AppError("Meeting not found")
        }

        return findMeeting
    }

    async endMeeting(id: string): Promise<Meeting> {
        const findMeeting = await this.repository.findOne({
            where: {
                id
            }
        })

        if(!findMeeting) {
            throw new AppError("Don't have any meeting with this id")
        }

        if(findMeeting.isEndMeeting === true) {
            throw new AppError("This meeting already finished")
        }

        const meeting = await this.repository.save({
            ...findMeeting,
            endAt: new Date(),
            isEndMeeting: true
        })

        return meeting

    }

    async create({ ticketUrl, operator_id, description, taxpayer_id }: ICreateMeetingDTO): Promise<Meeting> {
        const createMeeting = this.repository.create({
            description,
            ticketUrl,
            operator_id,
            taxpayer_id,
            isEndMeeting: false,
            startAt: zonedTimeToUtc(new Date, 'America/Sao_Paulo')
        })

        const findOperator = await this.operatorsRepository.findOne({id: operator_id})

        if(!findOperator) {
            throw new AppError("This operator does not exits")
        }

        if(findOperator?.available === false) {
            throw new AppError("This operator does not available")
        }

        await this.operatorsRepository.save({
            ...findOperator,
            available: !findOperator?.available,
        })

        const meeting = await this.repository.save(createMeeting)

        return meeting

    }

    async listByOperator(id: string): Promise<Meeting[]> {
        const meetings = await this.repository.find({
            where: {
                operator_id: id,
            },
            order: {
                startAt: "DESC"
            },
            relations: ["taxpayer"]
        })

        if(!meetings) {
            throw new AppError("Don't have meetings for this operator")
        }

        return meetings 
    }

}

export { MeetingsRepository }