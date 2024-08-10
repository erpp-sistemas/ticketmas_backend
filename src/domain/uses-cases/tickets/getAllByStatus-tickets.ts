import { TicketEntiy } from "../../entities/ticket.entiy";
import { TicketRepository } from "../../repositories/ticket.repository";




interface GetAllByStatusTicketsUseCase {
    excuse(user:number,status:number):Promise<TicketEntiy[]>
}




export class GetAllByStatusTickets implements GetAllByStatusTicketsUseCase{

    constructor(
        private readonly useRepository:TicketRepository 
    ){}


    excuse(user:number,status: number): Promise<TicketEntiy[]> {
        return this.useRepository.getAllTicketsByStatus(user, status)
    }
}













