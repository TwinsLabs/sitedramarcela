import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * Email API endpoint usando Gmail SMTP
 * 
 * CONFIGURAÇÃO NECESSÁRIA:
 * 1. Ativar "Acesso a app menos seguro" no Gmail OU
 * 2. Usar "Senha de App" (recomendado):
 *    - Ative verificação em 2 etapas no Gmail
 *    - Vá para myaccount.google.com/apppasswords
 *    - Crie uma senha de app para "Mail"
 *    - Use essa senha no GMAIL_APP_PASSWORD
 * 
 * Variáveis de ambiente necessárias:
 * - GMAIL_USER: seu email do Gmail
 * - GMAIL_APP_PASSWORD: senha de app do Gmail
 */
export async function POST(req: NextRequest) {
  try {
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

    // Se não tiver credenciais do Gmail, usa Resend como fallback
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.log('Gmail não configurado, usando Resend como fallback');
      
      // Importa Resend dinamicamente
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      const { data, error } = await resend.emails.send({
        from: 'Site Dra. Marcella <onboarding@resend.dev>',
        to: process.env.RESEND_TO_EMAIL || 'elialberlopes@gmail.com',
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
        replyTo: email,
      });

      if (error) {
        throw error;
      }

      return NextResponse.json({
        success: true,
        message: 'Mensagem enviada com sucesso!',
        method: 'resend'
      });
    }

    // Configuração do transporter do Nodemailer para Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Opções do email
    const mailOptions = {
      from: `"Site Dra. Marcella" <${process.env.GMAIL_USER}>`,
      to: 'dramarcellaribeirovieira@gmail.com',
      subject: `[Site Dra. Marcella] ${subject}`,
      replyTo: email,
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
            <hr style="border: 1px solid #ddd; margin: 20px 0;">
            <p style="font-size: 12px; color: #666;">
              Esta mensagem foi enviada através do formulário de contato do site.
            </p>
          </div>
        </div>
      `,
      text: `
Nova mensagem do formulário de contato

Nome: ${name}
Email: ${email}
${phone ? `Telefone: ${phone}` : ''}
Assunto: ${subject}

Mensagem:
${message}
      `,
    };

    // Envia o email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email enviado com sucesso:', info.messageId);

    return NextResponse.json({
      success: true,
      message: 'Mensagem enviada com sucesso!',
      method: 'gmail',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    
    let errorMessage = 'Ocorreu um erro ao enviar a mensagem.';
    
    if (error instanceof Error) {
      if (error.message.includes('self signed certificate')) {
        errorMessage = 'Erro de certificado SSL. Por favor, tente novamente.';
      } else if (error.message.includes('Invalid login')) {
        errorMessage = 'Configuração de email inválida. Entre em contato pelo WhatsApp.';
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
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