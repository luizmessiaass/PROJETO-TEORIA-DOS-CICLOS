import { LogoLoop, type LogoItem } from "@/components/ui/logo-loop";
import {
  Northwind,
  HelixLabs,
  VantaStudio,
  Lumen,
  ForgeCo,
  Polaris,
  AtlasBio,
  Cascade,
} from "@/components/sections/fictional-logos";

const brandLogos: LogoItem[] = [
  { node: <Northwind />, title: "Northwind", ariaLabel: "Northwind" },
  { node: <HelixLabs />, title: "Helix Labs", ariaLabel: "Helix Labs" },
  { node: <VantaStudio />, title: "Vanta Studio", ariaLabel: "Vanta Studio" },
  { node: <Lumen />, title: "Lumen", ariaLabel: "Lumen" },
  { node: <ForgeCo />, title: "Forge & Co", ariaLabel: "Forge & Co" },
  { node: <Polaris />, title: "Polaris", ariaLabel: "Polaris" },
  { node: <AtlasBio />, title: "Atlas Bio", ariaLabel: "Atlas Bio" },
  { node: <Cascade />, title: "Cascade", ariaLabel: "Cascade" },
];

export function LogoCloud() {
  return (
    <section className="relative border-y border-white/5 bg-zinc-950/40 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-white/40">
          Mais de 4.000 traders já operam com a Teoria dos Ciclos
        </p>

        <div className="relative mt-8 text-white/55 transition-colors hover:text-white/80">
          <LogoLoop
            logos={brandLogos}
            speed={55}
            direction="left"
            logoHeight={26}
            gap={64}
            hoverSpeed={15}
            scaleOnHover
            fadeOut
            fadeOutColor="#09090b"
            ariaLabel="Marcas que confiam na Teoria dos Ciclos"
          />
        </div>
      </div>
    </section>
  );
}
