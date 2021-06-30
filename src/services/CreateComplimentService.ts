import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UserRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest{
    tag_id: string;
    user_sender : string;
    user_receiver : string;
    message: string;
}

class CreateComplimentsService{

    async execute({tag_id,user_receiver,user_sender,message}: IComplimentRequest){
        const complimentsRepositories =  getCustomRepository(ComplimentsRepositories);
        const userRepositories = getCustomRepository(UserRepositories);

        if(user_sender === user_receiver){
            throw new Error("Incorrect user receiver");
        }

        const userReceiverExists = await userRepositories.findOne(user_receiver);

        if(!userReceiverExists){
            throw new Error("User receiver doesn't exists!")
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await complimentsRepositories.save(compliment);
        return compliment;


    }
}

export{CreateComplimentsService}