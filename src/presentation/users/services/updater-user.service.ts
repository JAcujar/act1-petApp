export class UpdaterUserService {
  async execute(userId: string){
    const id = userId

    return {
      id: id,
      message: "User update succesfully"
    }

  }
}