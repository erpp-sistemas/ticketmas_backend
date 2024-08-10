// import { regularExps } from "../../../config/regular-exp";


export class LoginUserDto {

    private constructor(
        public usuario: string,
        public password: string
    ) { }

    static create( object: { [key: string]: any } ): [string?, LoginUserDto?] {

        const { usuario, password } = object;

        if( !usuario ) return ['Missing usuario'];
        // if( !regularExps.email.test( usuario ) ) return ['Email is not valid']
        if( !password ) return ['Missing password']

        return [undefined, new LoginUserDto(usuario, password)]

    }

}