"use client";

import React from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Section6() {
  return (
    <section className="relative w-full h-[690px] sm:h-[750px] md:h-[770px] lg:h-[850px] flex flex-col justify-end overflow-hidden bg-[#1A1B1D] text-white select-none pb-16 sm:pb-20 md:pb-24">
      {/* ======================================================== */}
      {/* 背景影片：public/images/section-6.mov                         */}
      {/* 無邊際景觀陽台、晨光晨曦與自然微風吹拂紗簾之沉浸式動態          */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          src="/images/section-6.mov"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />

        {/* 輕量級氛圍調和遮罩 */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />

        {/* 底部向上暈染的黑色半透明漸層：確保文案極度通透清晰 */}
        <div className="absolute inset-x-0 bottom-0 h-[65%] sm:h-[60%] bg-gradient-to-t from-black/80 via-black/40 via-45% to-transparent pointer-events-none" />
      </div>

      {/* ======================================================== */}
      {/* 核心文案區域：置中優雅排版，香檳金小標 + 白字詩意主旨            */}
      {/* ======================================================== */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        {/* 1. 英文小標：香檳金銅色 (Champagne Brass) */}
        <ScrollReveal delay={100} direction="up">
          <h3 className="font-sans font-medium text-xs sm:text-sm md:text-base tracking-[0.25em] sm:tracking-[0.32em] uppercase text-[#D5C49A] drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] mb-3 sm:mb-4">
            LIFE IN FLOW
          </h3>
        </ScrollReveal>

        {/* 2. 中文主標第一行 */}
        <ScrollReveal delay={200} direction="up">
          <p className="font-light text-base sm:text-xl md:text-2xl tracking-[0.24em] sm:tracking-[0.34em] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] mb-2 leading-relaxed">
            光、風、自 然
          </p>
        </ScrollReveal>

        {/* 3. 中文主標第二行 */}
        <ScrollReveal delay={300} direction="up">
          <p className="font-light text-base sm:text-xl md:text-2xl tracking-[0.24em] sm:tracking-[0.34em] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] leading-relaxed">
            與 人 的 日 常，自 在 流 動
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
