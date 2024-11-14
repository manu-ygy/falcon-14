import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Transition from './transition';
import './globals.css';
const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
    title: 'Airstra',
    description: 'Innovative School',
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.className} antialiased flex flex-col`}
            >
                <Transition>
                    <SessionProvider>{children}</SessionProvider>
                </Transition>
            </body>
        </html>
    );
}
