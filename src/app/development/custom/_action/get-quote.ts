"use server";

import { Resend } from "resend";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  message: z.string(),
});

export const getQuote = async (values: z.infer<typeof FormSchema>) => {
  const validatedFields = FormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, email, phone, message } = validatedFields.data;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "TalentSync Team <contact@talentsync.work>",
      to: "contact@talentsync.work",
      subject: "New Quote Request",
      html: `
          <h1>New Quote Request</h1>
          
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
          
          <p>Best Regards,</p>
          <p>TalentSync</p>
          `,
    });
  } catch (error) {
    return {
      error: "Failed to send quote request",
    };
  }

  try {
    await resend.emails.send({
      from: "TalentSync Team <contact@talentsync.work>",
      to: email,
      subject: "Thank you for your quote request",
      html: `
          <h1>Thank you for your quote request</h1>
          
          <p>Hi ${name},</p>
          <p>Thank you for reaching out to us. We will get back to you as soon as possible.</p>
          <p> In the meantime, you can check book discovery call at <a href='https://cal.com/deependra-kumar-4pxcer/30min'>https://cal.com/deependra-kumar-4pxcer/30min</a></p>

          
          <p>Best Regards,</p>
          <p>TalentSync</p>
          `,
    });
  } catch (error) {
    return {
      error: "Failed to send message to your email",
    };
  }

  return {
    success: "Quote request sent successfully",
  };
};
