import { User } from "../../../data"
import { CustomError } from "../../../domain"

export class FinderOneUserService {

  async execute(userId: string) {
    const user = await User.findOne({
      select: ['id', 'name', 'email', 'role'],
      where: {
        status: true,
        id: userId,
      }
    })

    if (!user){
      throw CustomError.notFound('User not found')
    }

    return user
    
  }
  }