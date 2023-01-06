import { UserRepository } from "../../Repositories/UserRepository";
import { DeleteUserByIdController } from "./DeleteUserByIdController";
import { DeleteUserByIdUseCase } from "./DeleteUserByIdUseCase";

const userRepository = new UserRepository();
const deleteUserByIdUseCase = new DeleteUserByIdUseCase(userRepository);
const deleteUserByIdController = new DeleteUserByIdController(deleteUserByIdUseCase);

export { deleteUserByIdController };