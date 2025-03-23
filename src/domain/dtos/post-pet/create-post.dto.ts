
export class RegisterPetPostDto {
  constructor(
    public petName: string,
    public id: string
  ) {}

  static execute(object: { [ key: string ]: any }) : [string?, RegisterPetPostDto?] {
    const { petName, id } = object

    if (!petName) return ['Pet Name is required']
    if (!id) return ['User id is required']

    return [undefined, new RegisterPetPostDto(
      petName.trim().toLowerCase(),
      id
    )]
  }
}