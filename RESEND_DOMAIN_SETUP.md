# Configuração de Domínio no Resend - PASSO A PASSO

## 🎯 Objetivo
Configurar o domínio `dramarcellavieira.com.br` no Resend para enviar emails diretamente para `dramarcellaribeirovieira@gmail.com`.

## 📋 Pré-requisitos
- Acesso ao painel de DNS do domínio (Registro.br, GoDaddy, Hostinger, etc.)
- Conta no Resend com API Key configurada

## 🚀 Passo a Passo

### 1. Acessar o Resend
1. Entre em: https://resend.com/login
2. Faça login com sua conta

### 2. Adicionar Domínio
1. Vá para: https://resend.com/domains
2. Clique em **"Add Domain"**
3. Digite: `dramarcellavieira.com.br`
4. Clique em **"Add"**

### 3. Configurar Registros DNS
O Resend mostrará 3 registros que você precisa adicionar no DNS:

#### Registro 1: SPF (TXT)
```
Nome/Host: @ ou deixe vazio
Tipo: TXT
Valor: v=spf1 include:_spf.resend.com ~all
TTL: 3600 ou Automático
```

#### Registro 2: DKIM (CNAME)
```
Nome/Host: resend._domainkey
Tipo: CNAME
Valor: (será fornecido pelo Resend, algo como: resend._domainkey.dramarcellavieira.com.br.resend.com)
TTL: 3600 ou Automático
```

#### Registro 3: Return-Path (CNAME)
```
Nome/Host: resend
Tipo: CNAME
Valor: feedback-smtp.us-east-1.amazonses.com
TTL: 3600 ou Automático
```

### 4. Adicionar no Painel de DNS
Dependendo do seu provedor:

#### Registro.br / Hostinger / GoDaddy
1. Acesse o painel de controle do domínio
2. Procure por "Gerenciar DNS" ou "Zona DNS"
3. Adicione cada registro conforme indicado acima
4. Salve as alterações

### 5. Verificar no Resend
1. Volte para https://resend.com/domains
2. Clique em **"Verify DNS Records"**
3. Aguarde a verificação (pode levar até 48h, mas geralmente é rápido)
4. Status mudará para **"Verified"** ✅

### 6. Atualizar Código
Após verificação, atualize o arquivo `/src/app/api/send-email/route.ts`:

```typescript
// Mude de:
from: 'Site Dra. Marcella <onboarding@resend.dev>',

// Para:
from: 'Site Dra. Marcella <contato@dramarcellavieira.com.br>',
```

### 7. Configurar Variáveis na Vercel
Atualize as variáveis de ambiente:
```
RESEND_TO_EMAIL=dramarcellaribeirovieira@gmail.com
RESEND_FROM_EMAIL=contato@dramarcellavieira.com.br
```

## ❓ Problemas Comuns

### DNS não verifica
- Aguarde até 48h para propagação
- Verifique se copiou os valores exatamente
- Alguns provedores adicionam o domínio automaticamente, teste sem o domínio completo

### Email não enviando após verificação
- Confirme que o status está "Verified" no Resend
- Verifique se atualizou o email "from" no código
- Teste com o email de teste do Resend primeiro

## 🆘 Suporte
- Documentação Resend: https://resend.com/docs
- Suporte: support@resend.com

## ⚠️ Importante
Sem a verificação do domínio, os emails não funcionarão corretamente. A verificação é obrigatória para enviar emails para `dramarcellaribeirovieira@gmail.com`.