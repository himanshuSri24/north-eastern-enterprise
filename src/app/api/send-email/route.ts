import { NextRequest, NextResponse } from "next/server";
import Mailgun from "mailgun.js";
import formData from "form-data";

interface ContactFormData {
  name: string;
  emailPhone: string;
  organization: string;
  subject: string;
  query: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, emailPhone, organization, subject, query } = body;

    // Validate required fields
    if (!emailPhone || !organization || !subject || !query) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
      console.error("Missing Mailgun configuration");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Initialize Mailgun
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY,
    });

    // Prepare email content
    const messageData = {
      from: `North Eastern Enterprise <${
        process.env.MAILGUN_FROM_EMAIL ||
        `noreply@${process.env.MAILGUN_DOMAIN}`
      }>`,
      to: "himanshu20032002@gmail.com",
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name || "Not provided"}</p>
        <p><strong>Email/Phone:</strong> ${emailPhone}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Query:</strong></p>
        <p>${query.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>Sent from North Eastern Enterprise website contact form</em></p>
      `,
      text: `
New Contact Form Submission

Name: ${name || "Not provided"}
Email/Phone: ${emailPhone}
Organization: ${organization}
Subject: ${subject}
Query: ${query}

---
Sent from North Eastern Enterprise website contact form
      `,
    };

    // Send email via Mailgun
    await mg.messages.create(process.env.MAILGUN_DOMAIN, messageData);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mailgun sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
