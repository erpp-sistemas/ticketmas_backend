import { CreateTicketDto } from "../../dtos/tickets/createTicket.dto";
import { TicketEntiy } from "../../entities/ticket.entiy";
import { TicketRepository } from "../../repositories/ticket.repository";



interface CreateTicketUseCase{
    execute(dto: CreateTicketDto,user:number):Promise<TicketEntiy>
}


export class CreateTicket  implements CreateTicketUseCase{

    constructor(
        private readonly ticketRepository:TicketRepository
    ){}

    execute(dto: CreateTicketDto,user:number): Promise<TicketEntiy> {
        return this.ticketRepository.createTicket(dto,user)
    }

}











