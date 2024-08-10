import { TicketRepository } from "../../repositories/ticket.repository";



interface ChangeStatusTicketUseCase{

    excuse(idTicket:string,status:number):Promise<void>

}



export class ChangeSatatusTicket implements ChangeStatusTicketUseCase {

    constructor(
        private readonly useRepository:TicketRepository
    ){}

    async excuse(idTicket: string, status: number): Promise<void> {
        this.useRepository.changeStatusTicket(idTicket,status)
    }

}


