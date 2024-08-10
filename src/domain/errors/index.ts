import { Response } from "express"



export class CustomError  {

    constructor(
        public readonly statusCode: number,
        public readonly message: string,
        public readonly res:void 
    ){}

    static badRequest( message: string ) {
        console.log("Intentamosponer un error");
        
        throw {message,status:400}
    }

    static unauthorized( message: string ) {
        console.log("Intentamosponer un error");

        throw {message,status:401}
    }

    static forbidden( message: string ) {
        console.log("Intentamosponer un error");

        throw {message,status:403}
    }

    static notFound( message: string ) {
        console.log("Intentamosponer un error");
        throw {message,status:404}
    }

    static internalServer( message: string ) {
        console.log("Intentamosponer un error");
        throw {message,status:500}
    }



}









