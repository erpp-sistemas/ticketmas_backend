import { prismaTicketMas } from "../../config/db/conexion";
import { EtiquetaDatasource } from "../../domain/datasources/etiqueta.datasource";
import { EtiquetaEntity } from "../../domain/entities/etiqueta.entitys";
import { CustomError } from "../../domain/errors";


export class EtiquetaDatasourceImple  extends EtiquetaDatasource{

       async getAllEtiquetasAsignadas(user: number): Promise<EtiquetaEntity[]> {
            
            const etiquetas=await prismaTicketMas.asignaciones_etiquetas.findMany({where:{vinculacion_id:user}})
            if(!etiquetas.length)throw CustomError.notFound("No tiene etiquetas asignadas")
            return etiquetas.map(etiqueta=>EtiquetaEntity.fromObjet(etiqueta))

        }

        async getAllEtiquetasByArea(area: number): Promise<EtiquetaEntity[]> {
            const etiquetas=await prismaTicketMas.etiquetas.findMany({where:{area_id:area}})
            if(!etiquetas.length)throw CustomError.notFound("No tiene etiquetas asignadas")
            return etiquetas.map(etiqueta=>EtiquetaEntity.fromObjet(etiqueta))

        }

}


