import type { Viewport } from "next";
import { Document, buildMetadata } from "@/components/site/Document";

export const metadata = buildMetadata("en");
export const viewport: Viewport = { themeColor: "#E30613" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Document lang="en">{children}</Document>;
}
