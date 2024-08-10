import { TicketEntiy } from "../../entities/ticket.entiy";
import { TicketRepository } from "../../repositories/ticket.repository";


interface GetByIdTicketUseCase{
    excuse(id:string):Promise<TicketEntiy>
}


export class GetByIdTicket implements GetByIdTicketUseCase{

    constructor(
        private readonly useRepository:TicketRepository
    ){}

    excuse(id: string): Promise<TicketEntiy> {
        return this.useRepository.getByIdTicket(id)
    }
}




