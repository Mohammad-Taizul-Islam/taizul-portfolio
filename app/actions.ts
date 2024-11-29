'use server'

import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
})

export async function sendEmail(formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  })

  if (!validatedFields.success) {
    return { error: 'Invalid form data' }
  }

  // Here you would integrate with your email service
  // For demo purposes, we'll just return success
  await new Promise(resolve => setTimeout(resolve, 1000))

  return { success: true }
}

