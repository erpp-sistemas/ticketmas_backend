import formatDateText from "../../../config/dateFormat"
import { CustomError } from "../../errors"


interface TicketData{
    id:string
    prioridad_id:number
    fecha_inicio?:Date|string
    fecha_fin?:Date|string
    etiqueta_id:number
    asunto:string
    descripcion?:string
}

export class UpdateTicketDto implements TicketData{
    id: string
    prioridad_id: number
    fecha_fin?: Date | undefined|string
    fecha_inicio?: Date|string|undefined
    etiqueta_id: number
    asunto: string
    descripcion?: string | undefined


    constructor(data:TicketData){

        this.id=data.id
        this.prioridad_id=data.prioridad_id
        this.fecha_fin=data.fecha_fin||formatDateText.createDateBack(data.fecha_fin)
        this.fecha_inicio=formatDateText.createDateBack(data.fecha_inicio)
        this.etiqueta_id=data.etiqueta_id
        this.asunto=data.asunto
        this.descripcion=data.descripcion
   
    }

    static create(data:TicketData,ticket_id:string):UpdateTicketDto{

        const {prioridad_id,fecha_inicio,asunto,etiqueta_id} = data;
      
        

        if(!ticket_id)throw CustomError.badRequest("ticket_id is requerid or no is number ")
        if(!prioridad_id||typeof prioridad_id !== "number")throw CustomError.badRequest("prioridad_id is requerid or no is number ")
        if(!fecha_inicio)throw CustomError.badRequest("fecha_inicio is requerid ")
        if(!asunto)throw CustomError.badRequest("asunto is requerid ")
        if(!etiqueta_id||typeof etiqueta_id !== "number")throw CustomError.badRequest("etiqueta is requerid or no is number ")

            

        return new UpdateTicketDto({...data,id:ticket_id})
    }


}



