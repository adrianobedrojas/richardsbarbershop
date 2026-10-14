import type { Metadata } from "next";
import { shop } from "./site-config";
import { siteUrl, siteTitle, siteDescription } from "./seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: shop.name,
    title: siteTitle,
    description: siteDescription,
    images: [{ url: shop.logo, alt: shop.name }],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: [shop.logo],
  },
  icons: { icon: shop.logo, shortcut: shop.logo },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
