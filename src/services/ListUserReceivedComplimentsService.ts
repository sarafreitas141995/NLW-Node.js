import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { getCustomRepository } from "typeorm"

class ListUserReceivedComplimentsService{
    async execute(user_id:string){
        const complimentsRepository = getCustomRepository(ComplimentsRepositories);
        const compliments = await complimentsRepository.find({
        where:{
            user_receiver: user_id
        }, 
        relations:["userSender", "userReceiver", "tag"]
        });

        return compliments;
    }
    
}

export {ListUserReceivedComplimentsService}