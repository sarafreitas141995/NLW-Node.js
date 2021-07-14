import nodemailer from 'nodemailer';

interface IEmailRequest {
    to: string,
    from: string,
    subject: boolean,
    text: string
}


var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "email@gmail.com",
        pass: "****"
    }
});

class SendEmailService {

    async execute({ to, from, subject, text }: IEmailRequest) {

        var message = {
            from: from,
            to: to,
            subject: subject,
            text: text
        };

        var response = "";

         transporter.sendMail(message, function (err, info) {
            if (err) {
                response = err;
            } else {
                response = info;
            }
        });

        return response;
    };
}

export { SendEmailService }