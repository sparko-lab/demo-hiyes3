"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollThreshold = 50;
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
      className={`fixed top-0 left-0 w-full z-50 flex items-center bg-white/95 backdrop-blur-md transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isScrolled
          ? "h-14 md:h-16 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          : "h-24 md:h-[120px] shadow-none"
      }`}
    >
      <div
        className={`absolute flex items-center gap-2 md:gap-4 origin-left transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[left,transform] ${
          isScrolled
            ? "left-4 md:left-6 translate-x-0 scale-[0.72] md:scale-[0.68]"
            : "left-1/2 -translate-x-1/2 scale-100"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 md:gap-4">
          {/* 1. 富邦雙色標誌 */}
          <img
            src="/fubon-logo.svg"
            alt="Fubon Logo"
            className="h-9 md:h-12 w-auto block"
          />

          {/* 2. 富邦建設中文標準字 */}
          <img
            src="/fubon-logo-w.svg"
            alt="富邦建設"
            className="h-7 md:h-[38px] w-auto block"
          />

          {/* 3. Fubon Land 英文標準字 */}
          <img
            src="/fubon-land.svg"
            alt="Fubon Land"
            className="hidden sm:block h-[26px] md:h-9 w-auto"
          />
        </Link>
      </div>
    </header>
  );
}
