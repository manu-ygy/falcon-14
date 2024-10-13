import React from "react";
import DashboardSidebar from "@/src/components/custom/dashboard/sidebar";
import Profile from "@/src/components/custom/dashboard/profile";

// Fungsi DashboardLayout dengan links yang langsung didefinisikan
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Definisikan links di sini
  const links = [
    { title: "Home", icon: "House", href: "/dashboard" },
    { title: "Inbox", icon: "Tray", href: "/dashboard/inbox" },
    {
      title: "Bahan Ajar",
      icon: "Books",
      href: "/dashboard/materi",
      sublinks: [
        { title: "Materi 1", href: "/dashboard/materi/1" },
        { title: "Materi 2", href: "/dashboard/materi/2" },
      ],
    },
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
