# Gmail App Password Setup Guide

## Current Status

✅ Code updated to send emails using Nodemailer with Gmail
✅ Admin email configured: tazul.sust.cse@gmail.com
❌ Gmail App Password needed

## Why Gmail App Password?

For security reasons, Gmail requires you to use an **App Password** instead of your regular Gmail password when accessing your account from third-party applications like Nodemailer.

## Prerequisites

⚠️ **2-Factor Authentication (2FA) must be enabled** on your Gmail account to create App Passwords.

---

## Steps to Get Gmail App Password

### 1. Enable 2-Factor Authentication (if not already enabled)

1. Go to: https://myaccount.google.com/security
2. Under "How you sign in to Google", click on **2-Step Verification**
3. Follow the prompts to set up 2FA using your phone number
4. Complete the verification process

### 2. Generate an App Password

1. Go to: https://myaccount.google.com/apppasswords

   - **OR** Go to Google Account → Security → 2-Step Verification → App passwords (at the bottom)

2. You might need to sign in again for security

3. Under "Select app", you'll see a dropdown:
   - Select **"Mail"** (or choose "Other" for a custom name)
4. Under "Select device":

   - Choose **"Other (Custom name)"**
   - Enter: **"Portfolio Contact Form"** (or any name you prefer)

5. Click **"Generate"**

6. **Google will display a 16-character password** like:

   ```
   abcd efgh ijkl mnop
   ```

7. **COPY THIS PASSWORD IMMEDIATELY** - You won't be able to see it again!
   - Remove the spaces when copying: `abcdefghijklmnop`

### 3. Add App Password to Your Project

1. Navigate to your project directory:

   ```bash
   cd /home/user/Downloads/Projects/taizul-portfolio
   ```

2. Open (or create) the `.env.local` file

3. Add these lines with your actual App Password:

   ```env
   GMAIL_USER="tazul.sust.cse@gmail.com"
   GMAIL_APP_PASSWORD="abcdefghijklmnop"
   ADMIN_EMAIL="tazul.sust.cse@gmail.com"
   ```

   Replace `abcdefghijklmnop` with your actual 16-character App Password (no spaces)

### 4. Restart Your Development Server

```bash
# Stop the current server (Ctrl+C in the terminal)
# Then restart it:
npm run dev
```

---

## How It Works

When someone submits the contact form:

1. ✅ Form data is validated
2. ✅ Logged to console (for debugging)
3. ✅ Email is sent to `tazul.sust.cse@gmail.com` using Gmail SMTP
4. ✅ User sees success message
5. ✅ You can reply directly to the sender's email

---

## Testing

After setup, test by:

1. Open your portfolio: http://localhost:3000
2. Navigate to the Contact section
3. Fill out the contact form with:
   - Your name
   - Your email
   - A test message
4. Submit the form
5. Check `tazul.sust.cse@gmail.com` inbox
6. You should receive a nicely formatted email!

---

## Troubleshooting

### Email not sending?

**Check the following:**

1. **App Password is correct** in `.env.local`

   - No spaces in the password
   - All 16 characters copied correctly

2. **2FA is enabled** on your Gmail account

   - App Passwords won't work without 2FA

3. **Environment variables are loaded**

   - Restart your dev server after editing `.env.local`
   - Run: `npm run dev`

4. **Check console for errors**

   - Look for error messages in the terminal
   - Common error: "Invalid login: 535-5.7.8 Username and Password not accepted"
     - This means the App Password is incorrect

5. **Gmail account settings**
   - Make sure "Less secure app access" is NOT needed (App Passwords are secure!)
   - Ensure your Gmail account is not locked or suspended

### "Invalid login" error?

- Double-check your App Password in `.env.local`
- Make sure you're using the App Password, NOT your regular Gmail password
- Regenerate a new App Password if needed

### Still not working?

1. Check Gmail security settings: https://myaccount.google.com/security
2. Look for any security alerts or blocked sign-in attempts
3. Try generating a new App Password
4. Check the server console for detailed error messages

---

## Security Notes

✅ **App Passwords are secure** - They're app-specific and can be revoked anytime
✅ **Never commit `.env.local`** - It's already in `.gitignore`
⚠️ **Don't share your App Password** - Treat it like a regular password
⚠️ **Revoke unused App Passwords** - Go to your Google Account to manage them

---

## Benefits of Using Gmail with Nodemailer

✅ **100% FREE** - No signup, no API keys, no limits for moderate use
✅ **Simple setup** - Just need an App Password
✅ **Reliable delivery** - Gmail has excellent deliverability
✅ **Familiar interface** - Receive emails in your regular Gmail inbox
✅ **Direct replies** - Reply to form submissions directly from Gmail
✅ **No verification needed** - You already own the email address

---

## Need Help?

If you're still having issues:

1. Check the terminal/console for error messages
2. Verify all three environment variables are set in `.env.local`:
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`
   - `ADMIN_EMAIL`
3. Make sure 2FA is enabled on your Google Account
4. Try generating a fresh App Password

**Google's Official Guide:** https://support.google.com/accounts/answer/185833
