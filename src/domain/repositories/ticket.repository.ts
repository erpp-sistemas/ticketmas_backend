import { CreateTicketDto } from "../dtos/tickets/createTicket.dto";
import { UpdateTicketDto } from "../dtos/tickets/updateTicket.dto";
import { TicketEntiy } from "../entities/ticket.entiy";



export abstract class TicketRepository{

    abstract createTicket(dto:CreateTicketDto,user:number):Promise<TicketEntiy>

    abstract editTicket(dto:UpdateTicketDto,ticket_id:string):Promise<TicketEntiy>

    abstract getByIdTicket(id:string):Promise<TicketEntiy>
    
    abstract changeStatusTicket(id:string,status:number):Promise<void>

    abstract finalizarTicket(id:string):Promise<void>

    abstract getAllTicketsByIdEtiqueta(etiqueta_id:number,vinculacion_user:number):Promise<TicketEntiy[]>

    abstract getAllTickets(vinculacion_user:number):Promise<TicketEntiy[]>
    
    abstract getAllTicketsByStatus(vinculacion_user:number,status:number):Promise<TicketEntiy[]>

    abstract getAllTicketsAsignados(vinculacion_user:number):Promise<TicketEntiy[]>

    abstract getAllTicketsGrupo(vinculacion_user:number):Promise<TicketEntiy[]>

}
