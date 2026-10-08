"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface HeaderProps {
  onOpenBooking?: () => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollThreshold = 60;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > scrollThreshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled
          ? "h-14 sm:h-16 md:h-20 bg-white/70 backdrop-blur-md border-b border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          : "h-20 sm:h-24 md:h-32 bg-transparent border-b border-transparent"
      }`}
    >
      {/* 居中/靠左 動態過渡 Logo 群組 */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 flex items-center origin-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[left,transform] ${
          isScrolled
            ? "left-4 sm:left-6 md:left-12 translate-x-0 scale-[0.72] sm:scale-[0.76] md:scale-[0.78]"
            : "left-1/2 -translate-x-1/2 scale-[0.88] sm:scale-100"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 sm:gap-3 md:gap-4 group whitespace-nowrap">
          {/* 1. 富邦雙色標誌 */}
          <img
            src="/fubon-logo.svg"
            alt="Fubon Logo"
            className="h-6 sm:h-8 md:h-10 w-auto block transition-opacity group-hover:opacity-85"
          />

          {/* 品牌名稱聯乘：富邦建設 ｜ 長慶建設 */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-md md:text-base font-serif font-light tracking-[0.1em] sm:tracking-[0.15em] text-[#1A1B1D] whitespace-nowrap">
            <span>富邦建設</span>
            <span>|</span>
            <span>長慶建設</span>
          </div>
        </Link>
      </div>

      {/* 右側：專屬鑑賞按鈕 (還沒往下滑前為白色文字與框線，下滑後切換為墨色) */}
      <div className="ml-auto flex items-center z-10 shrink-0">
        <button
          type="button"
          onClick={onOpenBooking}
          className={`px-2.5 py-1.5 sm:px-3.5 sm:py-2 md:px-4 md:py-2 border-[0.8px] text-[11px] sm:text-xs tracking-[0.12em] sm:tracking-[0.18em] font-sans whitespace-nowrap transition-all duration-300 cursor-pointer ${
            isScrolled
              ? "border-[#1A1B1D]/30 hover:border-[#1A1B1D] text-[#1A1B1D] hover:bg-[#1A1B1D] hover:text-[#F7F6F2]"
              : "border-white/35 hover:border-white/60 text-white/75 hover:text-white hover:bg-white/10"
          }`}
        >
          專屬鑑賞
        </button>
      </div>
    </header>
  );
}
