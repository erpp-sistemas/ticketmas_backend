import { Response } from "express"



export class CustomError  {

    constructor(
        public readonly statusCode: number,
        public readonly message: string,
        public readonly res:void 
    ){}

    static badRequest( message: string ) {
        console.log("Intentamosponer un error 400");
        
        throw {message,status:400}
    }

    static unauthorized( message: string ) {
        console.log("Intentamosponer un error 401");

        throw {message,status:401}
    }

    static forbidden( message: string ) {
        console.log("Intentamosponer un error 403");

        throw {message,status:403}
    }

    static notFound( message: string ) {
        console.log("Intentamosponer un error 404");
        throw {message,status:404}
    }

    static internalServer( message: string ) {
        console.log("Intentamosponer un error 500");
        throw {message,status:500}
    }



}









