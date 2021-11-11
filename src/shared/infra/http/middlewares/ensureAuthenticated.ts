import { NextFunction, Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { verify } from 'jsonwebtoken'
import { OperatorsRepository } from "../../../../modules/operators/infra/typeorm/repositories/OperatorsRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization

    if(!authHeader) {
        throw new AppError("Token missing")
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub: operator_id } = verify(token, "6565515b4a448c9369ec2d9ad8c8a7e7") as IPayload
   
        const operatorsRepository = new OperatorsRepository
        const operator = await operatorsRepository.findById(operator_id)

        if(!operator) {
            throw new AppError("Operator does not exists")
        }

        next()
    } catch {
        throw new Error("Invalid token")
    }

}