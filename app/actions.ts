'use server'

import { z } from 'zod'
import { createClient } from '@supabase/supabase-js'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function submitContactForm(formData: FormData) {
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

    const { error } = await supabase
      .from('contact_submissions')
      .insert({
        name,
        email,
        message
      })

    if (error) {
      console.error('Error saving contact submission:', error)
      return { error: 'Failed to submit your message. Please try again later.' }
    }

    return {
      success: true,
      message: 'Thank you for reaching out! Your message has been received and I will get back to you soon.'
    }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { error: 'An unexpected error occurred. Please try again later.' }
  }
}