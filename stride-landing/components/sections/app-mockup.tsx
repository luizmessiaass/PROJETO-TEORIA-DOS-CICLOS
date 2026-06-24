import { Search, Plus, Filter, Circle, CheckCircle2, Clock, Inbox, Layers, BarChart3, Calendar, Users2, Settings } from "lucide-react";

const sidebarItems = [
  { Icon: Inbox, label: "Caixa de entrada", badge: "12" },
  { Icon: Layers, label: "Projetos" },
  { Icon: Calendar, label: "Ciclos" },
  { Icon: BarChart3, label: "Insights" },
  { Icon: Users2, label: "Time" },
  { Icon: Settings, label: "Configurações" },
];

const projects = [
  { name: "Apollo", color: "bg-blue-500" },
  { name: "Atlas", color: "bg-cyan-500" },
  { name: "Cascade", color: "bg-cyan-400" },
  { name: "Helios", color: "bg-amber-400" },
];

type Task = {
  id: string;
  title: string;
  status: "todo" | "progress" | "done";
  tag: string;
  tagColor: string;
  assignee: string;
};

const tasks: Task[] = [
  {
    id: "STR-204",
    title: "Refatorar auth para suportar provedores SSO",
    status: "progress",
    tag: "Backend",
    tagColor: "text-sky-300 bg-blue-500/10 border-sky-400/20",
    assignee: "MR",
  },
  {
    id: "STR-198",
    title: "Migrar dashboard de billing para o novo design system",
    status: "progress",
    tag: "Design",
    tagColor: "text-cyan-300 bg-cyan-500/10 border-cyan-400/20",
    assignee: "JL",
  },
  {
    id: "STR-211",
    title: "Resumos de standup por IA no digest semanal",
    status: "todo",
    tag: "IA",
    tagColor: "text-cyan-300 bg-cyan-500/10 border-cyan-400/20",
    assignee: "AK",
  },
  {
    id: "STR-187",
    title: "Melhorar perf da virtualização de boards grandes",
    status: "done",
    tag: "Frontend",
    tagColor: "text-emerald-300 bg-emerald-500/10 border-emerald-400/20",
    assignee: "DV",
  },
  {
    id: "STR-219",
    title: "Teste A/B do fluxo de onboarding — variante C",
    status: "todo",
    tag: "Growth",
    tagColor: "text-amber-300 bg-amber-500/10 border-amber-400/20",
    assignee: "SO",
  },
];

function StatusIcon({ status }: { status: Task["status"] }) {
  if (status === "done")
    return <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-label="Concluído" />;
  if (status === "progress")
    return <Clock className="h-4 w-4 text-amber-400" aria-label="Em andamento" />;
  return <Circle className="h-4 w-4 text-white/30" aria-label="A fazer" />;
}

export function AppMockup() {
  return (
    <div className="ring-glow relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 backdrop-blur-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/5 bg-zinc-900/60 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        <div className="mx-auto flex items-center gap-2 rounded-md border border-white/5 bg-white/[0.03] px-3 py-1 text-[11px] text-white/40">
          <span>app.stride.io</span>
          <span className="text-white/20">/workspace/apollo</span>
        </div>
      </div>

      <div className="grid grid-cols-[180px_1fr] sm:grid-cols-[220px_1fr]">
        <aside className="border-r border-white/5 bg-zinc-950/50 p-3">
          <div className="mb-4 flex items-center justify-between rounded-md border border-white/5 bg-white/[0.02] px-2.5 py-1.5 text-xs text-white/50">
            <span>Acme Inc</span>
            <span className="text-white/30">⌘K</span>
          </div>
          <ul className="space-y-0.5">
            {sidebarItems.map(({ Icon, label, badge }, idx) => (
              <li
                key={label}
                className={`flex items-center justify-between rounded-md px-2.5 py-1.5 text-xs ${
                  idx === 1
                    ? "bg-white/[0.06] text-white"
                    : "text-white/60"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {label}
                </span>
                {badge && (
                  <span className="rounded-full bg-blue-500/25 px-1.5 text-[10px] font-medium text-sky-100">
                    {badge}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-5 px-2.5 text-[10px] font-medium uppercase tracking-wider text-white/30">
            Projetos
          </div>
          <ul className="mt-2 space-y-0.5">
            {projects.map((p) => (
              <li
                key={p.name}
                className="flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-xs text-white/60"
              >
                <span className={`h-1.5 w-1.5 rounded-full ${p.color}`} />
                {p.name}
              </li>
            ))}
          </ul>
        </aside>

        <main className="p-4 sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-white/40">
                <span>Apollo</span>
                <span>/</span>
                <span className="text-white/70">Ciclo atual</span>
              </div>
              <h3 className="mt-1 text-lg font-semibold text-white">
                Ciclo 14 · Entrega na sexta
              </h3>
            </div>
            <div className="hidden items-center gap-1.5 sm:flex">
              <button className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-xs text-white/70">
                <Filter className="h-3.5 w-3.5" aria-hidden="true" /> Filtrar
              </button>
              <button className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-xs text-white/70">
                <Search className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              <button className="flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1.5 text-xs font-medium text-zinc-950">
                <Plus className="h-3.5 w-3.5" aria-hidden="true" /> Nova issue
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/5">
            <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-4 py-2">
              <span className="text-xs font-medium text-white/60">
                Em andamento · 5
              </span>
              <span className="text-[10px] text-white/30">Arraste para reordenar</span>
            </div>
            <ul className="divide-y divide-white/5">
              {tasks.map((t) => (
                <li
                  key={t.id}
                  className="grid grid-cols-[auto_72px_1fr_auto_auto] items-center gap-3 px-4 py-3 transition-colors hover:bg-white/[0.02]"
                >
                  <StatusIcon status={t.status} />
                  <span className="font-mono text-[11px] text-white/40">
                    {t.id}
                  </span>
                  <span className="truncate text-sm text-white/85">
                    {t.title}
                  </span>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${t.tagColor}`}
                  >
                    {t.tag}
                  </span>
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-[10px] font-semibold text-zinc-950">
                    {t.assignee}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: "Velocidade", value: "42", delta: "+8%" },
              { label: "No prazo", value: "94%", delta: "+2%" },
              { label: "Saúde do ciclo", value: "A+", delta: "estável" },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-lg border border-white/5 bg-white/[0.02] p-3"
              >
                <div className="text-[10px] uppercase tracking-wider text-white/40">
                  {kpi.label}
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-xl font-semibold text-white">
                    {kpi.value}
                  </span>
                  <span className="text-[10px] text-emerald-300">
                    {kpi.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
