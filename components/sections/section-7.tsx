"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Section7() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const p1Ref = useRef<HTMLDivElement>(null); // hand
  const p2Ref = useRef<HTMLDivElement>(null); // base architectural structure + pine
  const p3Ref = useRef<HTMLDivElement>(null); // ramp left
  const p4Ref = useRef<HTMLDivElement>(null); // building right
  const p5Ref = useRef<HTMLDivElement>(null); // wireframe
  const p6Ref = useRef<HTMLDivElement>(null); // ramp right
  const p7Ref = useRef<HTMLDivElement>(null); // pine top
  const p8Ref = useRef<HTMLDivElement>(null); // Toyo Ito portrait
  const sigRef = useRef<HTMLDivElement>(null); // signature
  const textRef = useRef<HTMLDivElement>(null); // bottom poetry

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Timeline pinned or scrubbed over scroll distance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "center 45%",
          scrub: 1.2,
        },
      });

      // 1. 各碎片散落在外面的初始狀態
      gsap.set(p1Ref.current, { x: -80, y: 150, rotation: -9, scale: 0.86, opacity: 0.3 });
      gsap.set(p2Ref.current, { x: -130, y: 120, rotation: -4, scale: 0.92, opacity: 0.25 });
      gsap.set(p3Ref.current, { x: -170, y: -60, rotation: -7, scale: 0.88, opacity: 0.25 });
      gsap.set(p4Ref.current, { x: 180, y: 40, rotation: 7, scale: 0.9, opacity: 0.25 });
      gsap.set(p5Ref.current, { x: 160, y: -110, rotation: 12, scale: 0.84, opacity: 0.2 });
      gsap.set(p6Ref.current, { x: 150, y: 130, rotation: 9, scale: 0.88, opacity: 0.25 });
      gsap.set(p7Ref.current, { x: -40, y: -150, rotation: -8, scale: 0.86, opacity: 0.25 });
      gsap.set(p8Ref.current, { x: 140, y: -40, rotation: 6, scale: 0.9, opacity: 0.3 });

      // 2. 伊東豊雄簽名初始狀態：隱藏在定位點下方（y: 28），準備等其他碎片到齊後最後浮上來
      gsap.set(sigRef.current, {
        x: 0,
        y: 0,
        scale: 0.95,
        opacity: 0,
      });

      gsap.set(textRef.current, { opacity: 0.3, y: 30 });

      // 3. 碎片聚合動畫（Scattered -> Gathered 先跑完）
      tl.to(
        [
          p1Ref.current,
          p2Ref.current,
          p3Ref.current,
          p4Ref.current,
          p5Ref.current,
          p6Ref.current,
          p7Ref.current,
          p8Ref.current,
        ],
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          duration: 0.7,
          stagger: {
            each: 0.03,
            from: "random",
          },
        },
        0
      )
        // 4. 最後浮上來：等所有碎片都已歸位後，簽名才從下方優雅浮現升起
        .to(
          sigRef.current,
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.3,
            ease: "power3.out",
          },
          0.72 // 確保所有碎片就定位後才浮現
        )
        // 5. 下方詩意文案升起淡入
        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
          },
          0.85
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FFFFFF] py-24 sm:py-32 md:py-40 overflow-hidden select-none"
    >
      {/* 頂部標題 */}
      <div className="text-center mb-12 sm:mb-16 md:mb-20 px-6">
        <h2 className="text-[#253D30] font-sans text-2xl sm:text-3xl md:text-4xl tracking-[0.26em] font-medium mb-3">
          TOYO ITO
        </h2>
        <p className="text-[#253D30]/85 font-sans text-xs sm:text-sm md:text-base tracking-[0.32em] font-light uppercase">
          PRITZKER ARCHITECTURE PRIZE
        </p>
      </div>

      {/* 拼貼動畫畫布 Stage (比例 2000 : 2050) */}
      <div
        ref={stageRef}
        className="relative w-full max-w-[420px] sm:max-w-[520px] md:max-w-[640px] lg:max-w-[700px] mx-auto px-4 aspect-[2000/2050]"
      >
        {/* 1. 底層大結構與黑松 (7-TOYO-ITO-02-2.png) */}
        <div
          ref={p2Ref}
          className="absolute z-10 pointer-events-none will-change-transform"
          style={{
            left: "1.5%",
            top: "-2.2%",
            width: "92.5%",
            height: "100.3%",
          }}
        >
          <Image
            src="/images/toyo/7-TOYO-ITO-02-2.png"
            alt="Toyo Ito Architecture Structure"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* 2. 左上方弧形迴廊 (7-TOYO-ITO-04.png) */}
        <div
          ref={p3Ref}
          className="absolute z-12 pointer-events-none will-change-transform"
          style={{
            left: "12.0%",
            top: "14.4%",
            width: "37.4%",
            height: "35.8%",
          }}
        >
          <Image
            src="/images/toyo/7-TOYO-ITO-04.png"
            alt="Toyo Ito Architecture Arch"
            fill
            className="object-contain"
          />
        </div>

        {/* 3. 右側曲面建築與綠樹 (7-TOYO-ITO-03.png) */}
        <div
          ref={p4Ref}
          className="absolute z-14 pointer-events-none will-change-transform"
          style={{
            left: "62.5%",
            top: "30.1%",
            width: "32.4%",
            height: "35.3%",
          }}
        >
          <Image
            src="/images/toyo/7-TOYO-ITO-03.png"
            alt="Toyo Ito Architecture Facade"
            fill
            className="object-contain"
          />
        </div>

        {/* 4. 右上方建築透視線條 (7-TOYO-ITO-06.png) */}
        <div
          ref={p5Ref}
          className="absolute z-16 pointer-events-none will-change-transform"
          style={{
            left: "71.9%",
            top: "15.1%",
            width: "23.4%",
            height: "23.8%",
          }}
        >
          <Image
            src="/images/toyo/7-TOYO-ITO-06.png"
            alt="Architectural Blueprint Lines"
            fill
            className="object-contain"
          />
        </div>

        {/* 5. 頂部黑松枝葉 (7-TOYO-ITO-08.png) */}
        <div
          ref={p7Ref}
          className="absolute z-18 pointer-events-none will-change-transform"
          style={{
            left: "45.1%",
            top: "4.7%",
            width: "38.0%",
            height: "28.1%",
          }}
        >
          <Image
            src="/images/toyo/7-TOYO-ITO-08.png"
            alt="Toyo Ito Pine Tree"
            fill
            className="object-contain"
          />
        </div>

        {/* 6. 伊東豊雄肖像 (7-TOYO-ITO-09.png) */}
        <div
          ref={p8Ref}
          className="absolute z-20 pointer-events-none will-change-transform"
          style={{
            left: "51.7%",
            top: "19.9%",
            width: "39.6%",
            height: "41.8%",
          }}
        >
          <Image
            src="/images/toyo/7-TOYO-ITO-09.png"
            alt="Toyo Ito Portrait"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* 7. 右下方弧形引道 (7-TOYO-ITO-07.png) */}
        <div
          ref={p6Ref}
          className="absolute z-22 pointer-events-none will-change-transform"
          style={{
            left: "67.7%",
            top: "53.4%",
            width: "21.4%",
            height: "29.5%",
          }}
        >
          <Image
            src="/images/toyo/7-TOYO-ITO-07.png"
            alt="Toyo Ito Ramp"
            fill
            className="object-contain"
          />
        </div>

        {/* 8. 手繪手稿之手 (7-TOYO-ITO-01.png) */}
        <div
          ref={p1Ref}
          className="absolute z-24 pointer-events-none will-change-transform"
          style={{
            left: "50.4%",
            top: "61.5%",
            width: "30.1%",
            height: "28.1%",
          }}
        >
          <Image
            src="/images/toyo/7-TOYO-ITO-01.png"
            alt="Toyo Ito Sketching Hand"
            fill
            className="object-contain"
          />
        </div>

        {/* 10. 伊東豊雄簽名 (toyo-signature.png) */}
        <div
          ref={sigRef}
          className="absolute z-35 pointer-events-none will-change-[transform,opacity]"
          style={{
            left: "59.0%",
            top: "82.0%",
            width: "35.0%",
            height: "15.6%",
          }}
        >
          <Image
            src="/images/toyo/toyo-signature.png"
            alt="Toyo Ito Signature"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* 下方詩意文案 */}
      <div
        ref={textRef}
        className="text-center mt-8 sm:mt-16 md:mt-16 space-y-3 px-6 select-none will-change-transform"
      >
        <p className="text-[#1A1A1A] font-light text-base sm:text-lg md:text-xl tracking-[0.28em] md:tracking-[0.38em]">
          建築，是讓光、風、自然與人
        </p>
        <p className="text-[#1A1A1A] font-light text-base sm:text-lg md:text-xl tracking-[0.28em] md:tracking-[0.38em]">
          彼此發生關係。
        </p>
      </div>
    </section>
  );
}
