import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

const navItems = [
  { label: "Materiais", href: "#features" },
  { label: "Como funciona", href: "#workflow" },
  { label: "Planos", href: "#pricing" },
  { label: "Depoimentos", href: "#testimonials" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 animate-fade-down">
      <nav
        aria-label="Primary"
        className="flex w-full max-w-5xl items-center justify-between gap-6 rounded-full border border-white/10 bg-zinc-950/70 px-3 py-2 pl-5 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_20px_60px_-20px_rgba(0,0,0,0.6)] transition-shadow duration-300 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_24px_70px_-18px_rgba(30,95,255,0.45)]"
      >
        <Link
          href="/"
          className="group flex shrink-0 items-center cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          aria-label="Teoria dos Ciclos"
        >
          <Logo />
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="cursor-pointer rounded-full px-3 py-1.5 text-sm text-white/70 transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1.5">
          <Button asChild size="sm" variant="primary">
            <Link href="#pricing">Ver planos</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
