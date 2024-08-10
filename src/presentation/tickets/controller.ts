import { Request, Response } from "express";
import { CreateTicketDto } from "../../domain/dtos/tickets/createTicket.dto";
import { CreateTicket } from "../../domain/uses-cases/tickets/create-ticket";
import { TicketRepository } from "../../domain/repositories/ticket.repository";
import { UpdateTicketDto } from "../../domain/dtos/tickets/updateTicket.dto";
import { UpdateTicket } from "../../domain/uses-cases/tickets/update-ticket";
import { GetByIdTicket } from "../../domain/uses-cases/tickets/getById-ticket";
import { ChangeSatatusTicket } from "../../domain/uses-cases/tickets/changeStatus-ticket";
import { GetAllTickets } from "../../domain/uses-cases/tickets/getAll-tickets";
import { GetAllByStatusTickets } from "../../domain/uses-cases/tickets/getAllByStatus-tickets";
import { GetAllTicketsAsignados } from "../../domain/uses-cases/tickets/getAsignados-tickets";
import { JwtAdapter } from "../../config/jwt.adapter";


export class TicketsControllers  {

    constructor(
        public useRepository:TicketRepository
    ){}

    createTicket=async(req:Request,res:Response):Promise<void>=>{

        const token = await JwtAdapter.validateToken(req.cookies.token);

        const ticketData = CreateTicketDto.create(req.body)

        const ticket=await new CreateTicket(this.useRepository).execute(ticketData,token.id)

        res.status(201).json(ticket)

    }

    updateTicket=async (req:Request,res:Response):Promise<void>=>{
        const ticket_id=req.params.id

        const ticketData=UpdateTicketDto.create(req.body,ticket_id)

        const ticket=await new UpdateTicket(this.useRepository).excuse(ticketData,ticket_id)

        res.status(200).json(ticket)
    }

    getByIdTicket=async (req:Request,res:Response):Promise<void>=>{

        const idTicket=req.params.id

        const ticket=await new GetByIdTicket(this.useRepository).excuse(idTicket)

        res.status(200).json(ticket)

    }


    pauseTicket=async (req:Request,res:Response):Promise<void>=>{

        const idTicket=req.params.id
        const idStatus=2
        await new ChangeSatatusTicket(this.useRepository).excuse(idTicket,idStatus) 

        res.status(202).json({message:"Se Pauso Correctamente el ticket"})

    }

    resumeTicket=async (req:Request,res:Response):Promise<void>=>{

        const idTicket=req.params.id
        const idStatus=1
        await new ChangeSatatusTicket(this.useRepository).excuse(idTicket,idStatus) 

        res.status(202).json({message:"Se reanudo Correctamente el ticket"})

    }

    finishTicket=async (req:Request,res:Response):Promise<void>=>{

        const idTicket=req.params.id
        const idStatus=3
        await new ChangeSatatusTicket(this.useRepository).excuse(idTicket,idStatus) 

        res.status(202).json({message:"Se finalizo Correctamente el ticket"})

    }


    filterLabelTicket=async (req:Request,res:Response):Promise<void>=>{

        const etiqueta=req.params.etiqueta
        //! Pendiente

    }

    getAllTickets=async (req:Request,res:Response):Promise<void>=>{

        const token = await JwtAdapter.validateToken(req.cookies.token);
                
        const tickets=await new GetAllTickets(this.useRepository).excuse(token.id)
        
        res.status(200).json(tickets)
    }


    getAllPauseTickets=async (req:Request,res:Response):Promise<void>=>{

        const token = await JwtAdapter.validateToken(req.cookies.token);
        const statusId=3
    
        const tickets=await new GetAllByStatusTickets(this.useRepository).excuse(token.id,statusId)

        res.status(200).json(tickets)
    }

    getAllFinishedTickets=async (req:Request,res:Response):Promise<void>=>{

        const token = await JwtAdapter.validateToken(req.cookies.token);
        const statusId=3
      
        const tickets=await new GetAllByStatusTickets(this.useRepository).excuse(token.id,statusId)

        res.status(200).json(tickets)
    }

    getAllAsignadosTickets=async (req:Request,res:Response):Promise<void>=>{

        const token = await JwtAdapter.validateToken(req.cookies.token);

        const tickets=await new GetAllTicketsAsignados(this.useRepository).excuse(token.id)

        res.status(200).json(tickets)
    }






}




