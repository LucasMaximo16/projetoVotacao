import { UserRepository } from "../../Repositories/UserRepository";
import { updateUserValidation } from "../../Validations/updateUserValidation";
import { IUpdateUserRequestDTO } from "./IUpdateUserRequestDTO";

export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(data: IUpdateUserRequestDTO) {
    updateUserValidation(data);

    //const getUser = await this.userRepository.getUserById(id);
    
    // if(getUser.data.lenght === 0)
    //   throw new Error('User not exists')
    const update = await this.userRepository.updateUser({...data, _id: data.id }) 
    console.log(update);

    return update;
  }
}