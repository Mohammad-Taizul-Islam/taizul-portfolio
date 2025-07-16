'use server'

import { z } from 'zod'
import sgMail from '@sendgrid/mail'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

// Initialize SendGrid with the API key
if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not defined in environment variables')
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function sendEmail(formData: FormData) {
  try {
    const validatedFields = contactSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    })

    if (!validatedFields.success) {
      const errors = validatedFields.error.errors.map(err => err.message).join(', ')
      return { error: `Validation failed: ${errors}` }
    }

    const { name, email, message } = validatedFields.data

    // Email to you (the recipient)
    const msg = {
      to: process.env.SENDGRID_TO_EMAIL || 'your-email@example.com',
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@yourdomain.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
New contact form submission:

Name: ${name}
Email: ${email}
Message: ${message}

---
This message was sent from your portfolio contact form.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #007bff; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
      replyTo: email // This allows you to reply directly to the sender
    }

    // Optional: Send confirmation email to the sender
    const confirmationMsg = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@yourdomain.com',
      subject: 'Thank you for contacting me!',
      text: `
Hi ${name},

Thank you for reaching out! I've received your message and will get back to you as soon as possible.

Your message:
${message}

Best regards,
Taizul Islam
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for contacting me!</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <p>Best regards,<br>
          <strong>Taizul Islam</strong><br>
          Full Stack Developer</p>
        </div>
      `
    }

    // Send both emails
    await Promise.all([
      sgMail.send(msg),
      sgMail.send(confirmationMsg)
    ])

    return { success: true, message: 'Email sent successfully!' }
  } catch (error) {
    console.error('Error sending email:', error)
    
    // Handle specific SendGrid errors
    if (error && typeof error === 'object' && 'response' in error) {
      const sgError = error as any
      if (sgError.response?.status === 401) {
        return { error: 'Email service authentication failed. Please check API key.' }
      } else if (sgError.response?.status === 403) {
        return { error: 'Email service access denied. Please verify sender email.' }
      }
    }
    
    return { error: 'Failed to send email. Please try again later.' }
  }
}