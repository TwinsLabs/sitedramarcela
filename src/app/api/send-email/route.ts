import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

/**
 * Email API endpoint using Resend
 * 
 * CONFIGURATION:
 * - Set RESEND_API_KEY in environment variables
 * - Set RESEND_TO_EMAIL in environment variables (recipient email)
 * 
 * FOR PRODUCTION WITH CUSTOM DOMAIN:
 * 1. Verify your domain at https://resend.com/domains
 * 2. Update the 'from' email to use your verified domain (e.g., 'contato@yourdomain.com')
 * 3. Update RESEND_TO_EMAIL to 'dramarcellaribeirovieira@gmail.com'
 * 
 * Currently in test mode:
 * - Can only send to verified email addresses (set in RESEND_TO_EMAIL)
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

    // Use environment variable for recipient email
    // This allows easy configuration for both development and production
    const toEmail = process.env.RESEND_TO_EMAIL || 'elialberlopes@gmail.com';
    
    console.log('Sending email to:', toEmail);

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
