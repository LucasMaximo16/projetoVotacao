import { UserRepository } from "../../Repositories/UserRepository";

export class DeleteUserByIdUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string) {
    if(!id)
      throw new Error('Invalid id')

    const getUser = await this.userRepository.getUserById(id);

    if(getUser.data !== null) {
      const deleteUser = await this.userRepository.deleteUserById(id);
      return deleteUser;
    }
    
    throw new Error('User not exists')
  }
}