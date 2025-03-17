export class UpdatePetPostService {
  async execute(userId: string){
    const id = userId

    return {
      id: id,
      message: "Post update succesfully"
    }

  }
}