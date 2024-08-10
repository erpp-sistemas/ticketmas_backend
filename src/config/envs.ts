import dotenv from 'dotenv'
dotenv.config()


const envs={
    PORT:process.env.PORT,
    JWT_SEED:process.env.JWT_SEED
}


export default envs