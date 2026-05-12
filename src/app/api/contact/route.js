import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    // Send email
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "yourgmail@gmail.com",
      subject: `New Message From ${name}`,
      replyTo: email,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Portfolio Message 🚀</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <div
            style="
              background:#f4f4f4;
              padding:15px;
              border-radius:8px;
            "
          >
            ${message}
          </div>
        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: "Failed to send email",
      },
      {
        status: 500,
      }
    );
  }
}