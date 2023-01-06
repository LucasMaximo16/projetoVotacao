import { UserProps } from './../../Model/User';
import { UserRepository } from './../../Repositories/UserRepository';
export class GetAllUserUseCase{
    constructor(private userRepository: UserRepository){}

    async execute(data : UserProps){
        const getAllUser = await this.userRepository.getAllUser(data);
        
        return getAllUser
    }
}