import { ListUserReceivedComplimentsService } from "../services/ListUserReceivedComplimentsService"
import {Response,Request} from "express"

class ListUserReceivedComplimentsController{

    async handle(request: Request, response:Response){

        const {user_id} = request;

        const listUserReceivedComplimentsService = new ListUserReceivedComplimentsService();
        const complimentList = await listUserReceivedComplimentsService.execute(user_id);

        return response.json(complimentList);
    }
}

export {ListUserReceivedComplimentsController}