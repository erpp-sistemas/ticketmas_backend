import { EtiquetaEntity } from "../entities/etiqueta.entitys";

export abstract class EtiquetaDatasource {

    abstract getAllEtiquetasByArea(area:number):Promise<EtiquetaEntity[]>

    abstract getAllEtiquetasAsignadas(user:number):Promise<EtiquetaEntity[]>

}









