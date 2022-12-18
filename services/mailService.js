const nodemailer = require('nodemailer');
const config = require('config');

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: config.get('mailerEmail'),
        pass: config.get('mailerPassword'),
    },
});

const sendEmail = (to, subject, text) => {

    const mailOptions = {
        from: config.get('mailerEmail'),
        to: to,
        subject: subject,
        text: text,
    };

    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error', error);
        } else {
            console.log('Message has been successfully sent');
        }
    });
};

module.exports = sendEmail;