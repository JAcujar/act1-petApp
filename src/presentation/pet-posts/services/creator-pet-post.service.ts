import { PetPost } from "../../../data"
import { CustomError } from "../../../domain"
import { RegisterPetPostDto } from "../../../domain/dtos/post-pet/create-post.dto"

export class CreatorPetPostService {

  async execute(petPostData: RegisterPetPostDto){

    const petPost = new PetPost()

    petPost.id = petPostData.id
    petPost.petName = petPostData.petName

  try {
    // await petPost.save()  
    return {
      message: 'Pet Post created succesfully'
    }
  }
    catch (error) {
      throw CustomError.internalServer('Error creating Pet Post')
    }
  }
}