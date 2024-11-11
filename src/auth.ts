import NextAuth from 'next-auth';
import prisma from './prisma/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
 
export const { auth, handlers, signIn, signOut } = NextAuth({
    session: { strategy: 'jwt' },
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: '/account/login',
    },
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET
        }),
        CredentialsProvider({
            name: 'Sign in',
            id: 'credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'example@example.com',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: String(credentials.email),
                    },
                    include: {
                        userGroups: {
                            select: {
                                groupId: true
                            }
                        }
                    }
                });

                if (
                    !user ||
          !(await bcrypt.compare(String(credentials.password), user.password!))
                ) {
                    return null;
                }

                // Return user object with default accountType 'guest'
                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    randomKey: 'Hey cool',
                    accountType: user.accountType || 'guest',
                };
            },
        }),
    ],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const paths = ['/dashboard', '/admin'];
            const isProtected = paths.some((path) =>
                nextUrl.pathname.startsWith(path)
            );

            if (isProtected && !isLoggedIn) {
                const redirectUrl = new URL('/account/login', nextUrl.origin);
                redirectUrl.searchParams.append('callbackUrl', nextUrl.href);
                return Response.redirect(redirectUrl);
            }
            return true;
        },
        // Store `accountType` in the token when the user logs in
        jwt: ({ token, user }) => {
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    randomKey: u.randomKey,
                    accountType: u.accountType || 'guest', // Add accountType to token
                    userGroups: u.userGroups || []
                };
            }
            return token;
        },
        // Add `accountType` to session
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id as string,
                    randomKey: token.randomKey,
                    accountType: token.accountType || 'guest', // Add accountType to session
                    userGroups: token.userGroups || []
                },
            };
        },
    },
})