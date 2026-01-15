"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
// import { createClient } from '@supabase/supabase-js' // Disabled - uncomment when configuring Supabase

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Configure Nodemailer transporter with Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Supabase client disabled - uncomment and configure environment variables to enable
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// )

export async function submitContactForm(formData: FormData) {
  try {
    const validatedFields = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    if (!validatedFields.success) {
      const errors = validatedFields.error.errors
        .map((err) => err.message)
        .join(", ");
      return { error: `Validation failed: ${errors}` };
    }

    const { name, email, message } = validatedFields.data;

    // Log the submission
    console.log("Contact form submission:", { name, email, message });

    // Send email notification to admin using Nodemailer with Gmail
    if (
      process.env.GMAIL_USER &&
      process.env.GMAIL_APP_PASSWORD &&
      process.env.ADMIN_EMAIL
    ) {
      try {
        const mailOptions = {
          from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,
          to: process.env.ADMIN_EMAIL,
          replyTo: email, // Allow replying directly to the sender
          subject: `New Contact Form Submission from ${name}`,
          text: `You have received a new contact form submission:

Name: ${name}
Email: ${email}
Message:
${message}

---
This message was sent from your portfolio contact form.`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333;">New Contact Form Submission</h2>
              <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
              <p style="color: #666; margin-top: 20px; font-size: 12px;">This message was sent from your portfolio contact form.</p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to admin via Gmail");
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        // Don't fail the submission if email fails, just log it
      }
    } else {
      console.warn(
        "Gmail not configured. Set GMAIL_USER, GMAIL_APP_PASSWORD, and ADMIN_EMAIL environment variables."
      );
    }

    return {
      success: true,
      message:
        "Thank you for reaching out! Your message has been received and I will get back to you soon.",
    };

    // Original Supabase code (commented out):
    // const { error } = await supabase
    //   .from('contact_submissions')
    //   .insert({
    //     name,
    //     email,
    //     message
    //   })
    //
    // if (error) {
    //   console.error('Error saving contact submission:', error)
    //   return { error: 'Failed to submit your message. Please try again later.' }
    // }
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
}
