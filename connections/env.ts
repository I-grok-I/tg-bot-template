import * as dotenv from 'dotenv'

dotenv.config()


if (
	!process.env.MODE || 
	!process.env.BOT_TOKEN_PROD || 
	!process.env.BOT_TOKEN_DEV ||
	!process.env.DB_HOST_DEV ||
	!process.env.DB_HOST_PROD ||
	!process.env.DB_PORT_DEV ||
	!process.env.DB_PORT_PROD ||
	!process.env.DB_NAME_DEV ||
	!process.env.DB_NAME_PROD ||
	!process.env.DB_USER_DEV ||
	!process.env.DB_USER_PROD ||
	!process.env.DB_PASSWORD_DEV ||
	!process.env.DB_PASSWORD_PROD
) {
	throw new Error('Missing environment variables');
} 

export const {
	MODE,
	BOT_TOKEN_DEV,
	BOT_TOKEN_PROD,
	DB_HOST_DEV,
	DB_HOST_PROD,
	DB_NAME_DEV,
	DB_NAME_PROD,
	DB_PASSWORD_DEV,
	DB_PASSWORD_PROD,
	DB_PORT_DEV,
	DB_PORT_PROD,
	DB_USER_DEV,
	DB_USER_PROD
} = process.env;
