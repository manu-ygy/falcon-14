import DashboardSidebar from "@/components/custom/dashboard/sidebar"
import Footer from "@/components/custom/footer"
import Navbar from "@/components/custom/navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className="flex flex-col">
    <Navbar />
    <div className="flex flex-row">
      <DashboardSidebar />
      {children}
    </div>
  </section>
}