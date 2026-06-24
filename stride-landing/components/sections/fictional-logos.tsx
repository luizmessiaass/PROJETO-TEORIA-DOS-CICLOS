import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const iconBase = "h-[22px] w-[22px] shrink-0 text-current";
const wordmarkBase =
  "font-semibold tracking-[-0.01em] text-[17px] leading-none whitespace-nowrap";

function Mark({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-current">
      {children}
    </span>
  );
}

/* 1 — Northwind: bússola refinada com N estilizado */
function NorthwindIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconBase} {...props}>
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="0.9" opacity="0.4" />
      <path d="M12 3.5 L14.8 12 L12 20.5 L9.2 12 Z" fill="currentColor" />
      <path d="M12 3.5 L12 12 L9.2 12 Z" fill="#000" opacity="0.4" />
      <circle cx="12" cy="12" r="1.3" fill="#000" opacity="0.7" />
    </svg>
  );
}
export function Northwind() {
  return (
    <Mark>
      <NorthwindIcon />
      <span className={wordmarkBase}>Northwind</span>
    </Mark>
  );
}

/* 2 — Helix Labs: dupla hélice com pontes científicas */
function HelixIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconBase} {...props}>
      <path
        d="M5 3 C 14 7, 10 17, 19 21 M19 3 C 10 7, 14 17, 5 21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.7">
        <line x1="7.5" y1="6.5" x2="16.5" y2="6.5" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="7.5" y1="17.5" x2="16.5" y2="17.5" />
      </g>
    </svg>
  );
}
export function HelixLabs() {
  return (
    <Mark>
      <HelixIcon />
      <span className={wordmarkBase}>
        Helix<span className="opacity-60"> Labs</span>
      </span>
    </Mark>
  );
}

/* 3 — Vanta Studio: V geométrico em prisma */
function VantaIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconBase} {...props}>
      <path d="M2.5 4 L12 21 L21.5 4 Z" fill="currentColor" opacity="0.18" />
      <path d="M2.5 4 L12 21 L21.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M7.5 4 L12 13 L16.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="12" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}
export function VantaStudio() {
  return (
    <Mark>
      <VantaIcon />
      <span className={wordmarkBase}>
        Vanta<span className="opacity-60"> Studio</span>
      </span>
    </Mark>
  );
}

/* 4 — Lumen: sol com 12 raios e núcleo cromado */
function LumenIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconBase} {...props}>
      <circle cx="12" cy="12" r="4.2" fill="currentColor" />
      <circle cx="12" cy="12" r="2.3" fill="#000" opacity="0.35" />
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <line x1="12" y1="1.8" x2="12" y2="5.2" />
        <line x1="12" y1="18.8" x2="12" y2="22.2" />
        <line x1="1.8" y1="12" x2="5.2" y2="12" />
        <line x1="18.8" y1="12" x2="22.2" y2="12" />
      </g>
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.8">
        <line x1="4.6" y1="4.6" x2="6.8" y2="6.8" />
        <line x1="17.2" y1="17.2" x2="19.4" y2="19.4" />
        <line x1="4.6" y1="19.4" x2="6.8" y2="17.2" />
        <line x1="17.2" y1="6.8" x2="19.4" y2="4.6" />
      </g>
    </svg>
  );
}
export function Lumen() {
  return (
    <Mark>
      <LumenIcon />
      <span className={wordmarkBase}>Lumen</span>
    </Mark>
  );
}

/* 5 — Forge & Co: chama sólida com núcleo */
function ForgeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconBase} {...props}>
      <path
        d="M12 1.8 C 13.2 6.6, 17.4 8.2, 17.4 13.4 C 17.4 17.4, 14.6 20.5, 12 20.5 C 9.4 20.5, 6.6 17.4, 6.6 13.4 C 6.6 10.2, 8.6 9.2, 9.8 5.8 C 10.4 7.4, 10.9 8, 12 9.2 Z"
        fill="currentColor"
      />
      <path
        d="M12 11.4 C 12.6 13.6, 14.2 14.8, 14.2 17 C 14.2 18.6, 13.2 19.6, 12 19.6 C 10.8 19.6, 9.8 18.6, 9.8 17 C 9.8 15.4, 11 14.4, 11.4 12.2 Z"
        fill="#000"
        opacity="0.55"
      />
    </svg>
  );
}
export function ForgeCo() {
  return (
    <Mark>
      <ForgeIcon />
      <span className={wordmarkBase}>
        Forge<span className="opacity-60"> &amp; Co</span>
      </span>
    </Mark>
  );
}

/* 6 — Polaris: estrela de 4 pontas brilhante */
function PolarisIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconBase} {...props}>
      <path
        d="M12 1.5 L13.7 10.3 L22.5 12 L13.7 13.7 L12 22.5 L10.3 13.7 L1.5 12 L10.3 10.3 Z"
        fill="currentColor"
      />
      <path
        d="M12 6.5 L12.7 11.3 L17.5 12 L12.7 12.7 L12 17.5 L11.3 12.7 L6.5 12 L11.3 11.3 Z"
        fill="#000"
        opacity="0.35"
      />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}
export function Polaris() {
  return (
    <Mark>
      <PolarisIcon />
      <span className={wordmarkBase}>Polaris</span>
    </Mark>
  );
}

/* 7 — Atlas Bio: globo com folha entrelaçada */
function AtlasBioIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconBase} {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5 12 C 7 12, 14 6, 18 8 C 19 11, 16 17, 7 17"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="currentColor"
        fillOpacity="0.25"
      />
      <path
        d="M8 14 C 11 11, 14 9, 17 9"
        stroke="#000"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.5"
      />
      <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="currentColor" strokeWidth="0.9" opacity="0.5" />
    </svg>
  );
}
export function AtlasBio() {
  return (
    <Mark>
      <AtlasBioIcon />
      <span className={wordmarkBase}>
        Atlas<span className="opacity-60"> Bio</span>
      </span>
    </Mark>
  );
}

/* 8 — Cascade: três ondas em queda com peso */
function CascadeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconBase} {...props}>
      <path
        d="M2.5 6.5 C 6.5 11, 12 4.5, 17.5 8.5 C 19.8 10.2, 20.5 10.4, 21.5 10.4"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M2.5 12.5 C 6.5 17, 12 10.5, 17.5 14.5 C 19.8 16.2, 20.5 16.4, 21.5 16.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M2.5 18.5 C 6.5 22.5, 12 16.5, 17.5 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}
export function Cascade() {
  return (
    <Mark>
      <CascadeIcon />
      <span className={wordmarkBase}>Cascade</span>
    </Mark>
  );
}
