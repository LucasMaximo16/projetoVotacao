import { Request, Response } from "express";
import { ILoginDTO } from "./ILoginDTO";
import LoginUseCase from "./loginUseCase";

export default class LoginControll {
  constructor(private loginUseCase: LoginUseCase) { }

  async handle(request: Request, response: Response) {
    const data: ILoginDTO = request.body

    try {
      const result = await this.loginUseCase.execute(data);

      return response.status(result.status).json({ message: result.data })
    } catch (error) {
      const messageError = (error as Error).message
      return response.status(400).json({ message: messageError })
    }
  }
}