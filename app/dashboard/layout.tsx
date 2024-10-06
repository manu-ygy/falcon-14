import DashboardSidebar from "@/components/custom/dashboard/sidebar";
import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col bg-slate-200">
      <Navbar />
      <div className="flex flex-row mt-28">
        <DashboardSidebar />
        {children}
      </div>
    </section>
  );
}
