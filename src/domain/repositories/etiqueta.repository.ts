import { EtiquetaEntity } from "../entities/etiqueta.entitys";

export abstract class EtiquetaRepository {

    abstract getAllEtiquetasByArea(area:number):Promise<EtiquetaEntity[]>

    abstract getAllEtiquetasAsignadas(user:number):Promise<EtiquetaEntity[]>

}









