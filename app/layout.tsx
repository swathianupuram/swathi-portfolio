import type { Metadata } from "next";
import "./globals.css";
import ScrollbarController from "./components/ScrollbarController";

export const metadata: Metadata = {
  title: "Swathi Anupuram | Frontend Developer",
  description: "Senior Frontend Developer with 9+ years of experience in React, Next.js, TypeScript, Angular, and modern web technologies. Based in Sydney, Australia.",
  keywords: "Frontend Developer, React, Next.js, TypeScript, Angular, MERN Stack, Sydney",
  openGraph: {
    title: "Swathi Anupuram | Frontend Developer",
    description: "9+ years building enterprise-grade web & mobile applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning><ScrollbarController />{children}</body>
    </html>
  );
}
