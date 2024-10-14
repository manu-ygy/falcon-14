'use client'

import React from 'react';
import DashboardSidebar from '@/src/components/custom/dashboard/sidebar';
import Profile from '@/src/components/custom/dashboard/profile';
import { House, User, File } from '@phosphor-icons/react/dist/ssr';

// Fungsi DashboardLayout dengan links yang langsung didefinisikan
export default function DashboardLayout({
    children,
}: {
  children: React.ReactNode;
}) {
    // Definisikan links di sini
    const links = [
        { title: 'Home', icon: House, href: '/admin' },
        {
            title: 'User',
            icon: User,
            sublinks: [
                { title: 'Siswa', href: '/admin/user/student' },
                { title: 'Guru', href: '/admin/user/teacher' },
            ],
        },
        { title: 'Konten', icon: File, href: '/admin/content' },
    ];  

    return (
        <main className="flex flex-row relative w-full h-screen overflow-hidden gap-6">
            {/* Berikan props items kepada DashboardSidebar */}
            <DashboardSidebar items={links} />
            <div className="flex flex-col gap-4 w-full overflow-y-auto p-8">
                <Profile />
                {children}
            </div>
        </main>
    );
}
