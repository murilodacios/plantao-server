import { compare } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IOperatorsRepository } from "../../interfaces/IOperatorsRepository";
import { sign } from 'jsonwebtoken'

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    token: string;
    name: string;
    email: string;
    operator_id: string;
}

@injectable()
class AuthenticateUserUseCase {

    constructor(
        @inject("OperatorsRepository")
        private operatorsRepository: IOperatorsRepository,
    ) {}

    async execute({email, password}: IRequest): Promise<IResponse> {

        //Operator

        const findOperator = await this.operatorsRepository.findByEmail(email)

        if(!findOperator) {
            throw new AppError('E-mail or password incorret')
        }

        //Password

        const passwordMatch = await compare(password, findOperator.password)

        if(!passwordMatch) {
            throw new AppError('E-mail or password incorret')
        }

        //Token

        const token = sign({}, "6565515b4a448c9369ec2d9ad8c8a7e7", {
            subject: findOperator.id,
            expiresIn: "999d"
        })

        const tokenReturn: IResponse = {
            token,
            name: findOperator.name,
            email: findOperator.email,
            operator_id: findOperator.id
        }

        return tokenReturn

    }

}

export { AuthenticateUserUseCase } 