import { UserRepositories } from "../repositories/UsersRepositories"
import {getCustomRepository} from "typeorm"

interface IUserRequest {
    name: string, 
    email: string, 
    admin?: boolean
}

class CreateUserService{
 async execute({name, email, admin}: IUserRequest) {
    const usersRepository = getCustomRepository(UserRepositories);

    if(!email){
        throw new Error("Email Incorrect");
    }

    const userAlreadyEcists = await usersRepository.findOne({email});

    if(userAlreadyEcists){
        throw new Error("User already exists!");
    }

    const user = usersRepository.create({name, email, admin});

    await usersRepository.save(user);
    return user;
 }
}

export {CreateUserService}