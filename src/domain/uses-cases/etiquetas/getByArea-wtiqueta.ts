import { EtiquetaRepositoryImpl } from "../../../infrestructure/repositories/etiqueta.repository.impl"
import { EtiquetaEntity } from "../../entities/etiqueta.entitys"



interface GetByAreaUseCase{
    excuse(area:number):Promise<EtiquetaEntity[]>
}


export class GetByAreaEtiqueta implements GetByAreaUseCase{

    constructor(
        private readonly useRepository:EtiquetaRepositoryImpl
    ){}

    excuse(area: number): Promise<EtiquetaEntity[]> {
        return this.useRepository.getAllEtiquetasByArea(area)
    }

}



