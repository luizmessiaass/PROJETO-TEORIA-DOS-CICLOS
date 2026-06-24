import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teoria dos Ciclos — Relatórios Semanais",
  description:
    "Domine os ciclos do mercado com relatórios semanais exclusivos, backtests e estudos. Pagamento único, acesso vitalício.",
  metadataBase: new URL("https://teoriadosciclos.example.com"),
  openGraph: {
    title: "Teoria dos Ciclos — Relatórios Semanais",
    description:
      "Backtests, estudos e relatórios semanais para você antecipar movimentos do mercado.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
