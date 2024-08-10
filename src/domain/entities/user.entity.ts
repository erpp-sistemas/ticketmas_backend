import { CustomError } from "../errors";



interface dataUser{
    id?: number,
    nombre: string,
    apellido_paterno: string,
    apellido_materno: string,
    url_foto?: string,
    email?: string,
    password?: string,
    rol?:string,
    area?:string,
    activo?: boolean,
    token?: object;
}


export class UserEntity implements dataUser{
    id?: number | undefined;
    nombre: string;
    apellido_materno: string;
    apellido_paterno: string;
    url_foto?: string | undefined;
    area?: string | undefined;
    rol?: string | undefined;
    email?: string | undefined;
    password?: string;
    activo?: boolean | undefined;
    token?: object;

    public constructor({apellido_materno,apellido_paterno,nombre,activo,area,email,id,password,rol,url_foto,token}:dataUser){
        this.id= id;
        this.nombre= nombre;
        this.apellido_materno= apellido_materno;
        this.apellido_paterno= apellido_paterno;
        this.url_foto= "https://www.ser0.mx/ser0/image/usuario/"+url_foto ;
        this.area=area;
        this.rol=rol 
        this.email=email;
        this.password=password;
        this.activo=activo ;
        this.token=token;
    }

    static fromObject(datasources:dataUser): UserEntity {

        const {email,rol,nombre,apellido_paterno,id} = datasources;

        // if (!id) throw 'Missign id';
        if (!nombre) throw CustomError.badRequest('Missing nombre');
        if (!apellido_paterno) throw CustomError.badRequest('Missing apellido paterno');
        if (!email) throw CustomError.badRequest('Missing usuario');
        if (!rol) throw CustomError.badRequest('Missing id_rol');

        return new UserEntity(datasources)

    }

}