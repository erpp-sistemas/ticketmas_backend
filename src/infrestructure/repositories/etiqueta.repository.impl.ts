import { EtiquetaEntity } from "../../domain/entities/etiqueta.entitys";
import { EtiquetaRepository } from "../../domain/repositories/etiqueta.repository";
import { EtiquetaDatasourceImple } from "../datasource/etiqueta.datasource.impl";



export class EtiquetaRepositoryImpl extends EtiquetaRepository {

    constructor (
        private datasource:EtiquetaDatasourceImple
    ){ super()}


    getAllEtiquetasAsignadas(user: number): Promise<EtiquetaEntity[]> {
        return this.datasource.getAllEtiquetasAsignadas(user)
    }

    getAllEtiquetasByArea(area: number): Promise<EtiquetaEntity[]> {
        return this.datasource.getAllEtiquetasByArea(area)
    }



}





