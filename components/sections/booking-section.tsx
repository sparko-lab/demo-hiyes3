"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollReveal } from "@/components/scroll-reveal";

const TIME_OPTIONS = [
  { value: "morning", label: "平日上午 (10:00 - 12:00)" },
  { value: "afternoon", label: "平日下午 (14:00 - 17:00)" },
  { value: "evening", label: "平日晚間 (18:30 - 20:30)" },
  { value: "weekend", label: "週末全日尊榮時段 (由顧問協調)" },
  { value: "custom", label: "專人隱密另約時段" },
];

export function BookingSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("VIP-SP-8829");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    time: "",
    notes: "",
  });

  const curveContainerRef = useRef<HTMLDivElement>(null);
  const curvePathRef = useRef<SVGPathElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const successBoxRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const activeTimeline = useRef<gsap.core.Timeline | null>(null);



  // 點擊下拉選單外部自動關閉（支援桌面 mousedown 與行動裝置 touchstart）
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // 彈窗淡出並往下滑落關閉（無條件即時響應，中斷任何進行中的動畫）
  const closeModal = useCallback(() => {
    if (!modalRef.current) return;

    if (activeTimeline.current) {
      activeTimeline.current.kill();
      activeTimeline.current = null;
    }
    gsap.killTweensOf([
      modalRef.current,
      curvePathRef.current,
      curveContainerRef.current,
    ]);

    setIsDropdownOpen(false);

    // 1. 淡出彈窗內容
    gsap.to(modalRef.current, {
      autoAlpha: 0,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        if (!modalRef.current) return;
        modalRef.current.classList.remove("is-active");
        modalRef.current.setAttribute("aria-hidden", "true");
        gsap.set(modalRef.current, { clearProps: "opacity,visibility" });

        // 2. Curve Swipe 往下滑落恢復
        if (curveContainerRef.current) {
          gsap.set(curveContainerRef.current, { visibility: "visible" });
        }

        const curve = { baseY: 0, curveY: 0 };

        gsap
          .timeline({
            onComplete: () => {
              if (curveContainerRef.current) {
                gsap.set(curveContainerRef.current, { visibility: "hidden" });
              }
              setIsOpen(false);
            },
          })
          .to(
            curve,
            {
              curveY: 100,
              duration: 0.55,
              ease: "power3.inOut",
              onUpdate: () => {
                if (curvePathRef.current) {
                  curvePathRef.current.setAttribute(
                    "d",
                    `M 0 100 L 0 ${curve.baseY} Q 50 ${curve.curveY} 100 ${curve.baseY} L 100 100 Z`
                  );
                }
              },
            },
            0
          )
          .to(
            curve,
            {
              baseY: 100,
              duration: 0.65,
              ease: "power2.inOut",
              onUpdate: () => {
                if (curvePathRef.current) {
                  curvePathRef.current.setAttribute(
                    "d",
                    `M 0 100 L 0 ${curve.baseY} Q 50 ${curve.curveY} 100 ${curve.baseY} L 100 100 Z`
                  );
                }
              },
            },
            0.05
          );
      },
    });
  }, []);

  // 監聽鍵盤 ESC 關閉
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  // 啟動 Curve Swipe 拋物線揭幕與彈窗開啟
  const openModal = useCallback(() => {
    if (isOpen) return;
    setIsOpen(true);
    setIsSubmitted(false);
    setIsDropdownOpen(false);

    // 重設表單與反饋視窗顯示狀態
    if (formContainerRef.current) formContainerRef.current.style.display = "block";
    if (successBoxRef.current) successBoxRef.current.style.display = "none";

    // 顯示 SVG 曲線容器
    if (curveContainerRef.current) {
      gsap.set(curveContainerRef.current, { visibility: "visible" });
    }

    const curve = { baseY: 100, curveY: 100 };

    if (activeTimeline.current) {
      activeTimeline.current.kill();
    }

    const swipeTl = gsap.timeline({
      onComplete: () => {
        if (!modalRef.current) return;
        // 揭開全螢幕純白毛玻璃遮罩
        modalRef.current.classList.add("is-active");
        modalRef.current.setAttribute("aria-hidden", "false");

        // 內部表單元素依序 Stagger 展開
        const elements = modalRef.current.querySelectorAll(
          ".modal-brand-badge, .modal-title, .modal-trust-copy, .form-field-group, .btn-form-submit"
        );

        gsap.fromTo(
          elements,
          { autoAlpha: 0, y: 25 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: "power2.out",
            clearProps: "transform",
            onComplete: () => {
              if (curveContainerRef.current) {
                gsap.set(curveContainerRef.current, { visibility: "hidden" });
              }
            },
          }
        );
      },
    });

    activeTimeline.current = swipeTl;

    // 拋物線貝茲曲線動畫：頂點 (curveY) 優先急速拔升，兩側邊緣 (baseY) 隨後填滿
    swipeTl
      .to(
        curve,
        {
          curveY: 0,
          duration: 0.75,
          ease: "power3.inOut",
          onUpdate: () => {
            if (curvePathRef.current) {
              curvePathRef.current.setAttribute(
                "d",
                `M 0 100 L 0 ${curve.baseY} Q 50 ${curve.curveY} 100 ${curve.baseY} L 100 100 Z`
              );
            }
          },
        },
        0
      )
      .to(
        curve,
        {
          baseY: 0,
          duration: 0.85,
          ease: "power2.inOut",
          onUpdate: () => {
            if (curvePathRef.current) {
              curvePathRef.current.setAttribute(
                "d",
                `M 0 100 L 0 ${curve.baseY} Q 50 ${curve.curveY} 100 ${curve.baseY} L 100 100 Z`
              );
            }
          },
        },
        0.07
      );
  }, [isOpen]);

  // 監聽全域 open-booking-modal 事件（支援 Header「專屬鑑賞」按鈕連動）
  useEffect(() => {
    const handleOpen = () => {
      openModal();
    };
    window.addEventListener("open-booking-modal", handleOpen);
    return () => window.removeEventListener("open-booking-modal", handleOpen);
  }, [openModal]);

  // 表單送出處理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("請填寫貴賓尊稱與聯絡電話，以便顧問為您致電確認。");
      return;
    }

    if (!formData.time) {
      alert("請選擇期盼預約的鑑賞時段。");
      setIsDropdownOpen(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // 模擬伺服器處理延遲
      await new Promise((resolve) => setTimeout(resolve, 700));

      const randomRef = "VIP-SP-" + Math.floor(1000 + Math.random() * 9000);
      setBookingRef(randomRef);

      // 切換至成功畫面
      if (formContainerRef.current) {
        gsap.to(formContainerRef.current, {
          autoAlpha: 0,
          y: -20,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            if (formContainerRef.current) formContainerRef.current.style.display = "none";
            if (successBoxRef.current) {
              successBoxRef.current.style.display = "block";
              setIsSubmitted(true);
              setFormData({
                name: "",
                phone: "",
                email: "",
                time: "",
                notes: "",
              });
              setIsSubmitting(false);

              gsap.fromTo(
                successBoxRef.current,
                { autoAlpha: 0, y: 30, scale: 0.95 },
                { autoAlpha: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.2)" }
              );
            }
          },
        });
      }
    } catch (err) {
      console.error("Booking error:", err);
      alert("預約送出時發生問題，請稍後再試。");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* 1. 預約 CTA 區塊 */}
      <section
        id="reserve"
        style={{ backgroundColor: "#EEEAE7" }}
        className="relative bg-[#EEEAE7] text-[#1A1B1D] border-t border-[#E5E3DC] min-h-[50vh] sm:min-h-[55vh] flex flex-col items-center justify-center py-24 sm:py-32 px-6 md:px-12 lg:px-20 text-center overflow-hidden select-none"
      >
        <div className="mx-auto max-w-3xl w-full">
          {/* 1. 英文小標進場 */}
          <ScrollReveal delay={100} direction="up">
            <span className="inline-block font-sans font-medium text-xs sm:text-sm md:text-base tracking-[0.25em] md:tracking-[0.3em] uppercase text-[#737067] mb-4 md:mb-5">
              A NEW STORY AHEAD.
            </span>
          </ScrollReveal>

          {/* 2. 主標進場 */}
          <ScrollReveal delay={200} direction="up">
            <h2 className="font-light text-xl sm:text-2xl md:text-2xl tracking-[0.22em] md:tracking-[0.32em] text-[#1A1B1D] mb-3 sm:mb-4 leading-relaxed">
              接 下 來
            </h2>
          </ScrollReveal>

          {/* 3. 副標進場 */}
          <ScrollReveal delay={300} direction="up">
            <p className="font-light text-base sm:text-xl md:text-xl tracking-[0.2em] md:tracking-[0.28em] text-[#1A1B1D]/85 leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12">
              我 們 想 把 生 活 的 想 像，留 給 您
            </p>
          </ScrollReveal>

          {/* 4. 預約按鈕進場 */}
          <ScrollReveal delay={400} direction="up">
            <button
              type="button"
              onClick={openModal}
              className="group relative inline-flex items-center gap-4 sm:gap-5 px-9 sm:px-11 py-4 sm:py-4.5 rounded-full border border-[#1A1B1D]/25 hover:border-[#1A1B1D] bg-transparent text-[#1A1B1D] hover:bg-[#1A1B1D] hover:text-[#F7F6F2] transition-all duration-500 ease-out cursor-pointer shadow-sm"
              aria-label="走進生活場景"
            >
              <span className="text-sm sm:text-base font-light tracking-[0.25em] transition-colors duration-500">
                [ 走進生活場景 ]
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="transition-transform duration-500 ease-out group-hover:translate-x-1.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================
           1. CURVE SWIPE SVG OVERLAY (貝茲曲線遮罩層)
           ============================================================ */}
      <div className="curve-swipe-container" ref={curveContainerRef}>
        <svg className="curve-swipe-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            ref={curvePathRef}
            d="M 0 100 L 0 100 Q 50 100 100 100 L 100 100 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* ============================================================
           2. CINEMATIC PRIVATE BOOKING MODAL (全螢幕純白實色彈窗，無透明度)
           ============================================================ */}
      <div
        className="modal-overlay bg-white"
        style={{ backgroundColor: "#ffffff" }}
        ref={modalRef}
        aria-modal="true"
        role="dialog"
        aria-hidden="true"
      >
        {/* 右上角極簡關閉按鈕 */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}
          className="btn-modal-close"
          title="關閉預約視窗"
          aria-label="Close Modal"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* 預約卡片 */}
        <div className="modal-card">
          <div ref={formContainerRef}>
            <div className="modal-brand-badge">
              <span>RESERVATION</span>
            </div>

            <h3 className="modal-title">專屬私人鑑賞預約</h3>

            {/* 說明文案（分為三行，維持呼吸節奏） */}
            <p className="modal-trust-copy flex flex-col gap-1 md:gap-1.5">
              <span>每一席空間皆為少數人而生</span>
              <span>您的專屬顧問將於 24 小時內致電確認鑑賞時段</span>
            </p>

            <form className="booking-form" onSubmit={handleSubmit}>
              {/* 姓名與電話 (雙欄) */}
              <div className="form-row">
                <div className="form-field-group">
                  <label className="form-label" htmlFor="guestName">
                    貴賓尊稱 (Name / Salutation)
                  </label>
                  <input
                    type="text"
                    id="guestName"
                    className="form-input"
                    placeholder="例如：張先生 / 林女士"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <span className="field-line"></span>
                </div>

                <div className="form-field-group">
                  <label className="form-label" htmlFor="guestPhone">
                    聯絡電話 (Mobile)
                  </label>
                  <input
                    type="tel"
                    id="guestPhone"
                    className="form-input"
                    placeholder="0912-345-678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <span className="field-line"></span>
                </div>
              </div>

              {/* 電子信箱與鑑賞時段 (雙欄) */}
              <div className={`form-row ${isDropdownOpen ? "!z-[60] relative" : "relative z-10"}`}>
                <div className="form-field-group">
                  <label className="form-label" htmlFor="guestEmail">
                    電子信箱 (Email)
                  </label>
                  <input
                    type="email"
                    id="guestEmail"
                    className="form-input"
                    placeholder="vip@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <span className="field-line"></span>
                </div>

                {/* 簡約高級設計感下拉選單 (非原生瀏覽器 select，行動裝置層級與觸控強化) */}
                <div
                  className={`form-field-group ${isDropdownOpen ? "!z-[70] relative" : "relative z-10"}`}
                  ref={dropdownRef}
                >
                  <label className="form-label" htmlFor="guestTime">
                    預計鑑賞時段 (Preferred Time)
                  </label>
                  <button
                    type="button"
                    id="guestTime"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full text-left flex items-center justify-between py-[11px] text-base md:text-[1.05rem] transition-colors duration-200 outline-none cursor-pointer bg-transparent border-b border-black/15 group"
                    aria-haspopup="listbox"
                    aria-expanded={isDropdownOpen}
                  >
                    <span
                      className={
                        formData.time
                          ? "text-[#0f172a] font-normal"
                          : "text-neutral-400 font-light text-sm md:text-base tracking-wide"
                      }
                    >
                      {TIME_OPTIONS.find((opt) => opt.value === formData.time)?.label ||
                        "請選擇期盼預約時段"}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className={`text-neutral-400 transition-transform duration-300 ease-out group-hover:text-black ${
                        isDropdownOpen ? "rotate-180 text-[#c5a059]" : ""
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <span
                    className={`field-line ${
                      isDropdownOpen ? "!w-full !bg-[#c5a059]" : ""
                    }`}
                  ></span>

                  {/* 簡約高級選單面板 (100% 不透明純白背景，行動裝置觸控優化) */}
                  {isDropdownOpen && (
                    <div
                      role="listbox"
                      style={{ backgroundColor: "#ffffff" }}
                      className="absolute top-full left-0 mt-2 w-full z-[9999] rounded-xl bg-white border border-neutral-300 shadow-[0_20px_50px_rgba(0,0,0,0.25)] py-1.5 max-h-[260px] overflow-y-auto overscroll-contain animate-in fade-in zoom-in-95 duration-150"
                    >
                      {TIME_OPTIONS.map((option) => {
                        const isSelected = formData.time === option.value;
                        return (
                          <button
                            type="button"
                            key={option.value}
                            role="option"
                            aria-selected={isSelected}
                            onClick={(e) => {
                              e.stopPropagation();
                              setFormData({ ...formData, time: option.value });
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3.5 min-h-[46px] text-sm md:text-[0.95rem] flex items-center justify-between cursor-pointer transition-colors duration-150 outline-none ${
                              isSelected
                                ? "bg-[#f8f5ee] text-[#8b6e36] font-medium"
                                : "text-[#0f172a] active:bg-neutral-100 hover:bg-[#f8fafc] font-normal"
                            }`}
                          >
                            <span>{option.label}</span>
                            {isSelected && (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                className="text-[#8b6e36] shrink-0"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* 特殊需求或留話 */}
              <div className="form-field-group relative !z-0">
                <label className="form-label" htmlFor="guestNotes">
                  特殊需求或留話 (Notes)
                </label>
                <textarea
                  id="guestNotes"
                  className="form-textarea"
                  rows={2}
                  placeholder="偏好戶型或需專屬泊車引導等需求..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
                <span className="field-line"></span>
              </div>

              {/* 送出按鈕 */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-form-submit relative !z-0"
                style={{ opacity: isSubmitting ? 0.7 : 1 }}
              >
                <span>
                  {isSubmitting
                    ? "處理中..."
                    : "確認送出預約"}
                </span>
              </button>
            </form>
          </div>

          {/* 預約成功畫面 */}
          <div className="booking-success-box" ref={successBoxRef}>
            <div className="success-badge-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h4 className="success-title">預約已由專人受理</h4>
            <div className="booking-ref-pill">BOOKING REF: {bookingRef}</div>
            <p className="success-desc">
              感謝您的信任與預約。專屬空間顧問團隊已收到您的鑑賞需求，將於 24 小時內以隱密專線致電為您細緻安排專屬時段。
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="btn-return-home"
            >
              返回 / RETURN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
