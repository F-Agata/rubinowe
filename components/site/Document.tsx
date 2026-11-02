import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import { dictionaries, localePath, type Locale } from "@/lib/content";
import "@/app/globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz", "wdth"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export function buildMetadata(lang: Locale): Metadata {
  const { meta } = dictionaries[lang];
  return {
    metadataBase: new URL("https://rubinowe.pl"),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localePath[lang],
      languages: { pl: localePath.pl, en: localePath.en, "x-default": localePath.pl },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: lang === "pl" ? "pl_PL" : "en_GB",
      type: "website",
      siteName: "Rubinowe",
    },
    icons: { icon: "/favicon.ico" },
  };
}

/** Shared <html> shell for both language root layouts. */
export function Document({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
