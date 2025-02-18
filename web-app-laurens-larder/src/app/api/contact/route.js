export async function POST(req) {
    try {
      const data = await req.json();
  
      // Here, you can integrate an email service (e.g., Nodemailer, Resend, SendGrid)
      console.log("Received contact form data:", data);
  
      return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ message: "Error processing form" }), { status: 500 });
    }
  }
  