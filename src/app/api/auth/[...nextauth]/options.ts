import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// Estendendo o tipo User para incluir id
declare module 'next-auth' {
  interface User {
    id: string;
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

// Estendendo o tipo JWT para incluir id
declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Usuário', type: 'text' },
        password: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials) {
        // Em uma implementação real, aqui seria feita a verificação no banco de dados
        // Para este exemplo, estamos usando credenciais fixas
        if (
          credentials?.username === 'admin' &&
          credentials?.password === 'admin123'
        ) {
          return {
            id: '1',
            name: 'Administrador',
            email: 'admin@dramarcellavieira.com.br',
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || 'seu-segredo-aqui',
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 dias
  },
};
