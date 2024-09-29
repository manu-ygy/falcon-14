"use client"
import { cn } from '@/lib/utils'
import { ChalkboardTeacher, Layout, Student } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'

const links = [
    {
        title: "Dashboard",
        icon: Layout,
        href: "/dashboard"
    },
    {
        title: "Murid",
        icon: Student,
        href: "/dashboard/murid"
    },
    {
        title: "Guru",
        icon: ChalkboardTeacher,
        href: "/dashboard/guru"
    }
]
const DashboardSidebar = ({ className }: any) => {
    return (
        <div className='flex flex-col fixed w-64'>
            <div className='flex flex-col px-6 gap-2'>
                <span className='font-bold'>Main Menu</span>
                <div className='flex flex-col'>
                    {links.map(e => <DashboardItem item={e} />)}
                </div>
            </div>
        </div>
    )
}

const DashboardItem = ({ item }: any) => {
    const pathname = usePathname()
    const styleActive = pathname == item.href && "bg-black text-white";
    return <Link href={item.href} className={cn('flex flex-row gap-2 items-center py-4 px-4 transition-all rounded-2xl', styleActive)}>
        <item.icon className='w-6 h-6' />
        <span>{item.title}</span>
    </Link>
}

export default DashboardSidebar