import { UserRepositories } from "../repositories/UsersRepositories"
import { getCustomRepository } from "typeorm"
import {classToPlain} from "class-transformer"


class ListUsersService{
    async execute(){
        const userRepositorie = getCustomRepository(UserRepositories);

        const users = await userRepositorie.find();

        return classToPlain(users);
    }
}

export {ListUsersService}