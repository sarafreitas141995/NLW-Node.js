import { ListUserSenderComplimentsService } from "../services/ListUserSenderComplimentsService"
import {Response,Request} from "express"

class ListUserSendeComplimentsController{

    async handle(request: Request, response:Response){

        const {user_id} = request;

        const listUserSendComplimentsService = new ListUserSenderComplimentsService();
        const complimentList = await listUserSendComplimentsService.execute(user_id);

        return response.json(complimentList);
    }
}

export {ListUserSendeComplimentsController}