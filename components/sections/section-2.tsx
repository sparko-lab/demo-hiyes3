"use client";

import React from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

// =========================================================================
// 🌟【背景圖左右微調設定】
// 數值越大（例如 51.5%），背景圖往左移（稜線向左移）
// 數值越小（例如 50.0%），背景圖往右移（稜線向右移）
// 預設 "50.8%" 已精準對齊光影中心分界
// =========================================================================
const BG_POSITION_X = "50%";

export function Section2() {
  return (
    <section className="relative w-full h-[690px] sm:h-[750px] md:h-[770px] lg:h-[850px] overflow-hidden bg-[#E2DFD8] text-[#1A1B1D] select-none">
      {/* ======================================================== */}
      {/* 沉浸式建築背景：固定比例高度，與 Section 4 保持等高           */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/section-2.jpeg"
          alt="What comes after fifty?"
          fill
          priority
          className="object-cover"
          style={{
            objectPosition: `${BG_POSITION_X} center`,
          }}
        />

        {/* 輕量級氛圍微調層 */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      </div>

      {/* ======================================================== */}
      {/* 核心文字區域：頂部垂直高度 (pt-24 / md:pt-28) 與 Section 4 完全一致 */}
      {/* WHAT COMES (左半部深墨色) ｜ AFTER FIFTY? (右半部純白色)     */}
      {/* ======================================================== */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 sm:pt-28 md:pt-28 text-center w-full">
        {/* 1. 英文小標：以 50% 中線為基準嚴格對半分色，高度與 Section 4 一致 */}
        <ScrollReveal delay={100} direction="up" className="w-full">
          <div className="w-full flex items-center font-sans text-xs sm:text-sm md:text-base tracking-[0.25em] md:tracking-[0.3em] uppercase mb-4 md:mb-5">
            {/* 左側 50%：受光牆面，文字靠右對齊中線，深墨色 */}
            <div className="w-1/2 text-right pr-1 sm:pr-1.5">
              <span className="font-semibold text-[#1A1B1D]">WHAT COMES</span>
            </div>

            {/* 右側 50%：陰影牆面，文字靠左對齊中線，純白色 */}
            <div className="w-1/2 text-left pl-1 sm:pl-1.5">
              <span className="font-light text-[#FFFFFF] drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
                AFTER FIFTY?
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. 主標第一行：字級與行距完全同步 Section 4 */}
        <ScrollReveal delay={200} direction="up">
          <p className="font-light text-lg sm:text-xl md:text-2xl tracking-[0.22em] md:tracking-[0.32em] mb-2 leading-relaxed">
            五 十 年 之 後
          </p>
        </ScrollReveal>

        {/* 3. 主標第二行：字級與行距完全同步 Section 4 */}
        <ScrollReveal delay={300} direction="up">
          <p className="font-light text-lg sm:text-xl md:text-2xl tracking-[0.22em] md:tracking-[0.32em] leading-relaxed">
            什 麼 值 得 被 帶 往 未 來 ？
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
