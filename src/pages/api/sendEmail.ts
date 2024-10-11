import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configura el transporte SMTP con tu proveedor de correo (por ejemplo, Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Tu correo
        pass: process.env.EMAIL_PASS, // Contraseña de la app generada por Google
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER, // Tu correo donde recibirás el mensaje
        subject: `Nuevo mensaje de ${name}`,
        text: message,
        html: `<p>Nombre: ${name}</p><p>Correo: ${email}</p><p>Mensaje: ${message}</p>`,
      });

      res.status(200).json({ success: true });
    } catch (error: unknown) {
      // Loguear el error para la depuración
      console.error('Error al enviar el correo:', error);

      // Comprobar si el error es un objeto con una propiedad 'message'
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      res.status(500).json({ error: 'Error al enviar el correo', details: errorMessage });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
