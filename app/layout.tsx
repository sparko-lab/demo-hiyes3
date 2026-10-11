import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "富邦建設 ✕ 長慶建設",
  description: "在公園第一排，遇見下一種生活，誠摯邀請您蒞臨，VVIP私享鑑賞",
  openGraph: {
    title: "富邦建設 ✕ 長慶建設",
    description: "在公園第一排，遇見下一種生活，誠摯邀請您蒞臨，VVIP私享鑑賞",
    url: "/",
    siteName: "富邦建設 ✕ 長慶建設",
    images: [
      {
        url: "/funbon-land.png",
        width: 1200,
        height: 630,
        alt: "富邦建設 ✕ 長慶建設",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-[#F7F6F2] text-[#1A1B1D] selection:bg-[#8E8268]/20 selection:text-[#1A1B1D]">
        {children}
      </body>
    </html>
  );
}
