'use client';
import { cn } from '@/src/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../../components/ui/accordion"; // Import Accordion

// TypeScript interfaces
interface Sublink {
  title: string;
  href: string;
}

interface LinkItem {
  title: string;
  icon: React.ElementType; // Ikon dipass dari parent sebagai React.ElementType
  href?: string; // Parent link bersifat opsional
  sublinks?: Sublink[];
}

interface DashboardSidebarProps {
  items: LinkItem[];
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ items }) => {
  return (
    <div className="flex flex-row max-md:fixed max-md:w-full max-md:bg-background/90 max-md:backdrop-blur-sm max-md:border-t md:flex-col w-1/4 max-md:bottom-0 z-30 p-8 max-md:p-4 pl-10 pr-0 gap-4">
      <div className="flex items-center gap-3 max-md:hidden">
        <Image
          src="/images/yss.png"
          width={32}
          height={32}
          alt="Logo"
          className="object-contain"
        />
        <h2 className="text-3xl font-semibold">SMA Yosuka</h2>
      </div>

      <span className="text-lg mb-4 max-md:hidden">Dashboard</span>

      <nav className="md:grid max-md:flex gap-2 max-md:w-full max-md:flex-row items-start text-sm font-medium">
        {items && items.length > 0 ? (
          items.map((item) => (
            <DashboardItem key={item.href || item.title} item={item} />
          ))
        ) : (
          <p>No menu items available</p>
        )}
      </nav>
    </div>
  );
};

const DashboardItem: React.FC<{ item: LinkItem }> = ({ item }) => {
  const pathname = usePathname()

  // Check if item or any sublink is active
  const isActive = item.href ? pathname === item.href : item.sublinks?.some((sublink) => pathname === sublink.href)
  const styleActive = isActive
    ? 'bg-indigo-500 !text-slate-100 shadow-sm border border-border text-foreground'
    : ''

  const IconComponent = item.icon // Gunakan ikon yang sudah dipass dari parent

  // Cek apakah salah satu sublink aktif untuk menentukan apakah Accordion terbuka
  const activeSublink = item.sublinks?.some((sublink) => pathname === sublink.href)

  return (
    <div className="w-full">
      {/* Jika item href ada, gunakan Link */}
      {item.href && (
        <Link
          href={item.href}
          className={cn(
            'transition-all md:mx-[-0.65rem] border border-transparent flex max-md:w-full max-md:flex-col items-center max-md:gap-1 gap-4 rounded-3xl p-2 pr-4 hover:text-foreground',
            styleActive
          )}
        >
          <div className="bg-white text-zinc-800 rounded-2xl p-2 max-md:mx-auto">
            <IconComponent className="rounded-sm text-indigo-500" size={24} weight="fill" />
          </div>
          <span className="max-md:text-sm font-medium text-base">{item.title}</span>
        </Link>
      )}

      {/* Jika ada sublinks, gunakan Accordion */}
      {item.sublinks && item.sublinks.length > 0 && (
        <Accordion type="single" collapsible defaultValue={activeSublink ? item.title : ''}>
          <AccordionItem value={item.title} className="border-transparent">
            <AccordionTrigger
              className={cn(
                'transition-all !no-underline md:mx-[-0.65rem] border border-transparent flex max-md:w-full max-md:flex-col items-center max-md:gap-1 gap-4 rounded-3xl p-2 pr-4 hover:text-foreground',
                styleActive
              )}
            >
              <div className="bg-white text-zinc-800 rounded-2xl p-2 max-md:mx-auto">
                <IconComponent className="rounded-sm text-indigo-500" size={24} weight="fill" />
              </div>
              <span className="max-md:text-sm font-medium text-base mr-auto">{item.title}</span>
            </AccordionTrigger>

            {/* Tampilkan sublinks di dalam AccordionContent */}
            <AccordionContent className="ml-4 mr-2 mt-2 space-y-1">
              {item.sublinks.map((sublink) => {
                const isSublinkActive = pathname === sublink.href
                const sublinkActiveStyle = isSublinkActive
                  ? 'bg-indigo-100 text-indigo-600 hover:bg-indigo-100 text-indigo-600'
                  : ''

                return (
                  <Link
                    key={sublink.href}
                    href={sublink.href}
                    className={cn(
                      'block text-sm px-4 py-2 hover:bg-gray-100 hover:text-indigo-600 rounded-xl',
                      sublinkActiveStyle
                    )}
                  >
                    {sublink.title}
                  </Link>
                )
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  )
}

export default DashboardSidebar;
