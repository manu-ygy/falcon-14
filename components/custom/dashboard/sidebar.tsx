"use client";
import { cn } from "@/lib/utils";
import {
  Books,
  ChalkboardTeacher,
  ChatCircleDots,
  House,
  Layout,
  Student,
  Tray,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const links = [
  {
    title: "Home",
    icon: House,
    href: "/dashboard",
  },
  {
    title: "Inbox",
    icon: Tray,
    href: "/dashboard/inbox",
  },
  {
    title: "Bahan Ajar",
    icon: Books,
    href: "/dashboard/materi",
  },
  {
    title: "Forum",
    icon: ChatCircleDots,
    href: "/dashboard/forum",
  },
];
const DashboardSidebar = ({ className }: any) => {
  return (
    <div className="flex flex-row max-md:bg-background/90 max-md:backdrop-blur-sm max-md:border-t md:flex-col md:w-64 max-md:w-full max-md:bottom-0 fixed z-30 p-4 gap-2">
      <nav className="md:grid max-md:flex max-md:w-full max-md:flex-row items-start px-2 text-sm font-medium lg:px-4">
        {links.map((e) => (
          <DashboardItem item={e} />
        ))}
      </nav>
    </div>
  );
};

const DashboardItem = ({ item, mobile }: any) => {
  const pathname = usePathname();
  const styleActive =
    pathname == item.href &&
    "bg-white shadow-sm border border-border text-foreground";
  return (
    <Link
      href={item.href}
      className={cn(
        "transition-all md:mx-[-0.65rem] border border-transparent flex max-md:w-full max-md:flex-col items-center max-md:gap-1 gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
        styleActive
      )}
    >
      <item.icon
        className="w-8 h-8 text-slate-800 rounded-sm p-1"
        weight="fill"
      />
      <span className="max-md:text-sm">{item.title}</span>
    </Link>
  );
};

export default DashboardSidebar;
