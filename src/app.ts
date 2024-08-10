import envs from "./config/envs";
import { AppRoutes } from "./presentation/routes";
import Server from "./presentation/server";


    const server= new Server()

    server.setRoutes(AppRoutes.routes)
    

    server.app.listen(envs.PORT,()=>{
        console.log(`Estamos en el puerto ${envs.PORT} 🎇💚`)
    });
































