import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-dot mask-radial-fade opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/30 blur-[140px]"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-[56px] md:leading-[1.05]">
          Experimente o Stride grátis.{" "}
          <span className="text-gradient-brand">Entregue até sexta.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/65 sm:text-lg">
          Configure seu workspace em menos de 4 minutos. Traga seu time amanhã.
          Cancele quando quiser — embora você não vá querer.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" variant="primary">
            <Link href="#">
              Começar grátis
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#">Falar com vendas</Link>
          </Button>
        </div>
        <p className="mt-5 text-xs text-white/40">
          14 dias de teste do plano Pro · Sem cartão de crédito
        </p>
      </div>
    </section>
  );
}
