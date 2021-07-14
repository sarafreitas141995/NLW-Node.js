import {Request, Response} from "express"
import { SendEmailService } from "../services/SendEmailService";


class SendEmailController {
    async handle(request: Request, response: Response){
        const {to, from, subject, text} = request.body;

        const sendEmailService = new SendEmailService();
        const user = await sendEmailService.execute({to, from, subject, text});

        return response.json(user);
    }
}

export {SendEmailController}