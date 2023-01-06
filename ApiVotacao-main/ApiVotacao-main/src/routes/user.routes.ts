import { request, Request, Response, Router } from "express";
import { createUserController } from "../components/Users/UseCases/CreateUser";
import { deleteUserByIdController } from "../components/Users/UseCases/DeleteUserById";
import { getAllUserController } from "../components/Users/UseCases/GetAllUsers";
import { getUserByIdController } from "../components/Users/UseCases/GetUserById";
import { loginControll } from "../components/Users/UseCases/LoginUser";
import { updateUserController } from "../components/Users/UseCases/UpdateUser";

const userRoutes = Router();

userRoutes.post('/', (request: Request, response: Response) => {
  return createUserController.handle(request, response);
})

userRoutes.post('/login',  (request: Request, response: Response) => {
  return loginControll.handle(request, response);
})

userRoutes.get('/:id', (request: Request, response: Response) => {
  return getUserByIdController.handle(request, response);
})

userRoutes.get('/', (request: Request, response: Response) => {
  return getAllUserController.handle(request, response);
})

userRoutes.delete('/:id', (request: Request, response: Response) => {
  return deleteUserByIdController.handle(request, response);
})

userRoutes.put('/', (request: Request, response: Response) => {
  return updateUserController.handle(request, response);
})


export { userRoutes };
