import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { TicketsRoutes } from "./tickets/routes";



export class AppRoutes {

    static get routes(): Router {

        const router = Router();

        router.use('/auth',AuthRoutes.routes)
        router.use("/tickets",TicketsRoutes.routes)
      
        router.use('/',((req,res)=>{
                res.status(200).json({message:"SERVER MOUNT SUCCESS FULL"})
        }))

        return router;

    }
}


