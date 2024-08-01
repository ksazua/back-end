require('dotenv').config();
const nodemailer = require('nodemailer');
// Crear un transportador de nodemailer usando Mailtrap
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

// Función para enviar correo electrónico
const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: 'noreply@yourdomain.com', // Email desde el cual se enviarán los correos
        to: to,
        subject: subject,
        text: text
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Failed to send email', error);
    }
};

module.exports = sendEmail;
