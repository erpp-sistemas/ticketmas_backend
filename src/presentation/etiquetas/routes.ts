import { Router } from "express";
import { EtiquetaDatasourceImple } from "../../infrestructure/datasource/etiqueta.datasource.impl";
import { EtiquetaRepositoryImpl } from "../../infrestructure/repositories/etiqueta.repository.impl";
import { EtiquetaController } from "./controller";
import manageErrors from "../../config/manageErrors";




export class EtiquetasRoutes {

    static get routes():Router{
        const routes=Router()

        const datasource=new EtiquetaDatasourceImple()
        const repository=new EtiquetaRepositoryImpl(datasource)
        const controllers=new EtiquetaController(repository)


        routes.get("/asignados",manageErrors(controllers.getAllAsignadas))

        routes.get("/area/:area_id",manageErrors(controllers.getAllByArea))

        return routes
        
    }

}







