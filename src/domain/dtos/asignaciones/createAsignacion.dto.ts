import { CustomError } from "../../errors";

interface AsignacionCreate{
    vinculacion_id:number
    vinculacion_asignador_id:number
    ticket_id:string
}



export class CreateAsignacionDto implements AsignacionCreate {
    created_at?: string | Date;
    ticket_id: string ;
    vinculacion_asignador_id: number;
    vinculacion_id: number;


    constructor(asignacion:AsignacionCreate){
        this.ticket_id=asignacion.ticket_id
        this.vinculacion_asignador_id=asignacion.vinculacion_asignador_id
        this.vinculacion_id=asignacion.vinculacion_id
        this.created_at=new Date()
    }

    static create(data:AsignacionCreate):CreateAsignacionDto{

        const {vinculacion_asignador_id,vinculacion_id}=data
            if(vinculacion_asignador_id)throw CustomError.badRequest("vinculacion_asignador_id  is requerid ")
            if(vinculacion_id)throw CustomError.badRequest("vinculacion_id  is requerid ")

        return new CreateAsignacionDto(data)
    }


}


