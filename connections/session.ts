
import { Postgres } from '@telegraf/session/pg'
import { MyWizardSession } from '../types/interface';
import * as env from './env'





const dev = {
    host: env.DB_HOST_DEV,
    port: Number(env.DB_PORT_DEV),
    user: env.DB_USER_DEV,
    password: env.DB_PASSWORD_DEV,
    database: env.DB_NAME_DEV,
}
const prod = {
    host: env.DB_HOST_PROD,
    port: Number(env.DB_PORT_PROD),
    user: env.DB_USER_PROD,
    password: env.DB_PASSWORD_PROD,
    database: env.DB_NAME_PROD,
}




// export const store = Postgres<MyWizardSession>(env.MODE === 'dev' ? dev : prod); 
export const store = undefined


