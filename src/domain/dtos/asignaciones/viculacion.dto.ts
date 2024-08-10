import { CustomError } from "../../errors"

interface DataViculacion {
    id: number
    activo?: boolean
    nombre:string,
    apellidos:string,
    foto:string
}


export class VinculacionDto implements DataViculacion {
    activo?: boolean | undefined
    id: number
    apellidos: string
    foto: string
    nombre: string

    constructor(data:DataViculacion){
        this.activo=data.activo
        this.id=data.id
        this.apellidos=data.apellidos
        this.nombre=data.nombre
        this.foto=data.foto
    }


    static create(data:DataViculacion):VinculacionDto{

        if(!data.id)throw CustomError.badRequest("(usuario_id ) viculacion_id is requerid ")

        return new VinculacionDto(data)
    }


}



