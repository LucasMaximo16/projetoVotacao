import { Request, Response } from "express";
import { DeleteUserByIdUseCase } from "./DeleteUserByIdUseCase";

export class DeleteUserByIdController {
  constructor(private deleteUserByIdUseCase: DeleteUserByIdUseCase ) {}

  async handle(request: Request, response: Response) {
    const { id }  = request.params;
    try {
      const getUser = await this.deleteUserByIdUseCase.execute(id);

      return response.status(getUser.status).json({message: getUser.data});
    } catch (error) {
      const messageError = (<Error>error).message;
      return response.status(400).json({message: messageError})
    }
  }
}