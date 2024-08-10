import { Request, Response, NextFunction } from "express";


const manageErrors = (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) => 
   async(req: Request, res: Response, next: NextFunction):Promise<void>=> {
    try {
        console.log("Entramos al middleware");
        await fn(req, res, next)
    } catch (error:any) {
        console.log("Error en el middleware de manejo de errores:", error);
        res.status(error.status||400).json({ message: error?.message,error  });
    }
};




export default manageErrors;
