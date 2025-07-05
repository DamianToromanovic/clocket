// app/dashboard/page.tsx
import Link from "next/link";
import DashboardCard from "@/components/DashboardCards";

export default function DashboardPage() {
  return (
    <section className="max-w-4xl mx-auto mt-10 space-y-8">
      <h1 className="text-3xl font-bold">Welcome to Clocket 👋</h1>
      <p className="text-gray-600">
        Track your time, manage clients, and generate invoices with ease.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard
          title="Clients"
          href="/clients"
          description="Manage your customer base."
        />
        <DashboardCard
          title="Projects"
          href="/projects"
          description="Track work per client."
        />
        <DashboardCard
          title="Time"
          href="/time"
          description="Log your working hours."
        />
        <DashboardCard
          title="Invoices"
          href="/invoices"
          description="Create PDF invoices."
        />
      </div>
    </section>
  );
}
