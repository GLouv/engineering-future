import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Civil Engineering Automation - Future Insights",
  description: "Explore how automation will transform civil engineering over the next 20 years. Stay updated with the latest developments in construction technology and automation.",
  keywords: "civil engineering, automation, construction technology, future of construction, AI in construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
