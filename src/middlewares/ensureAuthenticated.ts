import {Request,Response, NextFunction} from "express"
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}

export function ensureAuthenticated( request: Request, response: Response, next:NextFunction){
    //Receber o token 
    const authToken = request.headers.authorization;
    
    //Validar se token está preenchido
    if(!authToken){
        return response.status(401).end();
    }

    //Validar se token é valido 
    const [,token]  = authToken.split(" ");

    try{
        const {sub } = verify(token, "74ce4d3033ffbcdff1e06839118ec7d4") as IPayload;

        request.user_id = sub;

        return next();
    }catch(err){
        return response.status(401).end();
    }
   

    //Recuperar informações do usuário
    return next();
}