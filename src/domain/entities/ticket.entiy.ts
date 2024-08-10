import formatDateText from "../../config/dateFormat"
import { CustomError } from "../errors"




interface TicketData{
    id:string
    prioridad:object
    fecha_inicio:string
    fecha_fin?:string
    etiqueta:object
    asunto:string
    descripcion?:string
    comentarios?:object
    archivos?:object
    asignaciones?:object
}


export class TicketEntiy implements TicketData {
    id: string
    prioridad: object
    fecha_fin?: string | undefined
    fecha_inicio: string
    etiqueta: object
    asunto: string
    descripcion?: string | undefined
    comentarios?: object | undefined
    archivos?: object | undefined
    asignaciones?: object | undefined

    constructor(data:TicketData){
        this.id=data.id
        this.prioridad=data.prioridad
        this.fecha_fin=data.fecha_fin
        this.fecha_inicio=data.fecha_inicio
        this.etiqueta=data.etiqueta
        this.asunto=data.asunto
        this.descripcion=data.descripcion
        this.comentarios=data.comentarios
        this.archivos=data.archivos
        this.asignaciones=data.asignaciones
    }

    static fromObject(ticket:Record<string,any>): TicketEntiy {


        if(!ticket.id)throw CustomError.badRequest("id is requerid ")
        if(!ticket.prioridad)throw CustomError.badRequest("prioridad is requerid ")
        if(!ticket.fecha_inicio)throw CustomError.badRequest("fecha_inicio is requerid ")
        if(!ticket.asunto)throw CustomError.badRequest("asunto is requerid ")
        if(!ticket.etiquetas)throw CustomError.badRequest("etiqueta reper is requerid ")

            let model:TicketData={
                id:ticket.id,
                prioridad:ticket.prioridad,
                fecha_inicio:formatDateText.createDateText(ticket.fecha_inicio),
                fecha_fin:ticket.fecha_fin?formatDateText.createDateText(ticket.fecha_fin):"",
                etiqueta:ticket.etiquetas,
                asunto:ticket.asunto,
                asignaciones:ticket.asignaciones||[],
            }

            if(ticket.archivos) model.archivos=ticket.archivos
            if(ticket.comentarios) model.comentarios=ticket.comentarios
            if(ticket.descripcion) model.descripcion=ticket.descripcion


        return new TicketEntiy(model) 
    }


}