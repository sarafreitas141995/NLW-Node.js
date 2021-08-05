import {Request, Response} from "express"
import { CreateUserService } from "../services/CreateUserService";
import { SendEmailController }  from "../controllers/SendEmailController";


class CreateUserController {
    async handle(request: Request, response: Response){
        const {name, email, admin, password} = request.body;

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name, email, admin, password});

        const sendEmailController = new SendEmailController();

        const emailInfo = {
            "to": email,
            "from":"saraftfreitas@hotmail.com",
            "subject": "Foi registado com sucesso!",
            "text": "Obrigada pelo seu registo no nosso website."
        };

        
        sendEmailController.SendEmailCreatedUser(emailInfo.to, emailInfo.from, emailInfo.subject, emailInfo.text);
        
        

        return response.json(user);
    }
}

export {CreateUserController}