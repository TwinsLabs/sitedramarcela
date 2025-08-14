import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

/**
 * Email API endpoint using Resend
 * 
 * IMPORTANT FOR PRODUCTION:
 * 1. Verify your domain at https://resend.com/domains
 * 2. Update the 'from' email to use your verified domain (e.g., 'contato@yourdomain.com')
 * 3. Update the 'to' email to 'dramarcellaribeirovieira@gmail.com' or your production email
 * 
 * Currently in test mode:
 * - Can only send to verified email addresses
 * - Using 'onboarding@resend.dev' as the sender
 */
export async function POST(req: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, phone, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Por favor, preencha todos os campos obrigatórios' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Por favor, forneça um email válido' },
        { status: 400 }
      );
    }

    console.log('Attempting to send email with subject:', subject);

    // For testing, use the verified email address
    // In production, you'll need to verify your domain at resend.com/domains
    const toEmail = process.env.NODE_ENV === 'development' 
      ? 'elialberlopes@gmail.com'  // Use verified email in development
      : 'dramarcellaribeirovieira@gmail.com';  // Production email

    const { data, error } = await resend.emails.send({
      from: 'Site Dra. Marcella <onboarding@resend.dev>',
      to: toEmail,
      subject: `[Site Dra. Marcella] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #394240;">Nova mensagem do formulário de contato</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ''}
            <p><strong>Assunto:</strong> ${subject}</p>
            <hr style="border: 1px solid #ddd; margin: 20px 0;">
            <p><strong>Mensagem:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
      text: `
Nome: ${name}
Email: ${email}
${phone ? `Telefone: ${phone}` : ''}
Assunto: ${subject}

Mensagem:
${message}
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Erro ao enviar email:', error);
      return NextResponse.json(
        { error: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      {
        success: true,
        message: 'Mensagem enviada com sucesso!',
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro inesperado:', error);
    return NextResponse.json(
      { error: 'Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
