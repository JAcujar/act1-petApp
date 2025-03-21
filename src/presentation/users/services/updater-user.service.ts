import { User } from "../../../data"
import { CustomError, RegisterUserDto } from "../../../domain"

export class UpdaterUserService {

  async execute(userId: string, userData: RegisterUserDto) {
    
    const user = await this.ensureUserExist(userId)
    
    user.name = userData.name
    user.email = userData.email
    
    try {
      await user.save()
      return {
        mesagge: 'User updated succesfully'
      }
    } catch (error) {
      throw CustomError.internalServer('error updating user')
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