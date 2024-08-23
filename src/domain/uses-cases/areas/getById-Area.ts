import { AreaRepositoryImpl } from "../../../infrestructure/repositories/area.repository.impl";
import { AreaEntity } from "../../entities/area.entity";



interface GetByIDAreaUSeCase{
    excuse(id:number):Promise<AreaEntity>
}



export class GetByIdArea implements GetByIDAreaUSeCase{

    constructor(
        private readonly useRepository:AreaRepositoryImpl
    ){}

    excuse(id: number): Promise<AreaEntity> {
        
        return this.useRepository.getByIdAreas(id) 

    }

}


