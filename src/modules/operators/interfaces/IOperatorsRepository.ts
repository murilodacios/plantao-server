import { ICreateOperatorDTO } from "../dtos/OperatorDTO";
import { Operator } from "../infra/typeorm/models/Operator";

interface IOperatorsRepository {
    create({name, email, cpf, password, matricula, phone, setor, available}: ICreateOperatorDTO): Promise<Operator>;
    findByEmail(email: string): Promise<Operator>;
    findById(id: string): Promise<Operator>;
    sendMeetingUrl(meeting_url: string, meeting_id: string): Promise<void>
    listOperators(): Promise<Operator[]>
    alterAvailable(id: string): Promise<Operator>
}

export { IOperatorsRepository } 