"use client";

import React from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Section1() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#EAE8E3] text-[#1A1B1D] select-none">
      {/* ======================================================== */}
      {/* 背景圖片：public/images/section-1.jpeg                     */}
      {/* 手機版與電腦版皆維持自然景深，人物與建築位於右側，天空留白於左側 */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/section-1.jpeg"
          alt="Fubon Fifty - 50 Years with the City"
          fill
          priority
          className="object-cover object-[70%_center] sm:object-[65%_center] md:object-center"
        />

        {/* 柔和透光微漸層：保證文字在任何螢幕尺寸上皆具備美術館級極致可讀性 */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/20 to-transparent pointer-events-none md:from-white/35 md:via-white/10" />
      </div>

      {/* ======================================================== */}
      {/* 核心文案區域：依照 section1-sample.png 構圖設計            */}
      {/* 手機版與電腦版保持高度一致的視覺語言與左側留白佈局              */}
      {/* ======================================================== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 pt-36 sm:pt-40 md:pt-48 flex-1 flex flex-col justify-center">

        {/* 2. 主英文標題：FUBON FIFTY / 50 YEARS WITH THE CITY */}
        <ScrollReveal delay={200} direction="up">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light tracking-[0.22em] sm:tracking-[0.28em] text-[#1A1B1D] uppercase leading-none mb-3 sm:mb-4">
            FUBON FIFTY
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-sans font-light tracking-[0.28em] sm:tracking-[0.34em] text-[#1A1B1D]/75 uppercase mb-6 sm:mb-8">
            50 YEARS WITH THE CITY
          </p>
        </ScrollReveal>

        {/* 3. 精緻短分隔線 */}
        <ScrollReveal delay={300} direction="up">
          <div className="w-6 sm:w-8 h-[1px] bg-[#1A1B1D]/40 mb-6 sm:mb-8" />
        </ScrollReveal>

        {/* 4. 中文主旨：五十年，富邦建設與城市一起成長。 */}
        <ScrollReveal delay={400} direction="up">
          <div className="space-y-2 text-[#1A1B1D] font-light text-base sm:text-xl md:text-2xl tracking-[0.24em] sm:tracking-[0.32em] leading-relaxed">
            <p>五十年，</p>
            <p>富邦建設與城市一起成長。</p>
          </div>
        </ScrollReveal>
      </div>

      {/* ======================================================== */}
      {/* 底部導引細節：動態有質感的建築滾動導引 Icon                 */}
      {/* ======================================================== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 pb-8 sm:pb-12 flex items-center justify-between">
        <ScrollReveal delay={600} direction="none">
          <button
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight * 0.95,
                behavior: "smooth",
              });
            }}
            className="flex items-center gap-3 group cursor-pointer select-none text-left focus:outline-none transition-opacity hover:opacity-90"
            aria-label="向下瀏覽"
          >
            {/* 1. 典雅微膠囊滾動 Icon：內含柔和下潛微點 */}
            <div className="w-3.5 h-6 rounded-full border border-[#1A1B1D]/35 group-hover:border-[#1A1B1D]/65 transition-colors p-[2px] flex justify-center">
              <div className="w-0.5 h-1.5 bg-[#1A1B1D]/75 rounded-full animate-scroll-dot" />
            </div>

            {/* 2. 垂直動態律動導引線 */}
            <div className="w-[1px] h-6 bg-[#1A1B1D]/15 relative overflow-hidden">
              <div className="w-full h-full bg-[#1A1B1D]/70 animate-pulse-line" />
            </div>

            {/* 3. 質感微標籤 */}
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.32em] text-[#1A1B1D]/60 group-hover:text-[#1A1B1D]/90 uppercase font-light transition-colors">
              SCROLL
            </span>
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
