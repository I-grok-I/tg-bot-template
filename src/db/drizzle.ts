import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from '../sharedPart/schema/schema'
import * as env from '../env'


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





const client = new Client(env.MODE === 'dev' ? dev : prod);

client.connect().then(() => console.log('drizzle client is connected.'))

export const db = drizzle(client, {schema});