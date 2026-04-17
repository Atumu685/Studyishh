"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/math", label: "Math" },
  { href: "/science", label: "Science" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="relative z-[2] border-b border-border/60 bg-card/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-3xl items-center gap-6 px-4">
        <Link href="/" className="kawaii-title text-lg tracking-tight">
          Studyishh
        </Link>
        <div className="flex gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors hover:text-primary",
                pathname === link.href
                  ? "font-semibold text-primary"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
