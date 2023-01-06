// Controller responsavel por receber e enviar as requisicoes

import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ICreateUserResquestDTO } from "./ICreateUserRequestDTO";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const data: ICreateUserResquestDTO = request.body;
    
    try {
      const result = await this.createUserUseCase.execute(data);
    
      return response.status(result.status).json({message: result.data})
    } catch (error) {
      const messageError = (error as Error).message
      return response.status(400).json({message: messageError})
    }
  }
}