import { UserProps } from './../../Model/User';
import { Request, Response } from "express";
import { GetAllUserUseCase } from "./GetAllUserUseCase";

export class GetAllUserController {
    constructor(private getAllUser: GetAllUserUseCase ) {}
  
    async handle(request: Request, response: Response) {
        const data : UserProps =  request.body
      try { 
        const getAllUser = await this.getAllUser.execute(data);
  
        return response.status(getAllUser.status).json({message: getAllUser.data});
      } catch (error) {
        const messageError = (<Error>error).message;
        return response.status(400).json({message: messageError})
      }
    }
  }