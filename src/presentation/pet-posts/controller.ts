import { Request, Response } from "express";
import { FinderPetPostService } from "./services/finder-pet-posts.service";
import { CreatorPetPostService } from "./services/creator-pet-post.service";
import { FinderOnePetPostService } from "./services/finder-pet-post.service";
import { UpdatePetPostService } from "./services/updater-pet-post.service";
import { DeletePetPostService } from "./services/eliminator-pet-post.service";
import { CustomError } from "../../domain";
import { RegisterPetPostDto } from "../../domain/dtos/post-pet/create-post.dto";


export class PetPostsController {
  constructor(
    private readonly finderPetPost: FinderPetPostService,
    private readonly creatorPetPost: CreatorPetPostService,
    private readonly finderOnePetPost: FinderOnePetPostService,
    private readonly updaterPetPost: UpdatePetPostService,
    private readonly deletePetPost: DeletePetPostService,
  ) {}

    private handleError = (error: unknown, res: Response) => {
      if (error instanceof CustomError){
        return res.status(error.statusCode).json({message: error.message})
      }
  
      console.error(error);
      return res.status(500).json({ message: 'Something went very wrong🧨'})
    }

  creator = (req: Request, res: Response) => {
    const [err, registerPetPostDto] = RegisterPetPostDto.execute(req.body)

    if (err) {
      return res.status(422).json({ message: err})
    }

    this.creatorPetPost
    .execute(registerPetPostDto!)
    .then(data => res.status(201).json(data))
    .catch(err => this.handleError(err, res))
  }

  finder = (req: Request, res: Response) => {
    this.finderPetPost
    .execute()
    .then(petPosts => res.status(200).json(petPosts))
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