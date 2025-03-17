import { Router } from "express";
import { FinderPetPostService } from "./services/finder-pet-posts.service";
import { PetPostsController } from "./controller";
import { CreatorPetPostService } from "./services/creator-pet-post.service";
import { FinderOnePetPostService } from "./services/finder-pet-post.service";
import { UpdatePetPostService } from "./services/updater-pet-post.service";
import { DeletePetPostService } from "./services/eliminator-pet-post.service";


export class PetPostsRoutes {
  static get routes(): Router {
    
    const router = Router()

    const finderPetPosts = new FinderPetPostService;
    const creatorPetPost = new CreatorPetPostService;
    const finderOnePetPost = new FinderOnePetPostService;
    const updatePetPost = new UpdatePetPostService;
    const deletePetPost = new DeletePetPostService;

    const controller = new PetPostsController(
      finderPetPosts,
      creatorPetPost,
      finderOnePetPost,
      updatePetPost,
      deletePetPost,
    )

    router.get("/", controller.finder)
    router.post("/", controller.creator)
    router.get("/:id", controller.finderOne)
    router.patch("/:id", controller.updater)
    router.delete("/:id", controller.delete)

    // TODO: definir los metodos y rutas de PetPosts

    return router
  }
}