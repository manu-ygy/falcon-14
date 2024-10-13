"use client";
import dynamic from "next/dynamic";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";

// TypeScript interfaces
interface Sublink {
  title: string;
  href: string;
}

interface LinkItem {
  title: string;
  icon: string; // Ubah tipe ke string untuk nama ikon
  href: string;
  sublinks?: Sublink[];
}

interface DashboardSidebarProps {
  items: LinkItem[]; // items harus array
}

// Fungsi untuk memuat ikon secara dinamis
const loadIcon = (iconName: string) => {
  return dynamic(() =>
    import("@phosphor-icons/react").then((mod) => mod[iconName])
  );
};

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ items }) => {
  return (
    <div className="flex flex-row max-md:bg-background/90 max-md:backdrop-blur-sm max-md:border-t md:flex-col w-1/4 max-md:bottom-0 z-30 p-8 pl-10 pr-0 gap-4">
      <div className="flex items-center gap-3">
        <Image
          src="/images/yss.png"
          width={32}
          height={32}
          alt="Logo"
          className="object-contain"
        />
        <h2 className="text-3xl font-semibold">SMA Yosuka</h2>
      </div>

      <span className="text-lg mb-4">Dashboard</span>

      {/* Pengecekan jika items ada dan berbentuk array */}
      <nav className="md:grid max-md:flex gap-2 max-md:w-full max-md:flex-row items-start text-sm font-medium">
        {items && items.length > 0 ? (
          items.map((item) => (
            <DashboardItem key={item.href} item={item} />
          ))
        ) : (
          <p>No menu items available</p> // Pesan jika items kosong
        )}
      </nav>
    </div>
  );
};

const DashboardItem: React.FC<{ item: LinkItem }> = ({ item }) => {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const styleActive = isActive
    ? "bg-indigo-500 !text-slate-100 shadow-sm border border-border text-foreground"
    : "";

  // Gunakan loadIcon untuk memuat ikon secara dinamis
  const IconComponent = loadIcon(item.icon);

  return (
    <div>
      <Link
        href={item.href}
        className={cn(
          "transition-all md:mx-[-0.65rem] border border-transparent flex max-md:w-full max-md:flex-col items-center max-md:gap-1 gap-4 rounded-3xl p-2 pr-4 hover:text-foreground",
          styleActive
        )}
      >
        <div className="bg-white text-zinc-800 rounded-2xl p-2">
          <IconComponent className="rounded-sm text-indigo-500" size={24} weight="fill" />
        </div>
        <span className="max-md:text-sm font-medium text-base">{item.title}</span>
      </Link>

      {/* Render sublinks if they exist */}
      {item.sublinks && item.sublinks.length > 0 && (
        <div className="ml-8 mt-2 space-y-1">
          {item.sublinks.map((sublink) => (
            <Link
              key={sublink.href}
              href={sublink.href}
              className={cn(
                "block text-sm p-2 hover:bg-gray-100 hover:text-indigo-600 rounded-md"
              )}
            >
              {sublink.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardSidebar;
