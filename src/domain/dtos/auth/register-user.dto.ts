// import { regularExps } from "../../../config/regular-exp";


export class RegisterUserDto {

    private constructor(
        public usuario: string,
        public password: string,
        public correo: string,
        public nombre: string,
        public url_foto: string,
        public apellido_paterno: string,
        public apellido_materno: string,
        public sexo: string,
        public activo: number,
        public telefono_personal: string,
        public id_user_push: string,
        public access_app_movil: number,
        public access_app_web: number
    ) { }

    static create( object: { [key: string]: any } ): [string?, RegisterUserDto?] {

        let { usuario, password, nombre, apellido_paterno, apellido_materno, url_foto, access_app_web, access_app_movil, sexo, activo, telefono_personal, id_user_push, correo } = object;

        if( !usuario ) return ['Missing usuario'];
        // if( !regularExps.email.test( usuario ) ) return ['Email is not valid'];
        if( !password ) return ['Missing password'];
        if( !nombre ) return ['Missing nombre'];
        if( !apellido_paterno ) return ['Missing apellido paterno'];

        if( !apellido_materno ) apellido_materno = '';
        if( !url_foto ) url_foto = 'https://firebasestorage.googleapis.com/v0/b/waterloo-6e309.appspot.com/o/images%2Fusuarios%2FUsuario-Base-Demo?alt=media&token=1295b4a8-7a70-4aeb-9507-5e8c63f2abc0';
        if( !access_app_web ) access_app_web = 1;
        if( !access_app_movil ) access_app_movil = 1;
        if( !sexo ) sexo = '';
        if( !telefono_personal ) telefono_personal = '';
        if( !id_user_push ) id_user_push = '';
        if( !activo ) activo = 1;
        if( !correo ) correo = '';
        
        return [undefined, new RegisterUserDto(usuario, password, correo, nombre, url_foto, apellido_paterno, apellido_materno, sexo, activo, telefono_personal, id_user_push, access_app_web, access_app_movil)]

    }

}