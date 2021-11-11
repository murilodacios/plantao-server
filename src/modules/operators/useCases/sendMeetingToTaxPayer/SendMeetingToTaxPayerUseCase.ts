import { inject, injectable } from "tsyringe";
import { IOperatorsRepository } from "../../interfaces/IOperatorsRepository";

@injectable()
class SendMeetingToTaxpayerUseCase {
    
    constructor(
        @inject("OperatorsRepository")
        private operatorsRepository: IOperatorsRepository
    ) {}

    async execute(meeting_id: string, meeting_url: string): Promise<void> {

        await this.operatorsRepository.sendMeetingUrl(meeting_url, meeting_id)

    }
    
}

export { SendMeetingToTaxpayerUseCase }