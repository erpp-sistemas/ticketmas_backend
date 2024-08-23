import { Router } from "express";
import { AreaDatasourceImpl } from "../../infrestructure/datasource/area.datasource.impl";
import { AreaRepositoryImpl } from "../../infrestructure/repositories/area.repository.impl";
import { AreasController } from "./controllers";
import manageErrors from "../../config/manageErrors";



export class AreasRoutes {

    static get routes():Router{
        
        const router=Router()

        const datasource= new AreaDatasourceImpl()
        const areaRepository= new AreaRepositoryImpl(datasource)
        const useController= new AreasController(areaRepository)

        router.get("/",manageErrors(useController.getAllAreas))

        router.get("/:id",manageErrors(useController.getAreaById))



        return router

    }

}








