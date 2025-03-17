import { Request, Response } from "express";
import { RegisterUserService } from "./services/register-user.service";
import { FinderUsersService } from "./services/finder-users.service";
import { LoginUserService } from "./services/login-user.service";
import { FinderOneUserService } from "./services/finder-user.service";
import { UpdaterUserService } from "./services/updater-user.service";
import { DeleteUserService } from "./services/eliminator-user.service";


export class  UserController {
  
  constructor(
    private readonly registerUser: RegisterUserService,
    private readonly finderUsers: FinderUsersService,
    private readonly loginUsers: LoginUserService,
    private readonly finderOneUser: FinderOneUserService,
    private readonly updatesUser: UpdaterUserService,
    private readonly deleteUser: DeleteUserService,
  ) {}

  register = (req: Request, res: Response) => {
    this.registerUser
    .execute()
    .then(message => res.status(201).json(message))
    .catch(err => res.status(500).json({ message: err.message }))
  }

  finder = (req: Request, res: Response) => {
    this.finderUsers
    .execute()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({message: err.message}))
  }

  login = (req: Request, res: Response) => {
    this.loginUsers
    .execute()
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json({message: err.message}))
  }

  finderOne = (req: Request, res: Response) => {
    const { id } = req.params;

    this.finderOneUser
    .execute(id)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json({ message: err.message }))
  }

  updater = (req: Request, res: Response) => {
    const { id } = req.params
    
    this.updatesUser
    .execute(id)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json({ message: err.message}))
  }

  delete = (req: Request, res: Response) => {
    const { id } = req.params

    this.deleteUser
    .execute(id)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json({ message: err.message}))
  }

} 

 // findOne = (req: Request, res: Response) => {
  //   const { id } = req.params
  //   console.log(req.params)
  //   return res.status(200).json({
  //     id: id,
  //     message: "Find one request to the homepage from the user controller class",
  //   })
  // }

  // update = (req: Request, res: Response) => {
  //   const { id } = req.params
  //   return res.status(200).json({
  //     id: id,
  //     message: "Update request to the homepage from the user controller class"
  //   })
  // }

  // delete = (req: Request, res: Response) => {
  //   const { id } = req.params
  //   return res.status(200).json({
  //     id: id,
  //     message: "Delete request to the homepage from the user controller class"
  //   })
  // }