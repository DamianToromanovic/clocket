import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Clock,
  FileText,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white dark:bg-zinc-950">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Clocket
        </Link>
        <div className="flex items-center gap-6 text-sm text-gray-700 dark:text-gray-200">
          <NavItem
            href="/dashboard"
            icon={<LayoutDashboard size={16} />}
            label="Dashboard"
          />
          <NavItem href="/clients" icon={<Users size={16} />} label="Clients" />
          <NavItem
            href="/projects"
            icon={<Briefcase size={16} />}
            label="Projects"
          />
          <NavItem href="/time" icon={<Clock size={16} />} label="Time" />
          <NavItem
            href="/invoices"
            icon={<FileText size={16} />}
            label="Invoices"
          />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-1 hover:underline transition"
    >
      {icon}
      {label}
    </Link>
  );
}
