"use client";

import React, { useState } from "react";
import { Header } from "@/components/header";
import { Section4 } from "@/components/sections/section-4";
import { Section7 } from "@/components/sections/section-7";
import { BookingModal } from "@/components/booking-modal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#EEEAE7] text-[#1A1B1D]">
      {/* 頂部動態過渡 Header：富邦建設 ｜ 長慶建設 */}
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Section 4 */}
      <Section4 />

      {/* Section 7: 伊東豊雄 Toyo Ito 拼貼聚集動畫 */}
      <Section7 />

      {/* 彈出式預約專屬鑑賞 Modal */}
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </main>
  );
}
