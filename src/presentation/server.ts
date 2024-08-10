import express  from 'express'
import cors     from 'cors'
import cookieParser from 'cookie-parser'
import manageErrors from '../config/manageErrors'



export default class Server{
    public readonly app = express()

    constructor() {
        this.configure()
    }

    private configure() {
       
        this.app.use(cookieParser())
        this.app.use(express.json())
        this.app.use(cors({
            origin: ['http://localhost:5173'],
            credentials: true,
        }))
        
    }

    public setRoutes(router: express.Router) {
              this.app.use("/api/ticketmas/v1",router)
    }

}





