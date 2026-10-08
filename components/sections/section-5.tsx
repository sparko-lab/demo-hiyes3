"use client";

import React from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Section5() {
  return (
    <section className="relative w-full h-[690px] sm:h-[750px] md:h-[770px] lg:h-[850px] flex flex-col justify-end overflow-hidden bg-[#1A1B1D] text-white select-none pb-16 sm:pb-20 md:pb-24">
      {/* ======================================================== */}
      {/* 沉浸式空拍全景背景：public/images/section-5.jpeg             */}
      {/* 水湳中央公園宏偉地景，居中取景貫穿城市天際線與有機生態湖       */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/section-5.jpeg"
          alt="67 HA Central Park"
          fill
          priority
          className="object-cover object-[50%_center] sm:object-center"
        />

        {/* 從背景最底部向上暈染的黑色半透明遮罩，確保文字通透清晰 */}
        <div className="absolute inset-x-0 bottom-0 h-[65%] sm:h-[60%] bg-gradient-to-t from-black/85 via-black/50 via-45% to-transparent pointer-events-none" />
      </div>

      {/* ======================================================== */}
      {/* 核心文案區域：沉浸於底部黑色半透明漸層中，無生硬邊框，純粹策展感   */}
      {/* 位於畫面下半部，置中對齊，香檳金小標 + 白字詩意主旨            */}
      {/* ======================================================== */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        {/* 1. 英文小標：香檳金銅色 (Champagne Brass) */}
        <ScrollReveal delay={100} direction="up">
          <h3 className="font-sans font-medium text-xs sm:text-sm md:text-base tracking-[0.25em] sm:tracking-[0.32em] uppercase text-[#D5C49A] drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] mb-3 sm:mb-4">
            67 HA CENTRAL PARK
          </h3>
        </ScrollReveal>

        {/* 2. 中文主標第一行 */}
        <ScrollReveal delay={200} direction="up">
          <p className="font-light text-base sm:text-xl md:text-2xl tracking-[0.24em] sm:tracking-[0.34em] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] mb-2 leading-relaxed">
            6 7 公 頃 中 央 公 園
          </p>
        </ScrollReveal>

        {/* 3. 中文主標第二行 */}
        <ScrollReveal delay={300} direction="up">
          <p className="font-light text-base sm:text-xl md:text-2xl tracking-[0.24em] sm:tracking-[0.34em] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] leading-relaxed">
            讓 自 然 成 為 日 常
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
