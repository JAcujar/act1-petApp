
export class FinderOneUserService {

  async execute(userId: string) {
    const id = userId

    return {
      id: userId,
      message: "Finder one user service works"
    }
  }
  
  }