import { Section, SectionHeading } from "@/components/ui/section";
import { Lightbulb, GitBranch, Rocket } from "lucide-react";

const steps = [
  {
    Icon: Lightbulb,
    label: "01 · Capturar",
    title: "Ideias entram, na hora",
    description:
      "Captura rápida pelo Slack, e-mail ou ⌘+K. Triagem em segundos, não em segundas-feiras.",
  },
  {
    Icon: GitBranch,
    label: "02 · Planejar",
    title: "Ciclos em que seu time confia",
    description:
      "Sprints autobalanceadas com capacidade, dependências e nível de confiança embutidos.",
  },
  {
    Icon: Rocket,
    label: "03 · Entregar",
    title: "Loop fechado com GitHub e Linear",
    description:
      "Issues, PRs e releases caminham juntos. Clientes veem o que foi entregue, automaticamente.",
  },
];

export function Workflow() {
  return (
    <Section id="workflow" className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="Workflow"
        title={
          <>
            Da ideia bruta à feature entregue{" "}
            <span className="text-white/40">em um único workspace.</span>
          </>
        }
        description="Um caminho linear no meio da bagunça — sem a cerimônia das ferramentas antigas de gestão de projetos."
      />

      <div className="relative grid gap-4 md:grid-cols-3">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 border-t border-dashed border-white/10 md:block"
        />
        {steps.map(({ Icon, label, title, description }, i) => (
          <div
            key={label}
            className="relative rounded-2xl border border-white/[0.07] bg-zinc-950/60 p-6 backdrop-blur"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02] text-sky-300">
              <Icon className="h-4.5 w-4.5" aria-hidden="true" />
            </div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-white/40">
              {label}
            </div>
            <h3 className="mt-1 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              {description}
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-sky-300/85">
              <span className="h-px w-6 bg-sky-300/50" />
              {i === 0 && "Triagem média: 14s"}
              {i === 1 && "Planeje um ciclo em 6 minutos"}
              {i === 2 && "Releases sem copia-e-cola"}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
