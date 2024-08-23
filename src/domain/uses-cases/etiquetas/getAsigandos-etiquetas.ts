import { EtiquetaDatasourceImple } from "../../../infrestructure/datasource/etiqueta.datasource.impl";
import { EtiquetaRepositoryImpl } from "../../../infrestructure/repositories/etiqueta.repository.impl";
import { EtiquetaEntity } from "../../entities/etiqueta.entitys";



interface GetAllAsigandosUseCase{
    excuse(user:number):Promise<EtiquetaEntity[]>
}


export class GetAllEtiquetasAsignadas implements GetAllAsigandosUseCase{

    constructor(
        private readonly useRepository:EtiquetaRepositoryImpl
    ){}

    excuse(user: number): Promise<EtiquetaEntity[]> {
        return this.useRepository.getAllEtiquetasAsignadas(user)
    }

}



