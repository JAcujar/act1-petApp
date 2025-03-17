export class FinderOnePetPostService {
  async execute(userId: string) {
    const id = userId

    return {
      id: id,
      message: "Find one pet post"
    }
  }
}