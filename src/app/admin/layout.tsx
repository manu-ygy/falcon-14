'use client'

import React from 'react';
import DashboardSidebar from '@/components/custom/dashboard/sidebar';
import Profile from '@/components/custom/dashboard/profile';
import { House, User, File, Folder } from '@phosphor-icons/react/dist/ssr';

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
            href: '/admin/user',
            sublinks: [
                { title: 'Grup', href: '/admin/user/group' },
            ],
        },
        { 
            title: 'Konten', 
            icon: File, 
            href: '/admin/content',
            sublinks: [
                { title: 'Mengedit: Lorem ipsum dolor', href: '/admin/content/editor'}
            ]
        },
        {
            title: 'Halaman',
            icon: Folder,
            href: '/admin/pages'
        }
    ];  

    return (
        <main className="flex flex-row relative w-full h-screen overflow-hidden gap-6">
            {/* Berikan props items kepada DashboardSidebar */}
            <DashboardSidebar title='Admin Panel' items={links} />
            <div className="flex flex-col gap-4 w-full overflow-y-auto p-8">
                <Profile />
                {children}
            </div>
        </main>
    );
}
