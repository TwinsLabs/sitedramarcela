# Documentação do Site da Dra. Marcella Vieira

## Visão Geral

Este projeto consiste em um site moderno e responsivo para a Dra. Marcella Vieira, médica do trabalho, com um sistema de gerenciamento de conteúdo (CMS) integrado. O site foi desenvolvido utilizando Next.js, React e Tailwind CSS, seguindo as melhores práticas de desenvolvimento web.

## Estrutura do Projeto

```
dra-marcella-site/
├── public/               # Arquivos estáticos
│   └── images/           # Imagens do site
├── src/                  # Código-fonte
│   ├── app/              # Páginas da aplicação (Next.js App Router)
│   │   ├── admin/        # Área administrativa (CMS)
│   │   ├── api/          # Rotas de API
│   │   ├── servicos/     # Páginas de serviços
│   │   └── ...           # Outras páginas
│   ├── components/       # Componentes React reutilizáveis
│   │   ├── layout/       # Componentes de layout
│   │   ├── sections/     # Seções de página
│   │   └── ui/           # Componentes de interface
│   └── lib/              # Utilitários e contextos
└── ...                   # Arquivos de configuração
```

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos
- **React**: Biblioteca JavaScript para construção de interfaces
- **Tailwind CSS**: Framework CSS utilitário para estilização
- **NextAuth.js**: Autenticação para o painel administrativo
- **React Icons**: Biblioteca de ícones

## Páginas Principais

1. **Home**: Página inicial com apresentação da Dra. Marcella Vieira
2. **Sobre**: Biografia e credenciais profissionais
3. **Serviços**: Lista de serviços oferecidos com páginas detalhadas para cada serviço
4. **Painel**: Informações sobre o Painel "Medicina do Trabalho Prática e Inteligente"
5. **Contato**: Formulários de contato e solicitação de orçamentos

## Sistema de Gerenciamento de Conteúdo (CMS)

O CMS permite a edição de conteúdo do site através de um painel administrativo protegido por autenticação. Funcionalidades:

- Edição de textos em todas as páginas
- Gerenciamento de serviços
- Upload e gerenciamento de imagens
- Configurações de contato e redes sociais

### Acesso ao CMS

- URL: `/admin/login`
- Usuário padrão: `admin`
- Senha padrão: `admin123`

## Instalação e Execução

### Requisitos

- Node.js 18.0.0 ou superior
- npm ou yarn

### Passos para Instalação

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```
   npm run dev
   ```
4. Acesse `http://localhost:3000` no navegador

### Compilação para Produção

```
npm run build
npm start
```

## Personalização

### Cores

As cores principais do site estão definidas no arquivo `globals.css` e seguem a paleta fornecida:

- Paleta 1:
  - `#C6B4A9` — Bege rosado claro
  - `#D8CDBF` — Bege claro
  - `#E4DFD3` — Off-white puxando para o creme
  - `#DAD6C9` — Bege acinzentado
  - `#B6B4A6` — Cinza esverdeado claro

- Paleta 2:
  - `#5C6857` — Verde acinzentado escuro
  - `#E5DDD4` — Creme suave
  - `#A5776C` — Marrom rosado
  - `#BBAFA5` — Taupe claro
  - `#A4ABA1` — Verde acinzentado médio
  - `#394240` — Verde petróleo escuro

### Conteúdo

O conteúdo inicial do site é gerenciado através do contexto `contentContext.tsx`, que pode ser facilmente modificado pelo CMS ou diretamente no código.

## Responsividade

O site é totalmente responsivo e otimizado para dispositivos móveis, tablets e desktops, utilizando as classes responsivas do Tailwind CSS.

## Contato para Suporte

Para qualquer dúvida ou suporte relacionado ao site, entre em contato através do email: contato@dramarcellavieira.com.br
