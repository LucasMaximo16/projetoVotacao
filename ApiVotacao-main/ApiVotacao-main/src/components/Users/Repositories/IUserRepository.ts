import { IDatabaseResponse } from "../../../types/IDatabaseResponse";
import { UserProps } from "../Model/User";

export interface IUserRepository {
  create: (data: Omit<UserProps, "_id">) => IDatabaseResponse;
  getUserById: (id: string) => IDatabaseResponse;
  deleteUserById: (id: string) => IDatabaseResponse;
  updateUser: (data: Omit<UserProps, "password">) => IDatabaseResponse;
  getEmailUser:(email:string) => IDatabaseResponse
  getPassowrdUser : (passord : string) => IDatabaseResponse
  getAllUser : (data : Omit<UserProps,"password"> ) => IDatabaseResponse
}