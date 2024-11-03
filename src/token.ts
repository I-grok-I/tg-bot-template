import { Telegraf } from 'telegraf'
import { MyContext } from './types/interface'
import * as env from './env'


const dev = env.BOT_TOKEN_DEV
const prod = env.BOT_TOKEN_PROD


export const bot = new Telegraf<MyContext>(env.MODE === 'prod' ? prod : dev)


