import { Router } from "express";
import { AuthController } from "./controllers";
import { UserDatasourceImpl } from "../../infrestructure/datasource/user.datasource.impl";
import { UserRepositoryImpl } from "../../infrestructure/repositories/user.repository.impl";
import manageErrors from "../../config/manageErrors";




export class AuthRoutes {


    static get routes(): Router {

        const router = Router();

        // todo implementar datasource y repository
        const datasource = new UserDatasourceImpl();
        const userRepository = new UserRepositoryImpl(datasource)
        const userController = new AuthController(userRepository)
    
        router.post('/login', manageErrors(userController.loginUser))
        

        return router;

    }

}