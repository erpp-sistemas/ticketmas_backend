import { AreaEntity } from "../../domain/entities/area.entity";
import { AreaRepository } from "../../domain/repositories/area.repository";
import { AreaDatasourceImpl } from "../datasource/area.datasource.impl";





export class AreaRepositoryImpl extends AreaRepository {

    constructor (
        private  datasource:AreaDatasourceImpl
    ){
        super()
    }

    getAreas(): Promise<AreaEntity[]> {
        return this.datasource.getAreas()
    }
    getByIdAreas(id: number): Promise<AreaEntity> {
        return this.datasource.getByIdAreas(id)
    }


}


