import 'dotenv/config';
import envar from 'env-var';


export const envs = {

  PORT: envar.get('PORT').required().asPortNumber(),
  MONGO_URL: envar.get('MONGO_URL').required().asString(),
  MONGO_DB_NAME: envar.get('MONGO_DB_NAME').required().asString(),

}


