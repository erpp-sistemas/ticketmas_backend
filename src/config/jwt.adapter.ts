import jwt from 'jsonwebtoken'
import envs from './envs';
import { CustomError } from '../domain/errors';

const JWT_SEED = envs.JWT_SEED;

interface BodyToken{
    id:number
    email:string
}

export class JwtAdapter {
    
    static async generateToken(payload: any, duration: string = '2h') {

        return new Promise(resolve => {
            if (!JWT_SEED) {
                console.error('JWT_SEED is not defined');
                return CustomError.badRequest("JWT_SEED is not defined")
            }

            jwt.sign(payload, JWT_SEED, { expiresIn: duration }, (error, token) => {
                if(error) return resolve(null);
                resolve(token)
            })

        })
        
    }

    static async validateToken<T>(token: string): Promise<BodyToken> {
        return new Promise(resolve => {
            if (!JWT_SEED) {
                console.error('JWT_SEED is not defined');
                return CustomError.badRequest("JWT_SEED is not defined")
            }

            jwt.verify(token, JWT_SEED, (err, decoded) => {
                
                if(err) throw CustomError.unauthorized("El token caduco o es invalido");

                resolve(decoded as BodyToken)
            })

        })
    }

}