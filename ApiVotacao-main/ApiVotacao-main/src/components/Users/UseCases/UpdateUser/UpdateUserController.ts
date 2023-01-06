import { Request, Response } from "express";
import { IUpdateUserRequestDTO } from "./IUpdateUserRequestDTO";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase ) {}

  async handle(request: Request, response: Response) {
    const data: IUpdateUserRequestDTO = request.body;
    try {
      const updateUser = await this.updateUserUseCase.execute(data);

      return response.status(updateUser.status).json({message: updateUser.data});
    } catch (error) {
      const messageError = (<Error>error).message;
      return response.status(400).json({message: messageError})
    }
  }
}