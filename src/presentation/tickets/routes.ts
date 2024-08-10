import { Router } from "express";
import { TicketDataSourceImpl } from "../../infrestructure/datasource/ticket.datasource.impl";
import { TicketsControllers } from "./controller";
import { TicketRepositoryImpl } from "../../infrestructure/repositories/tickets.repository.impl";
import manageErrors from "../../config/manageErrors";




export class TicketsRoutes{

    static get routes():Router{
        

        const router=Router()

        const datasource= new TicketDataSourceImpl()
        const useRepository=new TicketRepositoryImpl(datasource)
        const ticketsController=new TicketsControllers(useRepository)
        //* Obtener los tickets
        router.get('/',manageErrors(ticketsController.getAllTickets))
        //* Crear ticket
        router.post('/',manageErrors(ticketsController.createTicket))
        //*Editar ticket por id
        router.put('/:id',manageErrors(ticketsController.updateTicket))
        //*Obtener ticket por id
        router.get('/:id',manageErrors(ticketsController.getByIdTicket))
        //* Pausar ticket por id
        router.get('/pausa/:id',manageErrors(ticketsController.pauseTicket))
        //* Reanudar ticket por id
        router.get('/reanudar/:id',manageErrors(ticketsController.resumeTicket))
        //*Finalizar TIcket
        router.get('/finalizar/:id',manageErrors(ticketsController.finishTicket))
        //*Filtrar ticket por etiqueta
        router.get('/etiqueta/:etiqueta',manageErrors(ticketsController.filterLabelTicket))


       
        router.get('/allPausados/',manageErrors(ticketsController.getAllPauseTickets))
        router.get('/allAsignados/',manageErrors(ticketsController.getAllAsignadosTickets))
        router.get('/allGrupo/')
        router.get('/allFinalizados/',manageErrors(ticketsController.getAllFinishedTickets))


        return router

    }

}