import { container } from "tsyringe";
import { MeetingsRepository } from "../../modules/meetings/infra/typeorm/repositories/MeetingsRepository";
import { IMeetingsRepository } from "../../modules/meetings/interfaces/IMeetingsRepository";
import { OperatorsRepository } from "../../modules/operators/infra/typeorm/repositories/OperatorsRepository";
import { IOperatorsRepository } from "../../modules/operators/interfaces/IOperatorsRepository";
import { TaxPayerRepository } from "../../modules/taxpayers/infra/typeorm/repositories/TaxPayerRepository";
import { ITaxPayerRepository } from "../../modules/taxpayers/interfaces/ITaxPayerRepository";

container.registerSingleton<IMeetingsRepository>(
    "MeetingsRepository",
    MeetingsRepository
)

container.registerSingleton<IOperatorsRepository>(
    "OperatorsRepository",
    OperatorsRepository
)


container.registerSingleton<ITaxPayerRepository>(
    "TaxPayerRepository",
    TaxPayerRepository
)