import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Por favor, preencha todos os campos obrigatórios' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Formulário de Contato <onboarding@resend.dev>',
      to: 'elialberlopes@gmail.com',
      subject: `[Site Dra. Marcella] ${subject}`,
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
        { error: 'Ocorreu um erro ao enviar a mensagem.' },
        { status: 500 }
      );
    }

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
      { error: 'Ocorreu um erro ao processar sua solicitação.' },
      { status: 500 }
    );
  }
}
