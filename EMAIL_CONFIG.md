# Configuração de Email - Site Dra. Marcella

## Status Atual
O sistema de email está usando Resend em **modo teste**, o que significa que só pode enviar emails para endereços verificados.

## Variáveis de Ambiente Necessárias

### Na Vercel, configure:
```
RESEND_API_KEY=re_7sbCGTBV_7tw3BxtJGVt3g5E26K13...
RESEND_TO_EMAIL=elialberlopes@gmail.com
```

⚠️ **IMPORTANTE**: Use `elialberlopes@gmail.com` temporariamente até verificar o domínio.

## Para Ativar Emails em Produção

### Opção 1: Continuar com Resend (Recomendado)
1. Acesse [resend.com/domains](https://resend.com/domains)
2. Verifique o domínio `dramarcellavieira.com.br`
3. Adicione os registros DNS necessários
4. Após verificação, atualize na Vercel:
   ```
   RESEND_TO_EMAIL=dramarcellaribeirovieira@gmail.com
   RESEND_FROM_EMAIL=contato@dramarcellavieira.com.br
   ```

### Opção 2: Solução Temporária (Já Configurada)
Mantenha `RESEND_TO_EMAIL=elialberlopes@gmail.com` e você receberá os emails do formulário. 
O email original do remetente aparecerá no corpo da mensagem.

## Testando
1. Local: `npm run dev` e acesse http://localhost:3000/contato
2. Produção: Após deploy, teste em https://www.dramarcellavieira.com.br/contato

## Logs de Debug
Os logs detalhados aparecem no dashboard da Vercel em:
Functions → api/send-email → Logs

## Suporte
Em caso de problemas, os visitantes são instruídos a usar o WhatsApp como alternativa.