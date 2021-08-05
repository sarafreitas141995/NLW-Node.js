import {Request, Response} from "express"
import { SendEmailService } from "../services/SendEmailService";


class SendEmailController {

    async SendEmailCreatedUser(email: string, to: string, from: string, subject:string){
        //const {to, from, subject, text} = request.body;

        const sendEmailService = new SendEmailService();
        const emailInfo = await sendEmailService.execute({to, from, subject, email});

        return emailInfo;
    }
}

export {SendEmailController}