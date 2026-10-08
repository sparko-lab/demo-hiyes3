import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "富邦建設 50 領銜鉅獻 ╳ 伊東豊雄 | 水湳中央公園首排",
  description: "富邦50週年領銜鉅獻，普立茲克建築大師伊東豊雄親自操刀，入主水湳中央公園67公頃綠浪首席。專屬私密鑑賞通道。",
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
