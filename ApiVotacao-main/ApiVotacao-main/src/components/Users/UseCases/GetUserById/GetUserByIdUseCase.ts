import { UserRepository } from "../../Repositories/UserRepository";

export class GetUserByIdUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string) {
    if(!id)
      throw new Error('Invalid id')

    const getUser = await this.userRepository.getUserById(id);
    
    if(getUser.data.lenght === 0)
      throw new Error('User not exists')


    return getUser;
  }
}