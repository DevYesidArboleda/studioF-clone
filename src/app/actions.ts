'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Gracias por contactarnos',
      text: `Hola ${name},\n\nHemos recibido tu mensaje:\n\n${message}\n\nNos pondremos en contacto contigo pronto.\n\nSaludos,\nEquipo de Studio F`,
    })

    return { message: 'Correo enviado con éxito' }
  } catch (error) {
    console.error('Error al enviar el correo:', error)
    return { message: 'Error al enviar el correo. Por favor, inténtelo de nuevo.' }
  }
}

