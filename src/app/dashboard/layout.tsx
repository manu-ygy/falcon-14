'use client'

import React from 'react';
import DashboardSidebar from '@/components/custom/dashboard/sidebar';

import { House, Camera, Ticket, Confetti, User } from '@phosphor-icons/react/dist/ssr';

import { motion } from "framer-motion";

import Profile from '@/components/custom/dashboard/profile';
import Transition from './transition';

// Fungsi DashboardLayout dengan links yang langsung didefinisikan
export default function DashboardLayout({
    children,
}: {
  children: React.ReactNode;
}) {
    // Definisikan links di sini
    const links = [
        { icon: House, title: 'Beranda', href: '/dashboard' },
        { icon: Camera, title: 'Travelinspo', href: '/dashboard/sns'},
        { icon: Ticket, title: 'Pesan', href: '/dashboard/booking' },
        { icon: User, title: 'Profil', href: '/dashboard/profile' }
    ];  

    return (
        <Transition>
            <main className="fixed flex flex-col row relative w-full h-screen overflow-hidden">
                <div className = "flex flex-row relative w-full h-screen pt-8 overflow-y-auto">
                    <DashboardSidebar items={links}/>
                    <div className="flex flex-col gap-4 w-full lg:w-3/4 p-4 lg:p-8 relative rounded-t-[3rem] bg-slate-100 h-max">
                        {/**
                         *                     <div className = "rounded-t-[3rem] bg-qmaroon-500 mask-image-b mask-image-start-70 absolute w-full h-[32rem] top-0 left-0 object-cover">
                         
                        </div>
                        * 
                        */}
                        <div className = "z-10 mb-[100px] lg:mb-0">
                            {children}
                        </div>
                    </div>

                    <motion.div initial={{x: '100%'}} animate={{x: 0}} transition={{ ease: "easeInOut", duration: 0.5 }} className = "w-1/4 bg-white mt-6 rounded-3xl mx-6 flex-col gap-6 sticky top-6 hidden lg:flex">
                            <Profile/>

                            <h1 className = "text-3xl font-semibold text-qmaroon-500">Notifikasi</h1>

                            <div className = "flex flex-col gap-4">
                                <div className = "w-full border border-slate-400/50 rounded-3xl p-4 flex gap-4 items-center">
                                    <div className = "relative w-52 h-12">
                                        <img src = "/devin.jpeg" className = "absolute left-0 top-1/2 -translate-y-1/2 border-4 border-white w-12 h-12 rounded-full object-cover">
                                        </img>
                                        <img src = "/devin.jpeg" className = "absolute left-6 top-1/2 -translate-y-1/2 border-4 border-white w-12 h-12 rounded-full object-cover">
                                        </img>
                                        <img src = "/devin.jpeg" className = "absolute left-12 top-1/2 -translate-y-1/2 border-4 border-white w-12 h-12 rounded-full object-cover">
                                        </img>
                                    </div>

                                    
                                    <span className = "text-sm"><span className = "font-semibold">Devin Hong</span> dan 2 lainnya mengirim perjalanan mereka.</span>
                                </div>

                                <div className = "w-full border border-slate-400/50 rounded-3xl p-4 flex gap-4 items-center">
                                    <div className = "min-w-12 h-12 bg-gradient-to-b from-indigo-600 to-indigo-400 rounded-full border-4 border-white flex items-center justify-center text-slate-100">
                                        <Confetti size={24}/>
                                    </div>
                                    
                                    <span className = "text-sm"><span className = "font-semibold">Promo!</span> Dapatkan 2 tiket gratis sekarang!</span>
                                </div>
                            </div>
                    </motion.div>
                </div>
            </main>
        </Transition>
    );
}
