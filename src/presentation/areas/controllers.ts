import { Request, Response } from "express";
import { AreaRepositoryImpl } from "../../infrestructure/repositories/area.repository.impl";
import { JwtAdapter } from "../../config/jwt.adapter";
import { GetAllAreas } from "../../domain/uses-cases/areas/getAll-areas";
import { GetByIdArea } from "../../domain/uses-cases/areas/getById-Area";




export class AreasController {

    constructor(
        public repository:AreaRepositoryImpl
    ){}


    getAllAreas=async(req:Request,res:Response):Promise<void>=>{
        console.log("holaaaaaa");
        console.log(req.cookies.token);

       await JwtAdapter.validateToken(req.cookies.token )

        const areas= await new GetAllAreas(this.repository).excuse()
        
        res.status(200).json(areas)
        
    }


    getAreaById=async(req:Request,res:Response):Promise<void>=>{
        
        await JwtAdapter.validateToken(req.cookies.token)
        const id=Number(req.params.id)
        
        const areas= await new GetByIdArea(this.repository).excuse(id)
        
        res.status(200).json(areas)

    }


}















