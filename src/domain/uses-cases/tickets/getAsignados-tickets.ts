import { TicketEntiy } from "../../entities/ticket.entiy";
import { TicketRepository } from "../../repositories/ticket.repository";



interface GetAllTicketsAsignadosUseCase {
    excuse(user:number):Promise<TicketEntiy[]>
}


export  class GetAllTicketsAsignados implements GetAllTicketsAsignadosUseCase{

    constructor(
        public readonly useRepository:TicketRepository
    ){}

    excuse(user: number): Promise<TicketEntiy[]> {
           return this.useRepository.getAllTicketsAsignados(user)
    }

}




