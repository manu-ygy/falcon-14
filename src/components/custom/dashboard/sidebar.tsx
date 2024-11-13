// @ts-nocheck

'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../../components/ui/accordion"; // Import Accordion

// TypeScript interfaces
interface Sublink {
  title: string;
  href: string;
  notification?: string|Number;
}

interface LinkItem {
  title: string;
  icon: React.ElementType; // Ikon dipass dari parent sebagai React.ElementType
  href?: string; // Parent link bersifat opsional
  sublinks?: Sublink[];
  notification?: string|Number;
}

interface DashboardSidebarProps {
  items: LinkItem[];
  forceMobile?: Boolean;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ items, forceMobile = false }) => {
  const forceMobileStyle = forceMobile ? 
  '!flex !w-full !flex-row'
  : ''
  
  return (
    <div className={cn("flex lg:sticky lg:top-0 flex-row max-md:fixed max-md:w-full max-md:bg-background/90 max-md:backdrop-blur-sm max-md:border-t md:flex-col items-center w-fit max-md:bottom-0 z-30 max-md:p-4 gap-2 p-6", forceMobileStyle, forceMobile ? 'absolute w-full left-0 bottom-0 bg-white' : 'rounded-2xl')}>
        {!forceMobile && 
            <Image
            src="/images/yss.png"
            width={32}
            height={32}
            alt="Logo"
            className="object-contain mb-4"
          />
        }

      <nav className={cn("md:grid max-md:flex gap-6 max-md:w-full max-md:flex-row items-start text-sm font-medium", forceMobileStyle)}>
        {items && items.length > 0 ? (
          items.map((item) => (
            <DashboardItem key={item.href || item.title} item={item} forceMobile={forceMobile} />
          ))
        ) : (
          <p></p>
        )}
      </nav>
    </div>
  );
};

const DashboardItem: React.FC<{ item: LinkItem, forceMobile: Boolean }> = ({ item, forceMobile }) => {
  const pathname = usePathname()

  // Check if item or any sublink is active
  const isActive = item.href ? pathname === item.href : item.sublinks?.some((sublink) => pathname === sublink.href)
  const styleActive = isActive
    ? 'text-slate-100 bg-qmaroon-500'
    : 'text-zinc-900/50'

  const IconComponent = item.icon // Gunakan ikon yang sudah dipass dari parent

  // Cek apakah salah satu sublink aktif untuk menentukan apakah Accordion terbuka
  const activeSublink = item.sublinks?.some((sublink) => pathname === sublink.href)

  const forceMobileStyle = forceMobile ?
  'w-full gap-1'
  : ''
  return (
    <div className={cn("w-full", forceMobile ? 'flex items-center justify-center' : '')}>
      <Link
        href={item.href}
      >
        <div className = "flex flex-col text-center items-center gap-1 !w-12">
          <IconComponent className={cn(
            'transition-all relative flex items-center p-3 justify-center max-md:w-full !w-12 !h-12 rounded-full items-center max-md:gap-1 gap-4',
            styleActive,
            forceMobileStyle
          )} size={28}/>

          <span className = {cn("text-xs", isActive ? 'opacity-100 font-semibold' : 'opacity-70 font-medium')}>{item.title}</span>
        </div>

        {item.notification && (
          <div className="absolute top-0 right-0 translate-x-[calc(50%-6px)] -translate-y-[calc(50%-6px)] bg-red-500 min-w-6 min-h-6 rounded-full text-center text-xs flex items-center justify-center font-bold text-slate-100">{item.notification}</div>
        )}

      </Link>
    </div>
  )
}

export default DashboardSidebar;
