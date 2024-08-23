import { Request, Response } from "express";
import { EtiquetaRepository } from "../../domain/repositories/etiqueta.repository";
import { JwtAdapter } from "../../config/jwt.adapter";
import { GetAllEtiquetasAsignadas } from "../../domain/uses-cases/etiquetas/getAsigandos-etiquetas";
import { GetByAreaEtiqueta } from "../../domain/uses-cases/etiquetas/getByArea-wtiqueta";
import { EtiquetaRepositoryImpl } from "../../infrestructure/repositories/etiqueta.repository.impl";




export class EtiquetaController {

    constructor(
        public readonly useRepository:EtiquetaRepositoryImpl
    ){}

    getAllAsignadas=async(req:Request,res:Response):Promise<void>=>{
        const user=Number((await JwtAdapter.validateToken(req.cookies.token)).id)

        const etiquetas=await new GetAllEtiquetasAsignadas(this.useRepository).excuse(user)

        res.status(200).json(etiquetas) 

    }

    getAllByArea=async(req:Request,res:Response):Promise<void>=>{
        const area=Number(req.params.area_id)

        const etiquetas=await new GetByAreaEtiqueta(this.useRepository).excuse(area)

        res.status(200).json(etiquetas)

    }


}