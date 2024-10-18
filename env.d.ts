declare namespace NodeJS {
	interface ProcessEnv {

		MODE: 'dev' | 'prod' 

		BOT_TOKEN_DEV: string;
		BOT_TOKEN_PROD: string;

		DB_HOST_DEV: string;
		DB_HOST_PROD: string;

		DB_PORT_DEV: string;
		DB_PORT_PROD: string;

		DB_NAME_DEV: string;
		DB_NAME_PROD: string;

		DB_USER_DEV: string;
		DB_USER_PROD: string;

		DB_PASSWORD_DEV: string;
		DB_PASSWORD_PROD: string;
	}
  }
  
