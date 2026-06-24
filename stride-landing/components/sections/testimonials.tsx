import { Section, SectionHeading } from "@/components/ui/section";
import SpotlightCard from "@/components/SpotlightCard";

type Quote = {
  body: string;
  name: string;
  role: string;
  initials: string;
  gradient: string;
};

const quotes: Quote[] = [
  {
    body:
      "Substituímos três ferramentas pelo Stride e recuperamos nossas sextas à tarde. Agora os ciclos terminam no prazo de verdade.",
    name: "Maya Reyes",
    role: "Head de Engenharia, Northwind",
    initials: "MR",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    body:
      "O standup por IA escreve meu update de segunda. Eu pareço preparado. Não estou. É perfeito.",
    name: "Jonas Lindqvist",
    role: "Product Lead, Helix Labs",
    initials: "JL",
    gradient: "from-sky-300 to-blue-500",
  },
  {
    body:
      "Trocar o Jira pelo Stride foi a decisão de maior impacto do trimestre. O time genuinamente quer abrir a ferramenta.",
    name: "Aisha Kone",
    role: "VP de Engenharia, Cascade",
    initials: "AK",
    gradient: "from-amber-400 to-pink-400",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="Amado por quem constrói"
        title={
          <>
            Times entregam mais rápido com o Stride.{" "}
            <span className="text-white/40">É o que dizem.</span>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-3">
        {quotes.map((q) => (
          <SpotlightCard
            key={q.name}
            className="flex h-full flex-col justify-between rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6"
            spotlightColor="rgba(125, 211, 252, 0.22)"
          >
            <figure className="flex h-full flex-col justify-between">
              <svg
                aria-hidden="true"
                className="mb-4 h-6 w-6 text-sky-300/60"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.17A2 2 0 0 1 7.17 9V6Zm10 0a5.17 5.17 0 0 0-5.17 5.17V18h6.83v-6.83h-3.66a2 2 0 0 1 2-2.17V6Z" />
              </svg>
              <blockquote className="text-[15px] leading-relaxed text-white/85">
                &quot;{q.body}&quot;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br text-[11px] font-semibold text-zinc-950 ${q.gradient}`}
                  aria-hidden="true"
                >
                  {q.initials}
                </span>
                <div>
                  <div className="text-sm font-medium text-white">{q.name}</div>
                  <div className="text-xs text-white/50">{q.role}</div>
                </div>
              </figcaption>
            </figure>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}
