import { Request, Response } from "express";
import { FinderPetPostService } from "./services/finder-pet-posts.service";
import { CreatorPetPostService } from "./services/creator-pet-post.service";
import { FinderOnePetPostService } from "./services/finder-pet-post.service";
import { UpdatePetPostService } from "./services/updater-pet-post.service";
import { DeletePetPostService } from "./services/eliminator-pet-post.service";


export class PetPostsController {
  constructor(
    private readonly finderPetPost: FinderPetPostService,
    private readonly creatorPetPost: CreatorPetPostService,
    private readonly finderOnePetPost: FinderOnePetPostService,
    private readonly updaterPetPost: UpdatePetPostService,
    private readonly deletePetPost: DeletePetPostService,
  ) {}

  finder = (req: Request, res: Response) => {
    this.finderPetPost
    .execute()
    .then(petPosts => res.status(200).json(petPosts))
    .catch(err => res.status(500).json({ message: err.message }))
  }

  creator = (req: Request, res: Response) => {
    this.creatorPetPost

    .execute()
    .then(post => res.status(200).json(post))
    .catch(err => res.status(500).json({ message: err.message }))
  }

  finderOne = (req: Request, res: Response) => {
    const { id } = req.params

    this.finderOnePetPost
    .execute(id)
    .then(onepost => res.status(200).json(onepost))
    .catch(err => res.status(500).json({ message: err.message }))
  }

  updater = (req: Request, res: Response) => {
    const { id } = req.params 

    this.updaterPetPost
    .execute(id)
    .then(post => res.status(200).json(post))
    .catch(err => res.status(500).json({ message: err.message }))
  }

  delete = (req: Request, res: Response) => {
    const { id } = req.params

    this.deletePetPost
    .execute(id)
    .then(post => res.status(200).json(post))
    .catch(err => res.status(500).json({ message: err.message }))
  }

}