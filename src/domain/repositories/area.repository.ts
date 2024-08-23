import { AreaEntity } from "../entities/area.entity";

export abstract class AreaRepository{

    abstract getAreas():Promise<AreaEntity[]>

    abstract getByIdAreas(id:number):Promise<AreaEntity>
    
}




