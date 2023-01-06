import { UserRepository } from './../../Repositories/UserRepository';
import LoginControll from './loginController';
import LoginUseCase from './loginUseCase';

const userRepository = new UserRepository()
const loginUserCase =  new LoginUseCase(userRepository)
const loginControll =  new LoginControll(loginUserCase)

export {loginControll}