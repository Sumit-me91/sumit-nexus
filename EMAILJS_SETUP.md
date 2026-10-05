# Setting Up Direct Email Sending with EmailJS

This guide will help you set up EmailJS to enable direct email sending from your portfolio's contact form without requiring users to open their email client.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. The free plan allows 200 emails per month, which is sufficient for most portfolio websites

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps to connect your email account
5. Name your service (e.g., "Portfolio Contact")
6. Note down the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{user_name}}` - The sender's name
   - `{{user_email}}` - The sender's email
   - `{{subject}}` - The email subject
   - `{{message}}` - The email message
4. Example template:
   ```
   From: {{user_name}} ({{user_email}})
   Subject: {{subject}}

   Message:
   {{message}}
   ```
5. Save your template
6. Note down the **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to "Account" > "API Keys" in your EmailJS dashboard
2. Copy your **Public Key** (you'll need this for the next step)

## Step 5: Update Your Contact Component

1. Open `src/components/Contact.tsx`
2. Replace the placeholder values with your actual EmailJS credentials:
   - Replace `'YOUR_PUBLIC_KEY'` with your actual Public Key (in two places)
   - Replace `'service_id'` with your actual Service ID
   - Replace `'template_id'` with your actual Template ID

## Testing the Integration

1. Run your portfolio locally
2. Go to the Contact section
3. Fill out the form and submit
4. You should receive an email at your configured email address
5. The WhatsApp integration will also open with the message

## Troubleshooting

- **Emails not arriving**: Check your spam folder and verify your EmailJS credentials
- **Console errors**: Check the browser console for any error messages from EmailJS
- **Form not submitting**: Make sure the form field names match the template variables

## Security Considerations

- EmailJS uses your public key which is safe to include in client-side code
- The service handles the email sending securely without exposing your email credentials
- For high-volume applications, consider upgrading to a paid plan 