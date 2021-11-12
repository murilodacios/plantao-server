import { getRepository, Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";
import { Meeting } from "../../../../meetings/infra/typeorm/models/Meeting";
import { ICreateOperatorDTO } from "../../../dtos/OperatorDTO";
import { IOperatorsRepository } from "../../../interfaces/IOperatorsRepository";
import { Operator } from "../models/Operator";

class OperatorsRepository implements IOperatorsRepository {

    private operatorsRepository: Repository<Operator>
    private meetingsRepository: Repository<Meeting>

    constructor() {
        this.operatorsRepository = getRepository(Operator)
        this.meetingsRepository = getRepository(Meeting)
    }

    async alterAvailable(id: string): Promise<Operator> {
        const findOperator = await this.operatorsRepository.findOne(id)

        if(!findOperator) {
            throw new AppError("This operator does not exists")
        }

        const operator = await this.operatorsRepository.save({
            ...findOperator,
            available: !findOperator.available,
        })

        return operator
    }

    async listOperators(): Promise<Operator[]> {
        const findOperators = await this.operatorsRepository.find()

        if(!findOperators) {
            throw new AppError("Don't have any operators")
        }

        const operators = findOperators.map(operator => {
            return {
                id: operator.id,
                name: operator.name,
                email: operator.email,
                phone: operator.phone,
                available: operator.available,
                setor: operator.setor,
            }
        })

        //@ts-ignore
        return operators

    }

    async sendMeetingUrl(meeting_url: string, meeting_id: string): Promise<void> {
       
        const findMeeting = await this.meetingsRepository.findOne({
            where: {
                id: meeting_id,
            }
        })

        if(!findMeeting) {
            throw new AppError("Don't have meeting!")
        }

        await this.meetingsRepository.save({
            ...findMeeting,
            ticketUrl: meeting_url
        })

    }

    async findByEmail(email: string): Promise<Operator> {
        const operator = await this.operatorsRepository.findOne({email})

        if(!operator) {
            throw new AppError("Esse operador não existe")
        }

        return operator
    }

    async create({ name, email, cpf, password, matricula, phone, setor, available }: ICreateOperatorDTO): Promise<Operator> {
        const operator = this.operatorsRepository.create({
            name,
            email,
            cpf,
            password,
            matricula,
            phone,
            setor,
            available: false
        })

        const findOperator = await this.operatorsRepository.findOne({email})

        if (findOperator) {
            throw new AppError("Esse operador já existe")
        }

        const createdOperator = await this.operatorsRepository.save(operator)

        return createdOperator
    }

    async findById(id: string): Promise<Operator> {
        const operator = await this.operatorsRepository.findOne({id})

        if(!operator) {
            throw new AppError("This operator does not exists")
        }

        return operator

    }

}

export { OperatorsRepository } 