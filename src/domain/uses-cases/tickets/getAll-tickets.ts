import { TicketEntiy } from "../../entities/ticket.entiy";
import { TicketRepository } from "../../repositories/ticket.repository";



interface GetAllTicketsUseCase{
    excuse(user:number):Promise<TicketEntiy[]>
}



export  class GetAllTickets implements GetAllTicketsUseCase {

    constructor(
        private readonly useRepository:TicketRepository
    ){}

    excuse(user: number): Promise<TicketEntiy[]> {
        return this.useRepository.getAllTickets(user)
    }

}

