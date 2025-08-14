# Configuração de Email - Site Dra. Marcella

## Status Atual
O sistema usa **Resend** para envio de emails. Atualmente em modo teste, enviando para emails verificados.

## ⚡ Configuração Rápida (Temporária)
Enquanto o domínio não é verificado, mantenha na Vercel:
```
RESEND_API_KEY=re_7sbCGTBV_7tw3BxtJGVt3g5E26K13...
RESEND_TO_EMAIL=elialberlopes@gmail.com
```
**Emails serão enviados para `elialberlopes@gmail.com` com o email do cliente no campo Reply-To.**

## 🚀 Configuração Definitiva (Recomendada)
Para enviar emails diretamente para `dramarcellaribeirovieira@gmail.com`:

### 1. Verificar Domínio no Resend
Siga o guia completo em: **[RESEND_DOMAIN_SETUP.md](./RESEND_DOMAIN_SETUP.md)**

### 2. Após Verificação, Configure na Vercel:
```
RESEND_API_KEY=re_7sbCGTBV_7tw3BxtJGVt3g5E26K13...
RESEND_TO_EMAIL=dramarcellaribeirovieira@gmail.com
RESEND_FROM_EMAIL=contato@dramarcellavieira.com.br
```

## Como Funciona
- **Sem domínio verificado**: Emails vão para o email em `RESEND_TO_EMAIL`
- **Com domínio verificado**: Emails podem ir para qualquer endereço

## Testando
1. Local: `npm run dev` e acesse http://localhost:3000/contato
2. Produção: Após deploy, teste em https://www.dramarcellavieira.com.br/contato

## Logs de Debug
Os logs detalhados aparecem no dashboard da Vercel em:
Functions → api/send-email → Logs

## Suporte
Em caso de problemas, os visitantes são instruídos a usar o WhatsApp como alternativa.