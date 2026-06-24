import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tools = [
  "GitHub", "Linear", "Slack", "Figma", "Notion", "Vercel",
  "Sentry", "Loom", "Zapier", "Zoom", "PagerDuty", "Datadog",
];

function Tile({ name }: { name: string }) {
  return (
    <div className="group flex aspect-square items-center justify-center rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-4 text-center transition-all hover:border-white/15 hover:bg-white/[0.04]">
      <div className="space-y-1.5">
        <div
          aria-hidden="true"
          className="mx-auto h-7 w-7 rounded-md bg-gradient-to-br from-white/30 to-white/5"
        />
        <div className="text-xs font-medium text-white/65 transition-colors group-hover:text-white">
          {name}
        </div>
      </div>
    </div>
  );
}

export function Integrations() {
  return (
    <Section id="integrations" className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="Integrações"
        title={
          <>
            Conversa bem com sua stack.{" "}
            <span className="text-white/40">Bidirecional, em tempo real.</span>
          </>
        }
        description="O Stride se conecta às ferramentas que você já usa. Sem ginástica de webhook nem intermediário no Zapier."
      />

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {tools.map((t) => (
          <Tile key={t} name={t} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button asChild variant="ghost" size="sm">
          <Link href="#">
            Ver mais de 60 integrações
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
