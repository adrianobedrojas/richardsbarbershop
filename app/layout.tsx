import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Richard's Barbershop | Fresh Cuts & Classic Service",
  description: "Explore Richard's Barbershop, view our work, and find directions and contact information.",
  icons: { icon: "https://raw.githubusercontent.com/adrianobedrojas/richardsbarbershop/main/49129.jpg", shortcut: "https://raw.githubusercontent.com/adrianobedrojas/richardsbarbershop/main/49129.jpg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
