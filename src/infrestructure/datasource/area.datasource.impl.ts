import { prismaSer0 } from "../../config/db/conexion";
import { AreaDatasource } from "../../domain/datasources/area.datasource";
import { AreaEntity } from "../../domain/entities/area.entity";
import { CustomError } from "../../domain/errors";




export class AreaDatasourceImpl extends AreaDatasource{

    async getAreas(): Promise<AreaEntity[]> {
        const areas= await prismaSer0.areas.findMany({where:{activo:true}})

        return  areas.map(area=>AreaEntity.fromObjet(area)) 

    }   

    async getByIdAreas(id: number): Promise<AreaEntity> {
        const area= await prismaSer0.areas.findFirst({where:{activo:true,id}})
        if(!area)throw CustomError.notFound("no se encontro este item area id"+id)

        return AreaEntity.fromObjet(area) 

    }

}





