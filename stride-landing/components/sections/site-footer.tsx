import Link from "next/link";
import { Logo } from "@/components/logo";
import { Instagram, Send, Youtube } from "lucide-react";

const cols = [
  {
    title: "Materiais",
    links: ["Backtests", "Calculadora de Lotes", "Template MT5", "Prompt do relatório"],
  },
  {
    title: "Mercado",
    links: ["XAUUSD", "USDJPY", "EURUSD", "US30"],
  },
  {
    title: "Comunidade",
    links: ["Grupo no Telegram", "Depoimentos", "Suporte", "Contato"],
  },
  {
    title: "Legal",
    links: ["Termos de uso", "Política de privacidade", "Reembolso"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-white/55">
              Backtests, estudos e relatórios semanais para você antecipar
              movimentos do mercado com mais confiança.
            </p>
            <div className="flex items-center gap-2">
              {[
                { href: "#", label: "Telegram", Icon: Send },
                { href: "#", label: "Instagram", Icon: Instagram },
                { href: "#", label: "YouTube", Icon: Youtube },
              ].map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="cursor-pointer rounded-full border border-white/10 bg-white/[0.02] p-2 text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-white/[0.06] hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-white/40">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="cursor-pointer text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Teoria dos Ciclos. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/40">
            Pagamento único · Acesso vitalício
          </p>
        </div>
      </div>
    </footer>
  );
}
