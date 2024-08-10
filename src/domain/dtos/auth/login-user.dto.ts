import { regularExps } from "../../../config/regular-exp"
import { CustomError } from "../../errors"


interface DataAuthLogin{
    email: string
    password: string
}


export class LoginUserDto implements DataAuthLogin{
    email: string
    password: string

    constructor({email,password}:DataAuthLogin)
    {
        this.email=email
        this.password=password
    }

    static create(data:DataAuthLogin):LoginUserDto{
        
        if(!data.email){ throw CustomError.badRequest("email is required");}
        if(!regularExps.email.test( data.email ) ) throw CustomError.badRequest("requerid email valid")
        if(!data.password) throw CustomError.badRequest("password is requerid")
       

        return new LoginUserDto(data)
    }

}