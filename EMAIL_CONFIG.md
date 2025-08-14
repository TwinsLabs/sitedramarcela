# Configuração de Email - Site Dra. Marcella

## Status Atual
O sistema usa **Resend** para envio de emails para `dramarcellaribeirovieira@gmail.com`.

## 🚀 Configuração Necessária

### 1. Verificar Domínio no Resend (OBRIGATÓRIO)
Para que os emails funcionem, você DEVE verificar o domínio.
Siga o guia completo em: **[RESEND_DOMAIN_SETUP.md](./RESEND_DOMAIN_SETUP.md)**

### 2. Configure na Vercel:
```
RESEND_API_KEY=re_7sbCGTBV_7tw3BxtJGVt3g5E26K13...
RESEND_TO_EMAIL=dramarcellaribeirovieira@gmail.com
RESEND_FROM_EMAIL=contato@dramarcellavieira.com.br
```

## Como Funciona
- Os emails do formulário de contato serão enviados para `dramarcellaribeirovieira@gmail.com`
- O email do cliente aparece no campo "Reply-To" para facilitar a resposta
- Requer verificação de domínio no Resend para funcionar

## Testando
1. Local: `npm run dev` e acesse http://localhost:3000/contato
2. Produção: Após deploy, teste em https://www.dramarcellavieira.com.br/contato

## Logs de Debug
Os logs detalhados aparecem no dashboard da Vercel em:
Functions → api/send-email → Logs

## Suporte
Em caso de problemas, os visitantes são instruídos a usar o WhatsApp como alternativa.