import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  showWordmark = true,
  size = 26,
}: {
  className?: string;
  showWordmark?: boolean;
  size?: number;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span
        className="relative inline-flex shrink-0 overflow-hidden rounded-full ring-1 ring-white/15"
        style={{
          width: size,
          height: size,
          boxShadow:
            "0 0 0 1px rgba(102,179,255,0.25), 0 0 18px rgba(30,95,255,0.55), 0 0 38px rgba(30,95,255,0.25)",
        }}
      >
        <Image
          src="/logo-teoria-ciclos.jpeg"
          alt=""
          width={size * 2}
          height={size * 2}
          priority
          className="h-full w-full object-cover"
        />
      </span>
      {showWordmark && (
        <span className="text-[15px] font-semibold tracking-tight text-white">
          Teoria dos Ciclos
        </span>
      )}
    </div>
  );
}
