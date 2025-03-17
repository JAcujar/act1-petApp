export class DeleteUserService {
  async execute(userId: string){
    const id = userId

    return {
      id: id,
      message: 'User delete succesfully'
    }
  }
}