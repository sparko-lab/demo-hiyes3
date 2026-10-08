"use client";

import React, { useState } from "react";
import { Header } from "@/components/header";
import { Section1 } from "@/components/sections/section-1";
import { Section2 } from "@/components/sections/section-2";
import { Section4 } from "@/components/sections/section-4";
import { Section5 } from "@/components/sections/section-5";
import { Section8 } from "@/components/sections/section-8";
import { Section7 } from "@/components/sections/section-7";
import { BookingModal } from "@/components/booking-modal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#EEEAE7] text-[#1A1B1D]">
      {/* 頂部動態過渡 Header：富邦建設 ｜ 長慶建設 */}
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Section 1: Fubon Fifty 開篇 */}
      <Section1 />

      {/* Section 2: What comes after fifty? */}
      <Section2 />

      {/* Section 4 */}
      <Section4 />

      {/* Section 5: 67 HA Central Park */}
      <Section5 />
    
      {/* Section 7: 伊東豊雄 Toyo Ito 拼貼聚集動畫 */}
      <Section7 />

      {/* Section 8: Life in Flow 手繪風透視剖面圖 */}
      <Section8 />

      {/* 彈出式預約專屬鑑賞 Modal */}
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </main>
  );
}
