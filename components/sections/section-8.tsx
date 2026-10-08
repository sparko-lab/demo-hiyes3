"use client";

import React from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Section8() {
  return (
    <section className="relative w-full bg-white text-[#1A1B1D] overflow-hidden select-none pb-28 sm:pb-28 md:pb-32">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        {/* ======================================================== */}
        {/* 建築手繪插圖：LIFE IN FLOW 水彩手繪剖面透視圖（上方）         */}
        {/* 控制最大寬度與高度，使整體區塊高度更加精練緊湊               */}
        {/* ======================================================== */}
        <ScrollReveal delay={100} direction="up" className="w-full flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg flex justify-center">
            <Image
              src="/images/section-8.png"
              alt="LIFE IN FLOW 光、風、自然 與人的日常，自在流動"
              width={1316}
              height={1195}
              priority
              className="w-full h-auto max-h-[340px] sm:max-h-[420px] md:max-h-[460px] object-contain mix-blend-multiply"
            />
          </div>
        </ScrollReveal>

        {/* ======================================================== */}
        {/* 核心文案區域：位於圖片下方，置中優雅排版                       */}
        {/* ======================================================== */}
        <div className="text-center w-full max-w-2xl mt-6 sm:mt-8 md:mt-10">
          {/* 1. 英文小標 */}
          <ScrollReveal delay={200} direction="up">
            <h3 className="font-sans font-medium text-xs sm:text-sm md:text-base tracking-[0.25em] md:tracking-[0.3em] uppercase text-[#737067] mb-2 sm:mb-3">
              LIFE IN FLOW
            </h3>
          </ScrollReveal>

          {/* 2. 中文主標第一行 */}
          <ScrollReveal delay={300} direction="up">
            <p className="text-[#1A1A1A] font-light text-base sm:text-lg md:text-xl tracking-[0.28em] md:tracking-[0.38em]">
              光、風、自 然
            </p>
          </ScrollReveal>

          {/* 3. 中文主標第二行 */}
          <ScrollReveal delay={400} direction="up">
            <p className="text-[#1A1A1A] font-light text-base sm:text-lg md:text-xl tracking-[0.28em] md:tracking-[0.38em]">
              與 人 的 日 常，自 在 流 動
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
