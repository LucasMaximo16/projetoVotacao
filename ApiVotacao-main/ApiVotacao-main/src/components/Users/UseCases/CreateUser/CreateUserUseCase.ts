
import { UserRepository } from "../../Repositories/UserRepository";
import { createUserValidation } from "../../Validations/createUserValidation";
import { ICreateUserResquestDTO } from "./ICreateUserRequestDTO";
import md5 from 'md5';

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(data: ICreateUserResquestDTO) {
    createUserValidation(data);

    const cryptedPassoword = md5(data.password);
    return await this.userRepository.create({...data, password: cryptedPassoword});
  }
}
