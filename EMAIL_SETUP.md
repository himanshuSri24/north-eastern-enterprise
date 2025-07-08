# Mailgun Email Setup Instructions

## Overview

The contact form now sends emails to `himanshu20032002@gmail.com` using Mailgun with a secure API route implementation.

## Setup Steps

### 1. Create a Mailgun Account

1. Go to [https://www.mailgun.com/](https://www.mailgun.com/)
2. Sign up for a free account (free tier includes 5,000 emails/month)
3. Verify your email address
4. Complete the account setup

### 2. Get Your Mailgun Credentials

1. **API Key**: Go to your Mailgun dashboard → Settings → API Keys
   - Copy your "Private API key" (starts with `key-`)
2. **Domain**: Go to Sending → Domains
   - For testing: Use the sandbox domain (e.g., `sandbox123abc.mailgun.org`)
   - For production: Add and verify your own domain

### 3. Configure Environment Variables

Update the `.env.local` file with your Mailgun credentials:

```env
# Your Mailgun API Key (from dashboard)
MAILGUN_API_KEY=key-your-private-api-key-here

# Your Mailgun domain (sandbox for testing)
MAILGUN_DOMAIN=sandbox123abc.mailgun.org

# Optional: Custom from email (must be from verified domain)
MAILGUN_FROM_EMAIL=contact@yourdomain.com
```

### 4. Testing Setup (Sandbox Domain)

For immediate testing, use your sandbox domain:

```env
MAILGUN_API_KEY=key-your-actual-api-key
MAILGUN_DOMAIN=sandbox123abc.mailgun.org
# MAILGUN_FROM_EMAIL can be omitted for sandbox testing
```

**Note**: Sandbox domains can only send to authorized recipients. You'll need to add `himanshu20032002@gmail.com` to your authorized recipients list in the Mailgun dashboard.

### 5. Production Setup (Custom Domain)

For production with your own domain:

1. **Add Your Domain** in Mailgun dashboard → Sending → Domains → Add New Domain
2. **Configure DNS Records** (MX, TXT, CNAME) as shown in Mailgun dashboard
3. **Wait for Verification** (can take up to 24-48 hours)
4. **Update Environment Variables**:
   ```env
   MAILGUN_API_KEY=key-your-actual-api-key
   MAILGUN_DOMAIN=mg.yourdomain.com
   MAILGUN_FROM_EMAIL=contact@yourdomain.com
   ```

### 6. Testing

1. Start your development server: `npm run dev`
2. Navigate to `/contact-us`
3. Fill out and submit the contact form
4. Check `himanshu20032002@gmail.com` for the email
5. Check Mailgun dashboard → Sending → Logs for delivery status

## Security Features

- ✅ Environment variables for API credentials
- ✅ Server-side API route (credentials never exposed to client)
- ✅ Input validation and sanitization
- ✅ Error handling and user feedback
- ✅ Mailgun's built-in security and deliverability features

## Troubleshooting

### Common Issues

1. **"Email service not configured"**: Check that MAILGUN_API_KEY and MAILGUN_DOMAIN are set
2. **"Forbidden"**: Verify your API key is correct and has sending permissions
3. **Sandbox restrictions**: For sandbox domains, ensure recipient is in authorized recipients list
4. **Domain not verified**: For custom domains, complete DNS verification

### Sandbox Testing

- Sandbox domains are free and perfect for testing
- Add authorized recipients in Mailgun dashboard → Sending → Domains → [Your Sandbox] → Authorized Recipients
- No domain verification required for sandbox

### Debug Mode

- Check browser console and server logs when submitting the form
- Check Mailgun dashboard → Sending → Logs for detailed delivery information
- Mailgun provides detailed error messages and delivery tracking

## Mailgun Free Tier Benefits

- 5,000 emails per month free
- No credit card required for sandbox testing
- Excellent deliverability rates
- Built-in analytics and tracking
- Easy scaling for production

## Email Content

The email includes:

- Sender's name (if provided)
- Email/Phone contact information
- Organization
- Subject selection
- Detailed query message
- Professional formatting with both HTML and plain text versions
