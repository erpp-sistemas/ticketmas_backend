// import { Encrypt } from "../../config/encrypt.adapter";
// import { JwtAdapter } from "../../config/jwt.adapter";
import { prismaSer0, prismaTicketMas } from "../../config/db/conexion";
import { JwtAdapter } from "../../config/jwt.adapter";

import { UserDatasource } from "../../domain/datasources/user.datasource";
import { VinculacionDto } from "../../domain/dtos/asignaciones/viculacion.dto";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";

import { UserEntity } from "../../domain/entities/user.entity";
import { CustomError } from "../../domain/errors";



export class UserDatasourceImpl extends UserDatasource {


    async loginUser(loginUserDto: LoginUserDto ): Promise<UserEntity> {

        const dataUser=await prismaSer0.usuario.findFirst({
            where: {
                acceso: {
                    usuario: loginUserDto.email,
                    contrasena: loginUserDto.password
                }
            },
            include: {
                acceso: true ,
                rol:{include:{rol:true}}
            }
        })

        const vinculacion=await prismaTicketMas.usuarios_vinculaciones.findFirst({
            where:{id:dataUser?.id_usuario}
        })    
    
        if (!dataUser) throw CustomError.badRequest("Usuario o contraseña incorrectos");
        
        if (!dataUser?.activo) throw  CustomError.badRequest('User not active');
           
            
        if(!vinculacion){
            const newVinculacion=VinculacionDto.create({
                id:dataUser.id_usuario,
                apellidos:dataUser.apellido_paterno+" "+dataUser.apellido_materno,
                nombre:dataUser.nombre,
                foto:dataUser.foto,
                activo:true,                    
            })
            await prismaTicketMas.usuarios_vinculaciones.create({data:newVinculacion})
        }

        const {acceso,rol,...structureData}=dataUser

        const model={
            id: structureData.id_usuario,
            nombre: structureData.nombre,
            apellido_paterno:structureData.apellido_paterno,
            apellido_materno: structureData.apellido_materno,
            url_foto: structureData.foto,
            email: acceso?.usuario,
            password: acceso?.contrasena,
            rol:rol?.rol?.nombre,
            activo: structureData.activo,
        }
        const token = await JwtAdapter.generateToken({ id: model.id, email: model.email });
        if (!token) throw CustomError.internalServer('Error while creating JWT');
        
        const { password, ...userData } = UserEntity.fromObject({...model,token});

        return UserEntity.fromObject(userData)

    }

}