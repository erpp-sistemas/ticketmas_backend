import { CustomError } from "../../errors"
import {v4 as uuidv4} from 'uuid'

interface TicketData {
    prioridad_id: number;
    fecha_inicio: string | Date;
    etiqueta_id: number;
    asunto: string;
    descripcion: string;
    estatus_id: number;
    area_id: number;
    // asignaciones: AsignacionData[]; 
}


export class CreateTicketDto implements TicketData {
    id: string;
    prioridad_id: number;
    fecha_inicio: string | Date;
    etiqueta_id: number;
    asunto: string;
    descripcion: string;
    area_id: number;
    estatus_id: number;

    constructor(data: TicketData ) {
        const [id] = uuidv4().split("-");
        this.id = id;
        this.prioridad_id = data.prioridad_id;
        this.fecha_inicio = new Date();
        this.etiqueta_id = data.etiqueta_id;
        this.asunto = data.asunto;
        this.descripcion = data.descripcion;
        this.area_id = data.area_id;
        this.estatus_id = data.estatus_id;
    }

    static create(ticket: TicketData ): CreateTicketDto {
        const { prioridad_id, estatus_id, asunto, etiqueta_id, descripcion, area_id } = ticket;

        if (!area_id || typeof area_id !== "number") throw CustomError.badRequest("area_id is required or not a number");
        if (!prioridad_id || typeof prioridad_id !== "number") throw CustomError.badRequest("prioridad_id is required or not a number");
        if (!descripcion) throw CustomError.badRequest("descripcion is required");
        if (!asunto) throw CustomError.badRequest("asunto is required");
        if (!etiqueta_id || typeof etiqueta_id !== "number") throw CustomError.badRequest("etiqueta_id is required or not a number");
        if (!estatus_id || typeof estatus_id !== "number") throw CustomError.badRequest("estatus_id is required or not a number");
        

        return new CreateTicketDto(ticket);
    }
}




