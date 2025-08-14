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
    console.log('Environment:', process.env.NODE_ENV);

    // Use environment variable for recipient email
    // IMPORTANT: In test mode, Resend can only send to verified emails
    const toEmail = process.env.RESEND_TO_EMAIL || 'elialberlopes@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    
    console.log('Sending email to:', toEmail);
    console.log('Sending from:', fromEmail);

    // Prepare email HTML with escaped content to prevent injection
    const escapedName = name.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const escapedEmail = email.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const escapedPhone = phone ? phone.replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';
    const escapedSubject = subject.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const escapedMessage = message.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const { data, error } = await resend.emails.send({
      from: `Site Dra. Marcella <${fromEmail}>`,
      to: toEmail,
      subject: `[Site Dra. Marcella] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #394240;">Nova mensagem do formulário de contato</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Nome:</strong> ${escapedName}</p>
            <p><strong>Email:</strong> ${escapedEmail}</p>
            ${escapedPhone ? `<p><strong>Telefone:</strong> ${escapedPhone}</p>` : ''}
            <p><strong>Assunto:</strong> ${escapedSubject}</p>
            <hr style="border: 1px solid #ddd; margin: 20px 0;">
            <p><strong>Mensagem:</strong></p>
            <p style="white-space: pre-wrap;">${escapedMessage}</p>
            <hr style="border: 1px solid #ddd; margin: 20px 0;">
            <p style="font-size: 12px; color: #666;">
              <strong>Dados do remetente original:</strong><br>
              Email: ${email}<br>
              ${phone ? `Telefone: ${phone}` : ''}
            </p>
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
      console.error('Erro detalhado do Resend:', JSON.stringify(error, null, 2));
      
      // Mensagem de erro mais específica baseada no tipo de erro
      let errorMessage = 'Ocorreu um erro ao enviar a mensagem.';
      
      if (error.message?.includes('verify a domain')) {
        errorMessage = 'O serviço de email está em modo de teste. Por favor, entre em contato pelo WhatsApp.';
      } else if (error.message?.includes('API key')) {
        errorMessage = 'Configuração de email inválida. Por favor, entre em contato pelo WhatsApp.';
      }
      
      return NextResponse.json(
        { error: errorMessage },
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
