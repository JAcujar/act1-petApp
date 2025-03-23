import { User } from "../../../data";
import { CustomError, RegisterUserDto } from "../../../domain";

export class RegisterUserService {
  
  async execute(userData: RegisterUserDto){

      const user = new User()

      user.name = userData.name
      user.email = userData.email
      user.password = userData.password

    try {
      await user.save()
      return {
        message: 'User created succesfully',
      }
    }
    catch (error) {
      throw CustomError.internalServer('Error creating user')
    }
  }
}