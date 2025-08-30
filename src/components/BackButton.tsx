import Link from "next/link";

interface BackButtonProps {
  href: string; // where the button should navigate
  label?: string; // optional button text
}

export default function BackButton({ href, label = "⬅ Back" }: BackButtonProps) {
  return (
    <Link href={href}>
      <button className="mb-4 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
        {label}
      </button>
    </Link>
  );
}
