// components/DashboardCard.tsx
import Link from "next/link";

type Props = {
  title: string;
  href: string;
  description: string;
};

export default function DashboardCard({ title, href, description }: Props) {
  return (
    <Link
      href={href}
      className="border rounded-xl p-6 hover:bg-gray-50 transition shadow-sm"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </Link>
  );
}
