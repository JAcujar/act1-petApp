import "reflect-metadata"
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";
import { envs } from "./config";
import { PostgresDatabase } from "./data";


async function main(){

  const postgress = new PostgresDatabase({
    host: envs.PGHOST,
    port: envs.PGPORT,
    username: envs.PGUSER,
    password: envs.PGPASSWORD,
    database: envs.PGDATABASE,
  })

  await postgress.connect();

  const server = new Server({ 
    port: envs.PORT, 
    routes: AppRoutes.routes,
  })

  await server.start()
}


main()