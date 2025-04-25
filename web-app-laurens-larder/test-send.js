import { Resend } from "resend";

const resend = new Resend('re_HDYdKJ9e_3ixRfXyCvi6AkEXY8CKK9qE1');

async function testSend() {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: 'thomas.waldura@outlook.com',
      subject: "Test email",
      html: "<p>This is a test from Resend</p>",
    });
    console.log("Test email sent!");
  } catch (e) {
    console.error("Error sending test email:", e);
  }
}

testSend();