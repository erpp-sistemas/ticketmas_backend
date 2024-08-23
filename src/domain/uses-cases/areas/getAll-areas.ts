import { AreaRepositoryImpl } from "../../../infrestructure/repositories/area.repository.impl";
import { AreaEntity } from "../../entities/area.entity";


interface getAllAreasUseCase{
    excuse():Promise<AreaEntity[]>
}



export class GetAllAreas implements getAllAreasUseCase{

    constructor(
        private readonly useRepository:AreaRepositoryImpl
    ){}

    excuse(): Promise<AreaEntity[]> {
        return this.useRepository.getAreas()
    }
}



