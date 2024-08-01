const nodemailer = require('nodemailer');

// Configuración del transporte de correo
const transporter = nodemailer.createTransport({
    service: 'gmail', // Puedes usar cualquier servicio de correo
    auth: {
        user: 'zoilapillas51@gmail.com.com',
        pass: 'Orbita2024*'
    }
});

// Función para enviar correo al cliente
const sendClientEmail = (form) => {
    const mailOptions = {
        from: 'tu_correo@gmail.com',
        to: form.email,
        subject: 'Formulario de adopción recibido',
        html: `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Formulario Recibido</title>
                <style>
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f7f7f7; margin: 0; padding: 0; }
                    .container { max-width: 600px; margin: 0 auto; background-color: #fff; padding: 40px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); border-radius: 8px; }
                    .header { text-align: center; margin-bottom: 40px; }
                    .header img { max-width: 200px; margin-bottom: 20px; }
                    .header h1 { font-size: 32px; color: #EC4899; margin: 10px 0; }
                    .content { line-height: 1.6; color: #555; text-align: justify; }
                    .content h2 { font-size: 24px; color: #333; margin-bottom: 20px; }
                    .content p { margin: 15px 0; }
                    .button { display: inline-block; background-color: #EC4899; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 4px; margin-top: 20px; transition: background-color 0.3s ease; }
                    .button:hover { background-color: #D03270; }
                    .footer { text-align: center; margin-top: 40px; color: #888; font-size: 14px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6666/animals-block.png" alt="Animales">
                        <h1>ProyectoAdoptame <i class="fas fa-paw" style="color: #EC4899;"></i></h1>
                    </div>
                    <div class="content">
                        <h2>¡Formulario Recibido!</h2>
                        <p>Estimado/a ${form.name} ${form.lastName},</p>
                        <p>Hemos recibido tu formulario de solicitud de adopción. Actualmente está en proceso de revisión por parte de nuestro equipo. Esperamos proporcionarte una respuesta en un plazo máximo de 2 días hábiles.</p>
                        <p>Puedes verificar el estado de tu solicitud en cualquier momento haciendo clic en el siguiente enlace:</p>
                        <p><a href="http://localhost:4200/login" class="button">Verificar estado de solicitud <i class="fas fa-search"></i></a></p>
                        <p>Agradecemos tu paciencia y comprensión mientras completamos este proceso.</p>
                        <p>Un saludo,<br>El equipo de ProyectoAdoptame <i class="fas fa-heart" style="color: #EC4899;"></i></p>
                    </div>
                    <div class="footer">
                        <p>&copy; ProyectoAdoptame</p>
                    </div>
                </div>
            </body>
            </html>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
};

// Función para enviar correo al administrador
const sendAdminEmail = (form) => {
    const mailOptions = {
        from: 'tu_correo@gmail.com',
        to: 'admin@proyectoadoptame.com',
        subject: 'Nueva solicitud de adopción recibida',
        html: `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Nueva Solicitud Recibida</title>
                <style>
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f7f7f7; margin: 0; padding: 0; }
                    .container { max-width: 600px; margin: 0 auto; background-color: #fff; padding: 40px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); border-radius: 8px; }
                    .header { text-align: center; margin-bottom: 40px; }
                    .header img { max-width: 200px; margin-bottom: 20px; }
                    .header h1 { font-size: 32px; color: #EC4899; margin: 10px 0; }
                    .content { line-height: 1.6; color: #555; text-align: justify; }
                    .content h2 { font-size: 24px; color: #333; margin-bottom: 20px; }
                    .content p { margin: 15px 0; }
                    .button { display: inline-block; background-color: #EC4899; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 4px; margin-top: 20px; transition: background-color 0.3s ease; }
                    .button:hover { background-color: #D03270; }
                    .footer { text-align: center; margin-top: 40px; color: #888; font-size: 14px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6666/animals-block.png" alt="Animales">
                        <h1>Nueva Solicitud Recibida</h1>
                    </div>
                    <div class="content">
                        <h2>¡Nueva solicitud de adopción!</h2>
                        <p>Estimado/a Administrador/a,</p>
                        <p>Te informamos que ha llegado una nueva solicitud de adopción por parte de ${form.name} ${form.lastName}. Por favor, accede al panel administrativo para revisar y validar la información proporcionada en el formulario.</p>
                        <p>Es importante realizar este proceso lo antes posible para mantener el flujo de adopciones efectivo y asegurar que cada mascota encuentre un hogar amoroso.</p>
                        <p>Accede al panel administrativo usando el siguiente enlace:</p>
                        <p><a href="http://localhost:4200/admin/login" class="button">Acceder al Panel Administrativo <i class="fas fa-cogs"></i></a></p>
                        <p>Gracias por tu compromiso y dedicación en nuestro proyecto de adopción.</p>
                        <p>Saludos,<br>El equipo de ProyectoAdoptame <i class="fas fa-paw" style="color: #EC4899;"></i></p>
                    </div>
                    <div class="footer">
                        <p>&copy; ProyectoAdoptame</p>
                    </div>
                </div>
            </body>
            </html>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
};

module.exports = { sendClientEmail, sendAdminEmail };
