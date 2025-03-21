import { User } from "../../../data"
import { CustomError } from "../../../domain"

export class DeleteUserService {
  async execute(userId: string){
    const user = await this.ensureUserExist(userId)

    user.status = false

    try{
      await user.save()
      return {}
    }
    catch (error) {
      throw CustomError.internalServer('error deleting user')
    }
  }

    private async ensureUserExist(userId: string) {
      const user = await User.findOne({
        select: ['id'],
        where: {
          status: true,
          id: userId,
        }
      })
      
      if (!user) {
        throw CustomError.notFound('User not found')
      }
      
      return user
    }
}