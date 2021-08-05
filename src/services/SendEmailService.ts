import nodemailer from 'nodemailer';

interface IEmailRequest {
    to: string,
    from: string,
    email: string,
    subject: string
}


//var transporter = nodemailer.createTransport({
//    host: "smtp-mail.outlook.com",
//    port: 587,
//    auth: {
//        user: "saraftfreitas@hotmail.com",
//        pass: "****"
//    }
//});

const  transporter = nodemailer.createTransport({
    service: "Hotmail",
      auth: {
        user: "USERNAME",
        pass: "PASSWORD"
      }
  });

class SendEmailService {

    async execute({ to, from, subject, email }: IEmailRequest) {

        var message = {
            from: from,
            to: to,
            subject: subject,
            email: email
        };

        var response = "";

         transporter.sendMail(message, function (err, info) {
            if (err) {
                response = "Email with a problem." + err;
            } else {
                response = "Email sent. " + info;
            }
        });

        return response;
    };
}

export { SendEmailService }