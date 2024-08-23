import { CustomError } from "../errors"



interface Area {
    id:number
    nombre:string
}


export class AreaEntity implements Area{
    id: number
    nombre: string  

    constructor(data:Area){
        this.id=data.id
        this.nombre=data.nombre
    }

    static fromObjet(data:Record<string,any>):AreaEntity{

        if(!data.id|| typeof data.id != "number") throw CustomError.badRequest("id is requerid or no is a number")
        if(!data.area) throw CustomError.badRequest("nombre is requerid")
        const model={
            id:data.id,
            nombre:data.area
        }

        return new AreaEntity(model)
    }


}




