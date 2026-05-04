import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shipyard Studio — Your Full Product Team",
  description: "AI product studio delivering strategy + product + growth as a unified embedded team. From first line of code to first 10,000 users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
