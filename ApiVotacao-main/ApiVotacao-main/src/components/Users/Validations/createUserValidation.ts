import { ICreateUserResquestDTO } from "../UseCases/CreateUser/ICreateUserRequestDTO";

export function createUserValidation(data: ICreateUserResquestDTO) {
  if(!data.email)
    throw new Error('Invalid email');
  if(!data.name)
    throw new Error('Invalid name');
  if(!data.password)
    throw new Error('Invalid password');
  if(data.password.length < 8 )
    throw new Error('Password must contain a minimum of 8 characters')
  if(data.password.length > 24 )
    throw new Error('Password must container a maximum of 24 characters')

  return true;
}