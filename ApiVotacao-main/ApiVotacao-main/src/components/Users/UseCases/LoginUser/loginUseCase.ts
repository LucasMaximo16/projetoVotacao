import md5 from 'md5';
import { UserRepository } from './../../Repositories/UserRepository';
import { ILoginDTO } from './ILoginDTO';

export default class LoginUseCase {
    constructor (private userRepository : UserRepository){}

    async execute (data : ILoginDTO){

        if(!data.email)
            throw new Error("Email não encontrado")

        if(!data.password)
            throw new Error("Password não encontrado")

        const cryptograpyPassoword = md5(data.password)
        const result =  await this.userRepository.login({...data, password:cryptograpyPassoword})

        return result
    }
}