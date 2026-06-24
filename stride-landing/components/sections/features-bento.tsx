import { Section, SectionHeading } from "@/components/ui/section";
import {
  CalendarRange,
  Sparkles,
  Map,
  MessagesSquare,
  Zap,
  LineChart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import SpotlightCard from "@/components/SpotlightCard";

function Cell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <SpotlightCard
      className={cn(
        "group rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 transition-colors hover:border-white/15",
        className
      )}
      spotlightColor="rgba(30, 95, 255, 0.18)"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at 50% 0%, rgba(30,95,255,0.14), transparent 60%)",
        }}
      />
      {children}
    </SpotlightCard>
  );
}

function CellHeader({
  Icon,
  title,
  description,
}: {
  Icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-sky-300">
        <Icon className="h-4 w-4" aria-hidden={true} />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/55">{description}</p>
    </div>
  );
}

export function FeaturesBento() {
  return (
    <Section id="features" className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="Produto"
        title={
          <>
            Tudo o que seu time precisa.{" "}
            <span className="text-white/40">Nada do que não precisa.</span>
          </>
        }
        description="O Stride reúne sprints, roadmaps, docs e standups em um único workspace rápido e com atalhos de teclado."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[auto_auto]">
        <Cell className="md:col-span-2 md:row-span-1">
          <CellHeader
            Icon={CalendarRange}
            title="Planejamento de sprint que cabe na sua cabeça"
            description="Arraste, solte, estime. Balanceie a carga entre o time automaticamente e acompanhe a saúde do ciclo em tempo real."
          />
          <div className="mt-6 grid grid-cols-7 gap-1.5">
            {Array.from({ length: 35 }).map((_, i) => {
              const intensity = [0, 0.15, 0.3, 0.5, 0.7, 0.9][i % 6];
              return (
                <div
                  key={i}
                  className="aspect-square rounded-sm border border-white/5"
                  style={{
                    background: `rgba(30, 95, 255, ${intensity})`,
                  }}
                />
              );
            })}
          </div>
        </Cell>

        <Cell>
          <CellHeader
            Icon={Sparkles}
            title="Standups por IA"
            description="Resumos diários escritos a partir da sua atividade. Sem mais reuniões do tipo &quot;o que você entregou?&quot;."
          />
          <div className="mt-6 space-y-2">
            {[
              "Entreguei 3 issues, 1 spec",
              "Bloqueado em: review da api/v2",
              "A seguir: redesign do onboarding",
            ].map((line, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-md border border-white/5 bg-white/[0.02] px-3 py-2 text-xs text-white/70"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                {line}
              </div>
            ))}
          </div>
        </Cell>

        <Cell>
          <CellHeader
            Icon={Map}
            title="Roadmaps sem planilhas"
            description="Apostas trimestrais, ciclos semanais, issues diárias — conectados por design."
          />
          <div className="mt-6 space-y-2">
            {[
              { name: "T3 — Billing v2", w: "85%", color: "bg-blue-500" },
              { name: "T3 — Mobile beta", w: "62%", color: "bg-cyan-500" },
              { name: "T4 — SSO corporativo", w: "28%", color: "bg-sky-300" },
            ].map((r) => (
              <div key={r.name}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="text-white/70">{r.name}</span>
                  <span className="font-mono text-[10px] text-white/40">
                    {r.w}
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.04]">
                  <div
                    className={cn("h-full rounded-full", r.color)}
                    style={{ width: r.w }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Cell>

        <Cell className="md:col-span-2">
          <CellHeader
            Icon={MessagesSquare}
            title="Colaboração em tempo real, com presença em primeiro lugar"
            description="Veja quem está olhando o quê, cursores multiplayer e comentários em thread em cada issue e documento."
          />
          <div className="mt-6 flex -space-x-2">
            {[
              { i: "MR", from: "from-blue-400", to: "to-cyan-400" },
              { i: "JL", from: "from-sky-300", to: "to-blue-500" },
              { i: "AK", from: "from-amber-400", to: "to-pink-400" },
              { i: "DV", from: "from-emerald-400", to: "to-cyan-400" },
              { i: "SO", from: "from-cyan-300", to: "to-blue-400" },
            ].map((a) => (
              <div
                key={a.i}
                className={cn(
                  "grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ring-2 ring-zinc-950 text-[11px] font-semibold text-zinc-950",
                  a.from,
                  a.to
                )}
              >
                {a.i}
              </div>
            ))}
            <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-medium text-white/60 ring-2 ring-zinc-950">
              +24
            </div>
          </div>
        </Cell>

        <Cell>
          <CellHeader
            Icon={Zap}
            title="Automações, sem YAML"
            description="Dispare workflows por status, label ou data limite. Construtor de regras visual e totalmente versionado."
          />
        </Cell>

        <Cell>
          <CellHeader
            Icon={LineChart}
            title="Insights que as lideranças realmente abrem"
            description="Cycle time, aumento de escopo, taxa de entregas no prazo. Enviado por e-mail toda segunda-feira."
          />
          <div className="mt-6 flex h-20 items-end gap-1.5">
            {[28, 42, 35, 50, 46, 62, 58, 70, 65, 78, 72, 84].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-blue-500/30 to-cyan-400/80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </Cell>
      </div>
    </Section>
  );
}
