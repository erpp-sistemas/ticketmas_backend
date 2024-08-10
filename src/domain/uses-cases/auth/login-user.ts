import { log } from "console"
import { LoginUserDto } from "../../dtos/auth/login-user.dto"
import { UserEntity } from "../../entities/user.entity"
import { UserRepository } from "../../repositories/user.repositry"



interface LoginUserUseCase {
    execute( dto: LoginUserDto ): Promise<UserEntity>
}

export class LoginUser implements LoginUserUseCase {
    
    constructor(
        private readonly userRepository: UserRepository
    ){}

    execute(dto: LoginUserDto): Promise<UserEntity> { 
        return this.userRepository.loginUser(dto)
    }

}