'use client'

import React from 'react';
import DashboardSidebar from '@/components/custom/dashboard/sidebar';

import { House, Tray, Books, Ticket } from '@phosphor-icons/react/dist/ssr';
import { Camera } from 'lucide-react';

// Fungsi DashboardLayout dengan links yang langsung didefinisikan
export default function DashboardLayout({
    children,
}: {
  children: React.ReactNode;
}) {
    // Definisikan links di sini
    const links = [
        { icon: House, title: 'Home', href: '/dashboard' },
        { icon: Camera, title: 'Travelinspo', href: '/dashboard/sns'},
        { icon: Ticket, title: 'Booking', href: '/dashboard/booking' }
    ];  

    return (
        <main className="flex relative w-full h-screen overflow-hidden lg:p-4">
            <div className = "flex flex-col relative mx-auto w-full bg-white md:w-[350px] md:border-[12px] md:rounded-[50px] h-screen border-zinc-800 shadow-lg overflow-hidden">
                <div className = "w-1/2 select-none bg-zinc-900 rounded-b-full mx-auto text-center z-10 h-max hidden md:block">
                    <span>Skibidi</span>
                </div>
                
                <div className="flex flex-col gap-4 overflow-y-auto w-full h-full">
                    {children}
                </div>
            </div>
        </main>
    );
}
