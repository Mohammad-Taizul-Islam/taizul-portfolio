This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## SendGrid Email Setup

This portfolio includes a contact form that uses SendGrid to send emails. To set it up:

### 1. Get SendGrid API Key

1. Go to [SendGrid](https://sendgrid.com/) and create a free account
2. Navigate to Settings > API Keys
3. Click "Create API Key"
4. Choose "Restricted Access" and give it a name
5. Under "Mail Send", select "Full Access"
6. Click "Create & View"
7. Copy the API key (you won't be able to see it again)

### 2. Verify Sender Email

1. Go to Settings > Sender Authentication
2. Click "Verify a Single Sender"
3. Fill in your details with the email you want to send from
4. Check your email and click the verification link

### 3. Environment Variables

Create a `.env.local` file in your project root and add:

```env
SENDGRID_API_KEY=your_actual_api_key_here
SENDGRID_FROM_EMAIL=your-verified-sender@yourdomain.com
SENDGRID_TO_EMAIL=your-email@yourdomain.com
```

Replace:
- `your_actual_api_key_here` with your SendGrid API key
- `your-verified-sender@yourdomain.com` with your verified sender email
- `your-email@yourdomain.com` with the email where you want to receive contact form submissions

### 4. Testing

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for both the contact submission and confirmation email

### Features

- ✅ Form validation with Zod
- ✅ Email sent to you with contact details
- ✅ Confirmation email sent to the sender
- ✅ Error handling for common SendGrid issues
- ✅ Loading states and success feedback
- ✅ Responsive design
