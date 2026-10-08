"use client";

import React from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Section4() {
  return (
    <section className="relative w-full bg-[#EEEAE7] text-[#1A1B1D] overflow-hidden">
      {/* ======================================================== */}
      {/* 核心文字：全尺寸置中對齊，舒適的頂部留白                       */}
      {/* ======================================================== */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 sm:pt-28 md:pt-28 text-center w-full">
        {/* 英文小標 */}
        <ScrollReveal delay={100} direction="up">
          <h3 className="font-medium text-xs sm:text-sm md:text-base tracking-[0.25em] md:tracking-[0.3em] uppercase text-[#1A1B1D]/80 mb-4 md:mb-5">
            A RARE PLACE TO LIVE
          </h3>
        </ScrollReveal>

        {/* 主標第一行 */}
        <ScrollReveal delay={200} direction="up">
          <p className="font-light text-lg sm:text-xl md:text-2xl tracking-[0.22em] md:tracking-[0.32em] mb-2 leading-relaxed">
            在 水 湳
          </p>
        </ScrollReveal>

        {/* 主標第二行 */}
        <ScrollReveal delay={300} direction="up">
          <p className="font-light text-lg sm:text-xl md:text-2xl tracking-[0.22em] md:tracking-[0.32em] leading-relaxed">
            繁 華 與 從 容，不 必 選 擇
          </p>
        </ScrollReveal>
      </div>

      {/* ======================================================== */}
      {/* 背景圖片：手機版高度提升 (h-[450px])，景深更為開闊開朗        */}
      {/* ======================================================== */}
      <div className="relative w-full flex justify-center pointer-events-none overflow-hidden mt-8 sm:mt-10 md:mt-10">
        <div className="relative w-full max-w-[1400px] h-[450px] sm:h-[500px] md:h-[500px] lg:h-[580px]">
          <Image
            src="/images/section-4.jpeg"
            alt="在水湳 繁華與從容 不必選擇"
            fill
            priority
            className="object-cover object-bottom"
          />

          {/* 頂部淡化漸層：自然消融於 #EEEAE7 底色 */}
          <div className="absolute inset-x-0 top-0 h-32 sm:h-36 md:h-40 bg-gradient-to-b from-[#EEEAE7] to-transparent" />

          {/* 超寬螢幕兩側羽化漸層：無縫消融於底色 */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-24 lg:w-40 bg-gradient-to-r from-[#EEEAE7] to-transparent" />
          <div className="hidden md:block absolute inset-y-0 right-0 w-24 lg:w-40 bg-gradient-to-l from-[#EEEAE7] to-transparent" />
        </div>
      </div>
    </section>
  );
}
