import { CreateTicketDto } from "../../domain/dtos/tickets/createTicket.dto";
import { UpdateTicketDto } from "../../domain/dtos/tickets/updateTicket.dto";
import { TicketEntiy } from "../../domain/entities/ticket.entiy";
import { TicketRepository } from "../../domain/repositories/ticket.repository";


export  class TicketRepositoryImpl extends TicketRepository{

    constructor(
        private datasource:TicketRepository
    ){
        super()
    }


    createTicket(dto: CreateTicketDto,user:number): Promise<TicketEntiy> {
        return this.datasource.createTicket(dto,user)
    }
    editTicket(dto: UpdateTicketDto,ticket_id:string): Promise<TicketEntiy> {
        return this.datasource.editTicket(dto,ticket_id)
    }
    getByIdTicket(id: string): Promise<TicketEntiy> {
        return this.datasource.getByIdTicket(id)
    }
    changeStatusTicket(id: string, status: number): Promise<void> {
       return this.datasource.changeStatusTicket(id,status)
    }
    finalizarTicket(id: string): Promise<void> {
      return this.finalizarTicket(id)
    }
    getAllTicketsByIdEtiqueta(etiqueta_id: number, vinculacion_user: number): Promise<TicketEntiy[]> {
        return this.datasource.getAllTicketsByIdEtiqueta(etiqueta_id,vinculacion_user)
    }
    getAllTickets(vinculacion_user: number): Promise<TicketEntiy[]> {
        return this.datasource.getAllTickets(vinculacion_user)
    }
    getAllTicketsByStatus(vinculacion_user: number, status: number): Promise<TicketEntiy[]> {
        return this.getAllTicketsByStatus(vinculacion_user,status)
    }
    getAllTicketsAsignados(vinculacion_user: number): Promise<TicketEntiy[]> {
        return this.getAllTicketsAsignados(vinculacion_user)
    }
    getAllTicketsGrupo(vinculacion_user: number): Promise<TicketEntiy[]> {
        return this.getAllTicketsGrupo(vinculacion_user)
    }

    


}
