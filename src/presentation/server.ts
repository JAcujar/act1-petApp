import express, { Router } from "express";


/**
 * Interface representing the configuration options for the Express Server
 */
interface Options {
  port: number;
  routes: Router;
}

/**
 * Class representing an Express server
 * 
 * @example
 * ```ts
 * import { Server } from "./presentation/server";
 * import { AppRoutes } from "./presentation/routes";
 * const server = new server({
 *  port: 4000,
 * routes: AppRoutes.routes,
 * });
 * server.star(); 
 * ```
 */

export class Server {
  private readonly app = express();
  private readonly port: number;
  private readonly routes: Router;

  /**
   * Crea una nueva instancia del servidor
   * @param options Opciones para configurar el servidor.
   */

  constructor(options: Options){
    this.port = options.port;
    this.routes = options.routes;
  }

  /**
   * Star the Express Server
   */

  async start() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))

    this.app.use(this.routes)

    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}👌`)
    })
  }
}

