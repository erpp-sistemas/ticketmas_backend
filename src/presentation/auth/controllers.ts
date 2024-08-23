import { Request, Response } from "express";

import { UserRepository } from "../../domain/repositories/user.repositry";

import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { LoginUser } from "../../domain/uses-cases/auth/login-user";





export class AuthController {

    // * DI
    constructor(
        public userRepository: UserRepository
    ) { }


    loginUser =async (req: Request, res: Response):Promise<void>=>{
        
        const loginUserDto = LoginUserDto.create(req.body)
        // * llamar al service -> mas sencillo

        // * llamar al caso de uso -> clean architecture
         const user= await new LoginUser(this.userRepository).execute(loginUserDto!)
         let {token, ...user_info} = user
         res.cookie('token', token, {
             httpOnly: true, 
             secure: true,
             sameSite: 'none', 
           });
         res.status(200).json(user_info)
    }

   


}