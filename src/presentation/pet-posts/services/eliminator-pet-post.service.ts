export class DeletePetPostService {
  async execute(userId: string){
    const id = userId

    return {
      id: id,
      message: "Pet post delete succesfully"
    }
  }
}