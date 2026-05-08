import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

const resend = new Resend(process.env.RESEND_API_KEY || 're_123');

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || messages.length < 2) {
      return new Response(JSON.stringify({ error: 'Mensagens insuficientes para resumo.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log('[PROD LOG] Gerando resumo da conversa...');

    // Pede para a IA gerar um resumo
    const { text: summary } = await generateText({
      model: openai('gpt-4o-mini'),
      system: 'Você é um assistente que resume conversas. Leia a conversa a seguir entre um Visitante e a IA Assistente (Nina). Crie um resumo curto (máximo de 3 parágrafos) destacando os principais interesses e perguntas do visitante.',
      messages: messages.map((m: any) => ({
        role: m.role,
        content: m.content
      }))
    });

    console.log('[PROD LOG] Resumo gerado com sucesso. Enviando email via Resend...');

    await resend.emails.send({
      from: 'Notificação Portfolio <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO || 'seu-email@gmail.com'],
      subject: 'Resumo de Chat no Portfólio 🚀',
      html: `<h2>Alguém encerrou uma conversa com a sua IA!</h2>
             <h3>Resumo da Conversa:</h3>
             <blockquote style="border-left: 4px solid #3BA9F4; padding-left: 16px; color: #555;">
               ${summary.replace(/\n/g, '<br/>')}
             </blockquote>
             <p><small>Você pode configurar um domínio próprio no Resend para alterar o remetente.</small></p>`,
    });

    console.log('[PROD LOG] E-mail de resumo enviado com sucesso!');

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('[PROD LOG] ERRO ao gerar/enviar resumo:', error);
    return new Response(JSON.stringify({ error: 'Erro interno' }), { status: 500 });
  }
}
