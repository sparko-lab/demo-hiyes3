"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    timeSlot: "morning",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    // 延遲重設表單狀態
    setTimeout(() => {
      setSubmitted(false);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl bg-[#F7F6F2] text-[#1A1B1D] border-[0.5px] border-[#E5E3DC] p-8 sm:p-12 shadow-2xl rounded-none">
        <DialogHeader className="text-left space-y-3 pb-6 border-b-[0.5px] border-[#E5E3DC]">
          <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-[#8E8268] uppercase font-sans">
            <span>Private Patrons</span>
            <span className="w-6 h-[0.5px] bg-[#8E8268]/60" />
            <span>Reservation</span>
          </div>
          <DialogTitle className="font-serif text-2xl sm:text-3xl font-light text-[#1A1B1D]">
            預約專屬鑑賞
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm font-light text-[#1A1B1D]/70 font-sans leading-[1.8]">
            為維持私密且深度的空間鑑賞體驗，現場採貴賓專屬席次制。請留下您的聯絡方式，專屬特助將於指定時段與您確認行程。
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <span className="text-xs tracking-[0.3em] text-[#8E8268] uppercase font-sans block">
              Reservation Confirmed
            </span>
            <h4 className="font-serif text-2xl font-light text-[#1A1B1D]">
              感謝您的預約
            </h4>
            <p className="text-xs sm:text-sm text-[#1A1B1D]/75 font-sans leading-[1.8] max-w-sm mx-auto">
              專屬特助已收到您的登記，將於指定時段親自與您確認私密鑑賞行程。
            </p>
            <div className="pt-6">
              <button
                type="button"
                onClick={handleClose}
                className="px-8 py-3 bg-[#1A1B1D] text-[#F7F6F2] text-xs tracking-[0.2em] uppercase font-sans hover:bg-[#8E8268] transition-colors cursor-pointer"
              >
                關閉視窗
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 pt-6 font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-[0.18em] text-[#1A1B1D]/60 uppercase">
                  貴賓姓名 / Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="請輸入尊姓大名"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b-[0.5px] border-[#1A1B1D]/30 py-2.5 text-sm text-[#1A1B1D] placeholder:text-[#1A1B1D]/30 focus:outline-hidden focus:border-[#1A1B1D] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-[0.18em] text-[#1A1B1D]/60 uppercase">
                  聯絡電話 / Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="請輸入聯絡電話"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border-b-[0.5px] border-[#1A1B1D]/30 py-2.5 text-sm text-[#1A1B1D] placeholder:text-[#1A1B1D]/30 focus:outline-hidden focus:border-[#1A1B1D] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-[0.18em] text-[#1A1B1D]/60 uppercase">
                  電子信箱 / Email
                </label>
                <input
                  type="email"
                  placeholder="example@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b-[0.5px] border-[#1A1B1D]/30 py-2.5 text-sm text-[#1A1B1D] placeholder:text-[#1A1B1D]/30 focus:outline-hidden focus:border-[#1A1B1D] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-[0.18em] text-[#1A1B1D]/60 uppercase">
                  偏好鑑賞時段 / Preferred Time
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full bg-transparent border-b-[0.5px] border-[#1A1B1D]/30 py-2.5 text-sm text-[#1A1B1D] focus:outline-hidden focus:border-[#1A1B1D] transition-colors cursor-pointer"
                >
                  <option value="morning">上午時段 (10:00 - 12:00)</option>
                  <option value="afternoon">下午時段 (14:00 - 17:00)</option>
                  <option value="evening">傍晚時段 (17:00 - 19:00)</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-[0.18em] text-[#1A1B1D]/60 uppercase">
                特別需求或備註 / Remarks
              </label>
              <textarea
                rows={2}
                placeholder="若有特殊隱私或隨行需求，歡迎在此填寫"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-transparent border-b-[0.5px] border-[#1A1B1D]/30 py-2 text-sm text-[#1A1B1D] placeholder:text-[#1A1B1D]/30 focus:outline-hidden focus:border-[#1A1B1D] transition-colors resize-none"
              />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t-[0.5px] border-[#E5E3DC]">
              <p className="text-[11px] text-[#1A1B1D]/50 font-sans tracking-wide">
                * 嚴格遵循個人資料隱私保密協定
              </p>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-[#1A1B1D] text-[#F7F6F2] hover:bg-[#8E8268] text-xs tracking-[0.25em] uppercase font-sans transition-all duration-300 cursor-pointer"
              >
                確認預約專屬鑑賞
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
