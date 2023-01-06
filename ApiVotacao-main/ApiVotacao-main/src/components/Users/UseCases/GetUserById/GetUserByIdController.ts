import { Request, Response } from "express";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

export class GetUserByIdController {
  constructor(private getUserByIdUseCase: GetUserByIdUseCase ) {}

  async handle(request: Request, response: Response) {
    const { id }  = request.params;
    try {
      const getUser = await this.getUserByIdUseCase.execute(id);

      return response.status(getUser.status).json({message: getUser.data});
    } catch (error) {
      const messageError = (<Error>error).message;
      return response.status(400).json({message: messageError})
    }
  }
}