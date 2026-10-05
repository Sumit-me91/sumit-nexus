# Setting Up Real-Time Contact Messaging

This portfolio includes real-time messaging functionality that sends messages directly to your email and WhatsApp when someone submits the contact form. Follow these instructions to set it up.

## Email Setup with EmailJS

1. **Create an EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
   - The free plan allows 200 emails per month

2. **Create an Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service" and connect your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps

3. **Create an Email Template**
   - Go to "Email Templates" and click "Create New Template"
   - Design your email template using these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message
   - Save your template

4. **Update Configuration**
   - Open `src/utils/emailjs.ts`
   - Replace the placeholder values with your actual EmailJS credentials:
     - `USER_ID`: Found in Account > API Keys
     - `SERVICE_ID`: Found in Email Services
     - `TEMPLATE_ID`: Found in Email Templates

## WhatsApp Integration

The WhatsApp integration works by opening the WhatsApp API URL with a pre-formatted message. This doesn't require any additional setup, as it uses your phone number that's already configured in the Contact component.

When a user submits the form, they will:
1. See a success message on the website
2. A new WhatsApp chat will open in a new tab with a pre-formatted message containing their contact information and message

## Testing the Integration

1. Run your portfolio locally
2. Go to the Contact section
3. Fill out the form and submit
4. You should:
   - Receive an email with the message (check your inbox or spam folder)
   - See a WhatsApp chat open with the message

## Troubleshooting

- **Emails not arriving**: Check your spam folder, verify your EmailJS credentials, and ensure your email service is connected properly
- **WhatsApp not opening**: Make sure your phone number is correctly formatted in the Contact component (country code without + sign, followed by your number)

## Security Considerations

- The current implementation is client-side only, which is fine for a portfolio but not ideal for high-security applications
- For production use with sensitive data, consider adding a server-side component to handle the email sending 