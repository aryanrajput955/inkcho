import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, company, message, selectedServices } = await req.json();

    // Basic server-side validation
    if (!name || !email || !message || !selectedServices?.length) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Inkcho Contact Form <onboarding@resend.dev>',
      to: 'inkchodesigns@gmail.com',
      subject: `New Project Inquiry from ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Inter:wght@300;400;600&display=swap');
            </style>
          </head>
          <body style="margin: 0; padding: 0; background-color: #FFFBF5; font-family: 'Inter', sans-serif; color: #1a1a1a;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #FFFBF5;">
              <tr>
                <td align="center" style="padding: 40px 20px;">
                  <table role="presentation" width="100%" max-width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #ffffff; border: 1px solid #e8e2d9; border-radius: 32px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.03);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background-color: #9a1b40; padding: 40px; text-align: center;">
                        <h1 style="color: #ffffff; font-family: 'Playfair Display', serif; font-size: 28px; font-style: italic; margin: 0; letter-spacing: -0.02em;">New Project Brief</h1>
                        <p style="color: rgba(255,255,255,0.7); font-size: 11px; text-transform: uppercase; letter-spacing: 0.3em; margin: 15px 0 0 0; font-weight: 600;">Inkcho Studio Inquiry</p>
                      </td>
                    </tr>

                    <!-- Client Profile -->
                    <tr>
                      <td style="padding: 40px 40px 20px 40px;">
                        <table width="100%" cellspacing="0" cellpadding="0" border="0">
                          <tr>
                            <td width="50%" style="padding-bottom: 25px;">
                              <p style="color: #999; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; margin: 0 0 8px 0;">Client Name</p>
                              <p style="color: #1a1a1a; font-size: 16px; font-weight: 500; margin: 0;">${name}</p>
                            </td>
                            <td width="50%" style="padding-bottom: 25px;">
                              <p style="color: #999; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; margin: 0 0 8px 0;">Company</p>
                              <p style="color: #1a1a1a; font-size: 16px; font-weight: 500; margin: 0;">${company || 'N/A'}</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2" style="padding-bottom: 25px; border-top: 1px solid #f0f0f0; padding-top: 25px;">
                              <p style="color: #999; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; margin: 0 0 8px 0;">Email Address</p>
                              <a href="mailto:${email}" style="color: #1e4389; font-size: 16px; text-decoration: none; font-weight: 500; border-bottom: 1px solid rgba(30,67,137,0.2);">${email}</a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Services -->
                    <tr>
                      <td style="padding: 0 40px 30px 40px;">
                        <p style="color: #999; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; margin: 0 0 15px 0;">Services Requested</p>
                        <div style="display: block;">
                          ${selectedServices.map(service => `
                            <span style="display: inline-block; background-color: #f7f4ec; color: #9a1b40; font-size: 12px; font-weight: 600; padding: 6px 16px; border-radius: 100px; margin-right: 8px; margin-bottom: 8px; border: 1px solid rgba(154,27,64,0.1);">${service}</span>
                          `).join('')}
                        </div>
                      </td>
                    </tr>

                    <!-- Message -->
                    <tr>
                      <td style="padding: 0 40px 40px 40px;">
                        <div style="background-color: #fcfcfc; border: 1px solid #f0f0f0; border-radius: 20px; padding: 30px;">
                          <p style="color: #999; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; margin: 0 0 15px 0;">Project Idea & Message</p>
                          <p style="color: #4a4a4a; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-line;">${message}</p>
                        </div>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding: 0 40px 40px 40px; text-align: center;">
                        <div style="border-top: 1px solid #f0f0f0; padding-top: 30px;">
                          <p style="color: #999; font-size: 11px; margin: 0; letter-spacing: 0.1em;">Sent via Inkcho Studio Intelligence</p>
                          <p style="color: #9a1b40; font-family: 'Playfair Display', serif; font-size: 14px; font-style: italic; margin: 10px 0 0 0;">Stories that move. Experiences that connect.</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (err) {
    console.error('API Error:', err);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
