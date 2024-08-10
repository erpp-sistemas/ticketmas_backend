import { RegisterUserDto } from "../../dtos/auth/register-user.dto"
import { UserEntity } from "../../entities/user.entity"
import { UserRepository } from "../../repositories/user.repositry"

interface RegisterUserUseCase {
    
    execute( dto: RegisterUserDto ): Promise<UserEntity>

}


export class RegisterUser implements RegisterUserUseCase {

    constructor(
        public userRepository: UserRepository
    ){}
  
    execute(dto: RegisterUserDto): Promise<UserEntity> {
        return this.userRepository.registerUser(dto)
    }
    
}