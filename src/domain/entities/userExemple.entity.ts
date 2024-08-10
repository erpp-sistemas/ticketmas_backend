export class UserEntity {


    constructor(
        public id: number,
        public usuario: string,
        public password: string,
        public nombre: string,
        public apellido_paterno: string,
        public apellido_materno: string,
        public url_foto: string,
        public activo: number,
        public access_app_movil: number,
        public access_app_web: number,
        public id_rol: string,
        public token: string,
        public telefono_personal?: string,
        public id_user_push?: string,
        public sexo?: string,
        public correo?: string,
    ) { }

    static fromObject(object: { [key: string]: any }): UserEntity {

        const { id, nombre, apellido_paterno, apellido_materno, usuario, password, url_foto, activo, access_app_movil, access_app_web, id_rol, token } = object;

        //if (!id) throw CustomError.badRequest('Missign id');
        // if (!nombre) throw CustomError.badRequest('Missing nombre');
        // if (!apellido_paterno) throw CustomError.badRequest('Missing apellido paterno');
        // if (!usuario) throw CustomError.badRequest('Missing usuario');
        // if (!id_rol) throw CustomError.badRequest('Missing id_rol');
        //if (!password) throw CustomError.badRequest('Missing password');

        return new UserEntity( id, usuario, password, nombre, apellido_paterno, apellido_materno, url_foto, activo, access_app_movil, access_app_web, id_rol, token )

    }

}