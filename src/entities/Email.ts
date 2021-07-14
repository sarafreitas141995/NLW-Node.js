import { v4 as uuid} from "uuid";

class Email{
    readonly id: string;
    from: string;
    to: string;
    subject:boolean;
    text:Date;

    constructor(){
        if(!this.id){
            this.id =uuid();
        }
    }
}

export  {Email};
