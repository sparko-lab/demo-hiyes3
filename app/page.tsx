"use client";

import React, { useState } from "react";
import { Header } from "@/components/header";
import { Section1 } from "@/components/sections/section-1";
import { Section2 } from "@/components/sections/section-2";
import { Section4 } from "@/components/sections/section-4";
import { Section5 } from "@/components/sections/section-5";
import { Section6 } from "@/components/sections/section-6";
import { Section8 } from "@/components/sections/section-8";
import { Section7 } from "@/components/sections/section-7";
import { BookingSection } from "@/components/sections/booking-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EEEAE7] text-[#1A1B1D]">
      {/* 頂部動態過渡 Header：富邦建設 ｜ 長慶建設 */}
      <Header
        onOpenBooking={() => {
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("open-booking-modal"));
          }
        }}
      />

      {/* Section 1: Fubon Fifty 開篇 */}
      <Section1 />

      {/* Section 2: What comes after fifty? */}
      <Section2 />

      {/* Section 4 */}
      <Section4 />

      {/* Section 5: 67 HA Central Park */}
      <Section5 />

      {/* Section 6: LIFE IN FLOW 影片背景 */}
      <Section6 />

      {/* Section 7: 伊東豊雄 Toyo Ito 拼貼聚集動畫 */}
      <Section7 />

      {/* Section 8: Form Follows Function. Form Follows Fiction. 手繪風透視圖 */}
      <Section8 />

      {/* 預約專屬空間鑑賞與貝茲曲線揭幕動畫 (完全同步 mono-e-commerce-template) */}
      <BookingSection />
    </main>
  );
}
