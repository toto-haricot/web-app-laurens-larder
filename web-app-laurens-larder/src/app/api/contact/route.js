import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {

    const data = await req.json();
    console.log('Received data:', data);

    const { firstName, lastName, phone, email, requestType, message } = data;

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
  