import { CustomError } from "../errors"



interface Etiqueta {
    id:number
    nombre:string
    color:string
    area:number
}


export class EtiquetaEntity implements Etiqueta{
    area: number
    color: string
    id: number
    nombre: string


    constructor(data:Etiqueta){
        this.area=data.area
        this.id=data.id
        this.nombre=data.nombre
        this.color=data.color
    }

    static fromObjet(data:Record<string,any>):EtiquetaEntity{

        if(!data.id || typeof data.id !== "number") throw CustomError.badRequest("id is requerid or not is a number")
        if(!data.nombre_etiqueta) throw CustomError.badRequest("nombre_etiqueta is requerid")
        if(!data.color) throw CustomError.badRequest("color is requerid")
        if(!data.area_id || typeof data.area_id !== "number") throw CustomError.badRequest("area_id is requerid")

        const model:Etiqueta ={
            id:data.id,
            nombre:data.nombre_etiqueta,
            color:data.color,
            area:data.area_id
        }

        return new EtiquetaEntity(model)
    }



}




