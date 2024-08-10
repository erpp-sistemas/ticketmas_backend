
import { prismaTicketMas } from "../../config/db/conexion";
import { TicketDataSource } from "../../domain/datasources/ticket.datasource";
import { CreateAsignacionDto } from "../../domain/dtos/asignaciones/createAsignacion.dto";
import { CreateTicketDto } from "../../domain/dtos/tickets/createTicket.dto";
import { UpdateTicketDto } from "../../domain/dtos/tickets/updateTicket.dto";
import { TicketEntiy } from "../../domain/entities/ticket.entiy";
import { CustomError } from "../../domain/errors";




export class TicketDataSourceImpl extends TicketDataSource{

    async getByIdTicket(id: string): Promise<TicketEntiy> {
        const ticket = await prismaTicketMas.tickets.findFirst({
            where: {
              id,
            },
            include: {
              archivos: true,
              comentarios: true,
              estatus_ticket: true,
              etiquetas: true,
              listas: true,
              prioridad:true,
              asignaciones: {
                select: {
                  vinculacion_usuario: {
                    select: {
                      nombre: true,
                      apellidos: true,
                      foto: true,
                    },
                  },
                  asignador_usuario: {
                    select: {
                      nombre: true,
                      apellidos: true,
                      foto: true,
                    },
                  },
                },
              },
            },
          });

        if(!ticket)throw CustomError.internalServer("No se encontro el ticket ")

        return TicketEntiy.fromObject(ticket)
    }

  async  createTicket(dto: CreateTicketDto,user:number): Promise<TicketEntiy> {

        const ticket=await prismaTicketMas.tickets.create({data:dto})
        if(!ticket)throw CustomError.internalServer("No se pudo crear el ticket ")
        
        const dataAsignacion:CreateAsignacionDto={
          ticket_id:ticket.id,
          vinculacion_asignador_id:user,
          vinculacion_id:3,
        }

        const asignacion=await prismaTicketMas.asignaciones.create({data:dataAsignacion})
        if(!asignacion)throw CustomError.internalServer("No se pudo asignar el ticket al area correspondiente ")

        const newTicket=await this.getByIdTicket(ticket.id)

            return newTicket
        
    }

    async editTicket(dto: UpdateTicketDto,ticket_id:string): Promise<TicketEntiy> {
     
          
           const editTicket=await prismaTicketMas.tickets.updateMany({data:dto,where:{id:ticket_id}})
            if(!editTicket)throw CustomError.internalServer("No se pudo editar el ticket ")

            const ticket=await this.getByIdTicket(ticket_id)
           
            

            return ticket
    }

  
    async changeStatusTicket(id: string,status:number): Promise<void> {

        await prismaTicketMas.tickets.updateMany({data:{estatus_id:status},where:{id}})
       
    }

    async finalizarTicket(id: string): Promise<void> {
        await prismaTicketMas.tickets.updateMany({data:{estatus_id:3},where:{id}})
    }

    async getAllTicketsByIdEtiqueta(etiqueta_id: number,vinculacion_user:number): Promise<TicketEntiy[]> {
        const asignaciones = await prismaTicketMas.asignaciones.findMany({
            where: {
              OR: [
                { vinculacion_id: vinculacion_user },
                { vinculacion_asignador_id: vinculacion_user }
              ],
              tickets: {
                etiqueta_id
              }
            },
            include: {
              tickets: {
                include:{
                    etiquetas:true,
                    estatus_ticket:true,
                    prioridad:true,
                },
                select:{
                  asignaciones:true,
                  estatus_ticket:true,
                  asunto:true,
                  id:true,
                  etiquetas:true,
                  prioridad:true
                }
              }
            }
          });
          
          

        return asignaciones.map(tig=>TicketEntiy.fromObject(tig.tickets))

    }



    async getAllTickets(vinculacion_user:number): Promise<TicketEntiy[]> {

      const asignaciones = await prismaTicketMas.asignaciones.findMany({
        where: {
          OR: [
            { vinculacion_id: vinculacion_user },
            { vinculacion_asignador_id: vinculacion_user }
          ],
        },
        include: {
          tickets: {
            select: {
              fecha_inicio: true,
              fecha_fin: true,
              prioridad: true,
              estatus_ticket: true,
              etiquetas: true,
              asunto: true,
              id:true,
              asignaciones: {
                select: {
                  vinculacion_usuario: {
                    select: {
                      nombre: true,
                      apellidos: true,
                      foto: true,
                    },
                  },
                  asignador_usuario: {
                    select: {
                      nombre: true,
                      apellidos: true,
                      foto: true,
                    },
                  },
                },
              },
            }
          }
        }
      });
      console.log(asignaciones);
      
          if(!asignaciones.length)throw CustomError.notFound(" no tickets found ")
          

        return asignaciones.map(tig=>TicketEntiy.fromObject(tig.tickets))

    }
    async getAllTicketsAsignados(vinculacion_user: number): Promise<TicketEntiy[]> {
        const asignaciones = await prismaTicketMas.asignaciones.findMany({
            where: {
              vinculacion_id: vinculacion_user 
            },
            include: {
              tickets: {
                include:{
                    etiquetas:true,
                    estatus_ticket:true,
                    prioridad:true,
                }
              }
            }
          });

        return asignaciones.map(tig=>TicketEntiy.fromObject(tig.tickets))
    }


    async getAllTicketsByStatus(vinculacion_user:number,status:number): Promise<TicketEntiy[]> {
        const asignaciones = await prismaTicketMas.asignaciones.findMany({
            where: {
              OR: [
                { vinculacion_id: vinculacion_user },
                { vinculacion_asignador_id: vinculacion_user }
              ],
              tickets:{
                estatus_id:status
              }
            },
            include: {
              tickets: {
                include:{
                    etiquetas:true,
                    estatus_ticket:true,
                    prioridad:true,
                }
              }
            }
          });

        return asignaciones.map(tig=>TicketEntiy.fromObject(tig.tickets))
    }

    async getAllTicketsGrupo(vinculacion_user: number): Promise<TicketEntiy[]> {
        
        const asignaciones = await prismaTicketMas.asignaciones.findMany({
            where: {
              OR: [
                { vinculacion_id: vinculacion_user },
                { vinculacion_asignador_id: vinculacion_user }
              ]
            },
            include: {
              asignador_usuario:true,
              vinculacion_usuario:true,
              tickets: {
                include:{
                    etiquetas:true,
                    estatus_ticket:true,
                    prioridad:true,
                }
              }
            }
          });

          console.log(asignaciones);
          

        return asignaciones.map(tig=>TicketEntiy.fromObject(tig.tickets))

    }

  


}