import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AppMockup } from "@/components/sections/app-mockup";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid mask-radial-fade"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-blue-600/35 blur-[140px] motion-safe:[animation:subtle-pulse_6s_ease-in-out_infinite,drift-slow_18s_ease-in-out_infinite] motion-reduce:animate-subtle-pulse"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[10%] -z-10 h-[360px] w-[460px] rounded-full bg-cyan-500/20 blur-[120px] motion-safe:animate-drift-slower"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10%] top-[28%] -z-10 h-[320px] w-[460px] rounded-full bg-blue-500/25 blur-[120px] motion-safe:animate-drift-slow"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
        <Badge className="animate-fade-up">
          <Sparkles className="h-3.5 w-3.5 text-sky-300" aria-hidden="true" />
          <span>Agora com standups por IA</span>
          <span className="text-white/30">·</span>
          <Link
            href="#"
            className="cursor-pointer text-white/80 transition-colors hover:text-white"
          >
            Veja as novidades →
          </Link>
        </Badge>

        <h1 className="mt-7 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl animate-fade-up">
          Faça o trabalho avançar,{" "}
          <span className="text-gradient-brand">mais rápido.</span>
        </h1>

        <p
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg animate-fade-up"
          style={{ animationDelay: "60ms" }}
        >
          Stride é o workspace de projetos feito para times rápidos. Planeje
          sprints, acompanhe o trabalho e entregue em conjunto — sem o peso das
          ferramentas antigas.
        </p>

        <div
          className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          <Button asChild size="lg" variant="primary">
            <Link href="#cta">
              Começar grátis
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#">
              <Play className="h-4 w-4" aria-hidden="true" />
              Ver demo de 2 min
            </Link>
          </Button>
        </div>

        <p
          className="mt-5 text-xs text-white/40 animate-fade-up"
          style={{ animationDelay: "180ms" }}
        >
          Grátis para times com até 10 pessoas · Sem cartão de crédito · SOC 2 Tipo II
        </p>

        <div
          className="relative mt-16 w-full motion-safe:animate-[fade-up_600ms_cubic-bezier(0.22,1,0.36,1)_both,float-soft_7s_ease-in-out_infinite_1.2s] motion-reduce:animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 -z-10 bg-gradient-to-b from-blue-500/12 via-cyan-500/5 to-transparent blur-2xl"
          />
          <AppMockup />
        </div>
      </div>
    </section>
  );
}
