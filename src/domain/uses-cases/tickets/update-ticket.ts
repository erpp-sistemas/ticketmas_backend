import { UpdateTicketDto } from "../../dtos/tickets/updateTicket.dto";
import { TicketEntiy } from "../../entities/ticket.entiy";
import { TicketRepository } from "../../repositories/ticket.repository";



interface UpdateTicketUseCase{

    excuse(dto:UpdateTicketDto,ticket_id:string):Promise<TicketEntiy>

}

export class UpdateTicket implements UpdateTicketUseCase{

    constructor(
        private readonly useRepository:TicketRepository
    ){}

    excuse(dto: UpdateTicketDto,ticket_id:string): Promise<TicketEntiy> {
           return this.useRepository.editTicket(dto,ticket_id)
    }
}


