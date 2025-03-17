import { Router } from "express";
import { UserController } from "./controller";
import { FinderUsersService } from "./services/finder-users.service";
import { RegisterUserService } from "./services/register-user.service";
import { LoginUserService } from "./services/login-user.service";
import { FinderOneUserService } from "./services/finder-user.service";
import { UpdaterUserService } from "./services/updater-user.service";
import { DeleteUserService } from "./services/eliminator-user.service";


export class UserRoutes {
  static get routes(){

    const router = Router();
    const registerUser = new RegisterUserService;
    const finderUser = new FinderUsersService;
    const loginUser = new LoginUserService;
    const finderOneUser = new FinderOneUserService;
    const updateUser = new UpdaterUserService;
    const deleteUser = new DeleteUserService;

    const controller = new UserController(
      registerUser, 
      finderUser, 
      loginUser,
      finderOneUser,
      updateUser,
      deleteUser,
    );

    router.get("/", controller.finder)
    router.post("/register", controller.register)
    router.post("/login", controller.login)
    router.get("/:id", controller.finderOne)
    router.patch("/:id", controller.updater)
    router.delete("/:id", controller.delete)

    // router.get("/:id", controller.findOne)
    // router.patch("/:id", controller.update)
    // router.delete("/:id", controller.delete)

    return router;
  }
}