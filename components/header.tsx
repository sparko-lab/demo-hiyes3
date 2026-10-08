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
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled
          ? "h-16 md:h-20 bg-[#F7F6F2]/95 backdrop-blur-md border-b-[0.5px] border-[#E5E3DC]"
          : "h-24 md:h-32 bg-transparent border-b border-transparent"
      }`}
    >
      {/* 居中/靠左 動態過渡 Logo 群組 */}
      <div
        className={`absolute flex items-center gap-3 md:gap-4 origin-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[left,transform] ${
          isScrolled
            ? "left-6 md:left-12 translate-x-0 scale-[0.78] md:scale-[0.72]"
            : "left-1/2 -translate-x-1/2 scale-100"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 md:gap-4 group">
          {/* 1. 富邦雙色標誌 */}
          <img
            src="/fubon-logo.svg"
            alt="Fubon Logo"
            className="h-8 md:h-10 w-auto block transition-opacity group-hover:opacity-85"
          />

          {/* 品牌名稱聯乘：富邦建設 ｜ 長慶建設 */}
          <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base font-serif font-light tracking-[0.15em] text-[#1A1B1D]">
            <span>富邦建設</span>
            <span className="text-[#8E8268]/60 text-xs">｜</span>
            <span>長慶建設</span>
          </div>
        </Link>
      </div>

      {/* 右側：專屬鑑賞按鈕 (觸發 Modal) */}
      <div className="ml-auto flex items-center gap-6 md:gap-8 z-10 text-xs tracking-[0.2em] font-sans">
        <button
          type="button"
          onClick={onOpenBooking}
          className="px-4 py-2 border-[0.5px] border-[#1A1B1D]/30 hover:border-[#1A1B1D] text-[#1A1B1D] text-xs tracking-[0.18em] transition-all duration-300 hover:bg-[#1A1B1D] hover:text-[#F7F6F2] cursor-pointer"
        >
          專屬鑑賞
        </button>
      </div>
    </header>
  );
}
