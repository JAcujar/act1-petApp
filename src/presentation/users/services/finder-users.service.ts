import { User } from "../../../data";
import { CustomError } from "../../../domain";

export class FinderUsersService {

async execute() {
  try{
    return User.find({
      select: ['id', 'name', 'email', 'role'],
      where: {
        status: true,
      }
    })
  } catch (error) {
    throw CustomError.internalServer('Error fetching users')
  }
  // return {
  //   message: "Finder users service works"
  // }
}

}