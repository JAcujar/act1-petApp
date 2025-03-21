import { Request, Response } from "express";
import { RegisterUserService } from "./services/register-user.service";
import { FinderUsersService } from "./services/finder-users.service";
import { LoginUserService } from "./services/login-user.service";
import { FinderOneUserService } from "./services/finder-user.service";
import { UpdaterUserService } from "./services/updater-user.service";
import { DeleteUserService } from "./services/eliminator-user.service";
import { CustomError, RegisterUserDto } from "../../domain";



export class  UserController {
  
  constructor(
    private readonly registerUser: RegisterUserService,
    private readonly finderUsers: FinderUsersService,
    private readonly loginUsers: LoginUserService,
    private readonly finderOneUser: FinderOneUserService,
    private readonly updatesUser: UpdaterUserService,
    private readonly deleteUser: DeleteUserService,
  ) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError){
      return res.status(error.statusCode).json({message: error.message})
    }

    console.error(error);
    return res.status(500).json({ message: 'Something went very wrong🧨'})
  }

  register = (req: Request, res: Response) => {
    const [err, registerUserDto] = RegisterUserDto.execute(req.body)

    if (err) {
      return res.status(422).json({ message: err })
    }

    this.registerUser
    .execute(registerUserDto!)
    .then(data => res.status(201).json(data))
    .catch(err => this.handleError(err, res))
  }

  login = (req: Request, res: Response) => {
    this.loginUsers
    .execute()
    .then(data => res.status(201).json(data))
    .catch(err => this.handleError(err, res))
  }

  finderOne = (req: Request, res: Response) => {
      const { id } = req.params;

      this.finderOneUser
      .execute(id)
      .then(data => res.status(201).json(data))
      .catch(err => this.handleError(err, res))
  }

  finder = (req: Request, res: Response) => {
    this.finderUsers
    .execute()
    .then(data => res.status(201).json(data))
    .catch(err => this.handleError(err, res))
  }

  updater = (req: Request, res: Response) => {
    const { id } = req.params
    const [err, registerUserDto] = RegisterUserDto.execute(req.body)

    if (err) {
      return res.status(422).json({ message: err })
    }
    
    this.updatesUser
    .execute(id, registerUserDto!)
    .then(data => res.status(201).json(data))
    .catch(err => this.handleError(err, res))
  }

  delete = (req: Request, res: Response) => {
    const { id } = req.params

    this.deleteUser
    .execute(id)
    .then(data => res.status(201).json(data))
    .catch(err => this.handleError(err, res))
  }

} 
