'use client'

import React from 'react';
import DashboardSidebar from '@/components/custom/dashboard/sidebar';

import { House, Camera, Ticket } from '@phosphor-icons/react/dist/ssr';

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
        <main className="flex flex-col row relative w-full h-screen overflow-hidden">
            <div className = "flex flex-row relative w-full h-screen">
                <DashboardSidebar items={links}/>
                <div className="flex flex-col gap-4 w-full overflow-y-auto p-4 lg:p-8 mt-8 bg-slate-100 lg:rounded-tl-[3rem] relative">
                    <div className = "bg-gradient-to-b from-qgold-500 via-qgold-400 to-qgold-300 mask-image-b absolute w-full h-64 top-0 left-0 object-cover">
                        <img className = "absolute w-full right-0 opacity-50" src = "https://garuda.tv/wp-content/uploads/2024/06/Qatar-Airways-will-host-the-IATA-World-Financial-Symposium.jpg"/>
                    </div>
                    <div className = "z-10">
                        {children}
                    </div>
                </div>
            </div>
            {/* Berikan props items kepada DashboardSidebar */}
        </main>
    );
}
