"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // 一旦觸發後即可停止監聽，維持穩定顯示
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentTarget = domRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate-x-0 translate-y-0 opacity-100";
    switch (direction) {
      case "up":
        return "translate-y-12 opacity-0";
      case "down":
        return "-translate-y-12 opacity-0";
      case "left":
        return "translate-x-12 opacity-0";
      case "right":
        return "-translate-x-12 opacity-0";
      case "none":
        return "opacity-0";
      default:
        return "translate-y-12 opacity-0";
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
}
