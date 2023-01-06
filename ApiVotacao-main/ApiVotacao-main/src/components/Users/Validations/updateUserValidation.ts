import { IUpdateUserRequestDTO } from "../UseCases/UpdateUser/IUpdateUserRequestDTO";

export function updateUserValidation(data: IUpdateUserRequestDTO) {
  if(!data.id)
    throw new Error('Invalid email');
  if(!data.email)
    throw new Error('Invalid email');
  if(!data.name)
    throw new Error('Invalid name');
  return true;
}