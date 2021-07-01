import {Request, Response} from "express"
import { ListUsersService } from "../services/ListUsersService"

class ListUsersController{
    async handle(request:Request, response:Response){
        const listuserService = new ListUsersService();

        const users = await listuserService.execute();

        return response.json(users);
    }
}

export {ListUsersController}