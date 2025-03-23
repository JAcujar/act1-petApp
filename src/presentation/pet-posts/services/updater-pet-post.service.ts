export class UpdatePetPostService {
  async execute(petPostId: string){
    const id = petPostId

    return {
      id: id,
      message: "Post update succesfully"
    }

  }
}