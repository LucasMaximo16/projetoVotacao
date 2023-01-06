import { UserRepository } from "../../Repositories/UserRepository";
import { GetUserByIdController } from "./GetUserByIdController";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

const userRepository = new UserRepository();
const getUserByIdUseCase = new GetUserByIdUseCase(userRepository);
const getUserByIdController= new GetUserByIdController(getUserByIdUseCase);

export { getUserByIdController };