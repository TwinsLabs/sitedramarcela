# Configuração de Email - Site Dra. Marcella

## Status Atual
O sistema tem duas opções de envio de email:
1. **Gmail SMTP** (preferencial) - Envia direto para `dramarcellaribeirovieira@gmail.com`
2. **Resend** (fallback) - Em modo teste, envia para emails verificados

## Configuração Recomendada

### Opção 1: Usar Gmail SMTP (RECOMENDADO)
Para enviar emails diretamente para `dramarcellaribeirovieira@gmail.com`:

1. **Crie uma Senha de App no Gmail:**
   - Faça login em `dramarcellaribeirovieira@gmail.com`
   - Ative verificação em 2 etapas: [myaccount.google.com/signinoptions/two-step-verification](https://myaccount.google.com/signinoptions/two-step-verification)
   - Crie senha de app: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Selecione "Mail" e "Outro dispositivo"
   - Copie a senha gerada (16 caracteres)

2. **Configure na Vercel:**
   ```
   GMAIL_USER=dramarcellaribeirovieira@gmail.com
   GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx (sem espaços)
   RESEND_API_KEY=re_7sbCGTBV_7tw3BxtJGVt3g5E26K13...
   RESEND_TO_EMAIL=elialberlopes@gmail.com
   ```

### Opção 2: Continuar com Resend
Se preferir usar apenas Resend, mantenha:
```
RESEND_API_KEY=re_7sbCGTBV_7tw3BxtJGVt3g5E26K13...
RESEND_TO_EMAIL=elialberlopes@gmail.com
```

**Limitação**: Emails serão enviados para `elialberlopes@gmail.com` até verificar domínio.

## Testando
1. Local: `npm run dev` e acesse http://localhost:3000/contato
2. Produção: Após deploy, teste em https://www.dramarcellavieira.com.br/contato

## Logs de Debug
Os logs detalhados aparecem no dashboard da Vercel em:
Functions → api/send-email → Logs

## Suporte
Em caso de problemas, os visitantes são instruídos a usar o WhatsApp como alternativa.