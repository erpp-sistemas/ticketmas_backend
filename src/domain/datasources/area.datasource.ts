import { AreaEntity } from "../entities/area.entity";

export abstract class AreaDatasource{

    abstract getAreas():Promise<AreaEntity[]>

    abstract getByIdAreas(id:number):Promise<AreaEntity>
    
}




