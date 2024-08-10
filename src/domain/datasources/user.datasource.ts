import { VinculacionDto } from "../dtos/asignaciones/viculacion.dto";
import { LoginUserDto } from "../dtos/auth/login-user.dto";
import { RegisterUserDto } from "../dtos/auth/register-user.dto";
import { UserEntity } from "../entities/user.entity";



export abstract class UserDatasource {

    abstract loginUser(loginUserDto: LoginUserDto): Promise<UserEntity>


}