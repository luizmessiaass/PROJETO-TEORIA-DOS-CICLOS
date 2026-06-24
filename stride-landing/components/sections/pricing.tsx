import { Check, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SpotlightCard from "@/components/SpotlightCard";

type Tier = {
  name: string;
  tagline: string;
  price: string;
  cadence?: string;
  cta: string;
  ctaVariant: "outline" | "primary" | "default";
  checkoutUrl: string;
  features: string[];
  highlight?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Plano Básico",
    tagline: "Pra organizar e estruturar seus próprios testes.",
    price: "R$ —",
    cadence: "pagamento único",
    cta: "Quero o Plano Básico",
    ctaVariant: "outline",
    // ASAAS: cole aqui o Link de Pagamento do Plano Básico
    checkoutUrl: "https://www.asaas.com/c/COLE_AQUI_LINK_BASICO",
    features: [
      "Planilha de Backtest 2025 e 2026 (XAUUSD)",
      "Guias em branco para os seus backtests",
      "Controle do seu histórico de operações",
      "Calculadora de Lotes",
      "Dashboards automatizados e intuitivos",
    ],
  },
  {
    name: "Plano Avançado",
    tagline: "Mais materiais + acesso ao grupo no Telegram.",
    price: "R$ —",
    cadence: "pagamento único",
    cta: "Quero o Plano Avançado",
    ctaVariant: "outline",
    // ASAAS: cole aqui o Link de Pagamento do Plano Avançado
    checkoutUrl: "https://www.asaas.com/c/COLE_AQUI_LINK_AVANCADO",
    features: [
      "Backtest XAUUSD (2025 + 1º tri 2026)",
      "Backtest USDJPY (2025 + 1º tri 2026)",
      "Backtest EURUSD (2025)",
      "Backtest XAUUSD 4H/M5 (abertura da vela de 4H)",
      "Calculadora de Lotes",
      "Template com todas as marcações (MT5)",
      "Acesso ao grupo exclusivo no Telegram",
      "Suporte e troca de ideias",
    ],
  },
  {
    name: "Plano Completo+",
    tagline: "Tudo do Avançado + US30 + atualizações futuras.",
    price: "R$ —",
    cadence: "pagamento único",
    cta: "Quero o Plano Completo+",
    ctaVariant: "primary",
    highlight: true,
    // ASAAS: cole aqui o Link de Pagamento do Plano Completo+
    checkoutUrl: "https://www.asaas.com/c/COLE_AQUI_LINK_COMPLETO",
    features: [
      "Tudo do Plano Avançado",
      "Backtest completo US30 (2025 + 1º tri 2026)",
      "Atualizações com novos backtests",
      "Novos estudos liberados",
      "Acesso ao grupo no Telegram",
    ],
  },
];

export function Pricing() {
  return (
    <Section id="pricing" className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="Planos"
        title={
          <>
            Pagamento único.{" "}
            <span className="text-white/40">Acesso vitalício.</span>
          </>
        }
        description="Sem mensalidade, sem renovação. Você paga uma vez e o material fica seu para sempre — incluindo as atualizações futuras, nos planos com esse benefício."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {tiers.map((tier) => (
          <SpotlightCard
            key={tier.name}
            className={cn(
              "flex flex-col rounded-2xl border p-6 lift-on-hover",
              tier.highlight
                ? "border-sky-400/30 bg-gradient-to-b from-blue-500/[0.10] via-cyan-500/[0.05] to-transparent ring-1 ring-sky-400/15 hover:shadow-[0_24px_70px_-18px_rgba(30,95,255,0.55)] hover:border-sky-400/50"
                : "border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-white/[0.01] hover:border-white/20 hover:shadow-[0_20px_60px_-25px_rgba(0,0,0,0.6)]"
            )}
            spotlightColor={
              tier.highlight
                ? "rgba(56, 189, 248, 0.35)"
                : "rgba(255, 255, 255, 0.18)"
            }
          >
            {tier.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full border border-sky-300/40 bg-blue-500/20 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-sky-100 backdrop-blur">
                  Mais escolhido
                </span>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
              <p className="mt-1 text-sm text-white/55">{tier.tagline}</p>
            </div>

            <div className="mt-6 flex items-baseline gap-1.5">
              <span className="text-4xl font-semibold tracking-tight text-white">
                {tier.price}
              </span>
              {tier.cadence && (
                <span className="text-sm text-white/50">{tier.cadence}</span>
              )}
            </div>

            <Button
              asChild
              className="mt-6"
              variant={tier.ctaVariant}
              size="default"
            >
              <a
                href={tier.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tier.cta}
              </a>
            </Button>

            <ul className="mt-7 space-y-3 border-t border-white/5 pt-6">
              {tier.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-sm text-white/75"
                >
                  <span
                    className={cn(
                      "mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full",
                      tier.highlight
                        ? "bg-sky-400/25 text-sky-100"
                        : "bg-white/[0.06] text-white/60"
                    )}
                  >
                    <Check className="h-2.5 w-2.5" aria-hidden="true" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </SpotlightCard>
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-3xl items-center gap-4 rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-5 sm:gap-5 sm:p-6">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-sky-300/40 bg-blue-500/20 text-sky-100">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold text-white">
            Bônus em todos os planos
          </p>
          <p className="mt-1 text-sm leading-relaxed text-white/60">
            Prompt pronto para preencher o seu relatório de operações de forma
            automática — você cola, e o relatório fica pronto em segundos.
          </p>
        </div>
      </div>
    </Section>
  );
}
