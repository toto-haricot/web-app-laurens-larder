import { Resend } from 'resend';
import { promises as dns } from 'dns';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {

    const data = await req.json();
    const { firstName, lastName, phone, email, requestType, message } = data;

    const domain = email.split('@')[1];
    console.log(domain)

    // checking valid email
    try {
      const mxRecords = await dns.resolveMx(domain);
      if (!mxRecords || mxRecords.length === 0) {
        return new Response(JSON.stringify({ message: 'Email domain is not valid for receiving messages.' }), { status: 400 });
      }
    } catch (dnsErr) {
      console.error('DNS error:', dnsErr);
      return new Response(JSON.stringify({ message: 'Failed to validate email domain.' }), { status: 400 });
    }

    await resend.emails.send({
      from: 'Website Laurens Larder <onboarding@resend.dev>', // Use a verified sender
      to: 'thomas.waldura@outlook.com', // Replace with Lauren’s actual email
      subject: `New ${requestType} contact from ${firstName} ${lastName}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Request Type:</strong> ${requestType}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Resend error:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
  }
}
  