import { ILoginDTO } from './../UseCases/LoginUser/ILoginDTO';
import md5 from "md5";
import { IDatabaseResponse } from "../../../types/IDatabaseResponse";
import { DBUSER, UserProps } from "../Model/User";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {
  async create(data: Omit<UserProps, "_id"> ): IDatabaseResponse {
    const createUser = await DBUSER.create(data);
    return createUser.save()
    .then((result) => {
      return {
        status: 200,
        data: data,
      }
    })
    .catch((error) => {
      console.log(error , ' ERROR DATABASE CREATE USER')
      return {
        status: 500,
        data: {
          message: 'INTERNAL SERVER ERROR',
        }
      }
    })
  }

  async getUserById(id: string): IDatabaseResponse {
    return await DBUSER.findById({_id: id})
    .then((result) => {
      return {
        status: 200,
        data: result
      }
    })
    .catch((error) => {
      console.log(error, ' ERROR DATABASE GET USER BY ID')
      return {
        status: 500,
        data: {
          message: 'INTERNAL SERVER ERROR',
        }
      }
    })
  }

  async deleteUserById(id: string): IDatabaseResponse {
  
    return await DBUSER.findByIdAndDelete({_id: id})
    .then((result) => {
      return {
        status: 200,
        data: result
      }
    })
    .catch((error) => {
      console.log(error, ' ERROR DATABASE DELETE USER')
      return {
        status: 500,
        data: {
          message: 'INTERNAL SERVER ERROR',
        }
      }
    })
  }

  async updateUser(data: Omit<UserProps, "password"> ): IDatabaseResponse {
    return await DBUSER.findByIdAndUpdate({_id: data._id}, data, {
      new: true
    })
    .then((result) => {
      return {
        status: 200,
        data: result,
      }
    })
    .catch((error) => {
      console.log(error, ' ERROR DATABASE UPDATE USER')
      return {
        status: 500,
        data: {
          message: 'INTERNAL SERVER ERROR',
        }
      }
    })
  }

  async getEmailUser(email:string) : IDatabaseResponse{
    return await DBUSER.find({email: email})
    .then((result)=>{
      return {
        status: 200,
        data: result
      }
    })
    .catch((error) => {
      console.log(error, "email de usuário não encontrado")
      return{
        status : 500,
        data : {
          mensage:"NOT FOUND EXEPTION"
        }
      }
    })
  }

  async getPassowrdUser (passorwd : string) : IDatabaseResponse{
    const cryptografadaPassowrd = md5(passorwd)
    return await DBUSER.find({password : cryptografadaPassowrd})
    .then((result)=>{
      return{
        status : 200,
        data : result
      }
    })
    .catch((erro) => {
      console.log("Invalid Passowrd");
      return{
        status : 500,
        data : {
          mensage : "INTERNAL SERVER ERROR"
        }
      }
    })
  }

  async getAllUser(data : Omit<UserProps,"password"> )  : IDatabaseResponse{
    return await DBUSER.find(data)
    .then((result)=>{
      return{
        status : 200,
        data : result
      }
    })
    .catch((erro) => {
      return{
        status : 500,
        data : {
          mensage : "INTERNAL SERVER ERROR"
        }
      }
    })
  }

  async login (data: Pick<UserProps, "email"| "password">) : IDatabaseResponse{
    return await DBUSER.find({email: data.email, password : data.password}).select("-password")
    .then((result) => {
      return {
        status : 200,
        data : result
      }
    })
    .catch((error)=>{
      return{
        status : 500,
        data: {
          mensage: "INTERNAL SERVER ERROR"
        }
      }
    })

  }
}