
'use server'

import { z } from 'zod'
import sgMail from '@sendgrid/mail'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
})

// Initialize SendGrid with the API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function sendEmail(formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  })

  if (!validatedFields.success) {
    return { error: 'Invalid form data' }
  }

  const { name, email, message } = validatedFields.data

  const msg = {
    to: 'your-email@example.com', // Replace with your email address
    from: 'your-verified-sender@example.com', // Replace with your SendGrid verified sender
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<strong>Name:</strong> ${name}<br>
           <strong>Email:</strong> ${email}<br>
           <strong>Message:</strong> ${message}`,
  }

  try {
    await sgMail.send(msg)
    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { error: 'Failed to send email. Please try again later.' }
  }
}


