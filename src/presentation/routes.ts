import { Router } from "express";
import { UserRoutes } from "./users/routes";
import { PetPostsRoutes } from "./pet-posts/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    // Rutas para usuarios
    router.use("/api/users", UserRoutes.routes)

    // Rutas para petPost
    router.use("/api/petpost", PetPostsRoutes.routes)


    return router;
  }
}
