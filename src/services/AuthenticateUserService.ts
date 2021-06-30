import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UsersRepositories"

import { compare} from "bcryptjs"
import {sign} from "jsonwebtoken"

interface IAuthenticateRequest{
    email:string,
    password: string
}

class AuthenticateUserService{

    async execute({email, password}: IAuthenticateRequest){
        const userRepositories = getCustomRepository(UserRepositories);
        
        //Verificar se o email existe 
        const user = await userRepositories.findOne({
            email
        });
        
        if(!user){
            throw new Error("Email/Password Incorrect")
        }

        //verificar se a senha está correta

        const passwordMatch =await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/Password Incorrect")
        }

        //Gerar token

        const token = sign({
            email: user.email
        }, "74ce4d3033ffbcdff1e06839118ec7d4", {
            subject : user.id,
            expiresIn: "1d" //1 dia
        
        })

        return token;
    }
}

export {AuthenticateUserService}