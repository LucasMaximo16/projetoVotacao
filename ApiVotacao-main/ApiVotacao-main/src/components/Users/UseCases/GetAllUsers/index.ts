import { UserRepository } from "../../Repositories/UserRepository";
import { GetAllUserController } from "./GetAllUserController";
import { GetAllUserUseCase } from "./GetAllUserUseCase";

const userRepository = new UserRepository();
const getAllUserUseCase = new GetAllUserUseCase(userRepository);
const getAllUserController= new GetAllUserController(getAllUserUseCase);

export { getAllUserController };