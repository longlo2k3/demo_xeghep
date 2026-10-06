"use client";

import Link from "next/link";
import { Phone, MessageSquare, Send, CalendarCheck, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/company-info";

export function FloatingContact() {
  return (
    <>
      {/* Mobile Floating Bar: Fixed bottom dock (Touch targets >= 44px) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl px-2 py-2 flex items-center justify-around">
        <a
          href={COMPANY_INFO.hotlineHref}
          className="flex flex-col items-center justify-center p-1 text-red-600 hover:text-red-700 min-w-[54px] min-h-[44px]"
          aria-label="Gọi điện tổng đài hotline 24/7"
        >
          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mb-0.5">
            <Phone className="w-4 h-4 text-red-600 animate-bounce" aria-hidden="true" />
          </div>
          <span className="text-[11px] font-bold">Gọi điện</span>
        </a>

        <a
          href={COMPANY_INFO.zaloHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1 text-blue-600 hover:text-blue-700 min-w-[54px] min-h-[44px]"
          aria-label="Tư vấn Zalo 24/7"
        >
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mb-0.5">
            <MessageSquare className="w-4 h-4 text-blue-600" aria-hidden="true" />
          </div>
          <span className="text-[11px] font-bold">Zalo</span>
        </a>

        <a
          href={COMPANY_INFO.smsHref}
          className="flex flex-col items-center justify-center p-1 text-emerald-600 hover:text-emerald-700 min-w-[54px] min-h-[44px]"
          aria-label="Gửi tin nhắn SMS"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mb-0.5">
            <Send className="w-4 h-4 text-emerald-600" aria-hidden="true" />
          </div>
          <span className="text-[11px] font-bold">SMS</span>
        </a>

        <a
          href={COMPANY_INFO.messengerHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1 text-indigo-600 hover:text-indigo-700 min-w-[54px] min-h-[44px]"
          aria-label="Nhắn tin Facebook Messenger"
        >
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mb-0.5">
            <MessageCircle className="w-4 h-4 text-indigo-600" aria-hidden="true" />
          </div>
          <span className="text-[11px] font-bold">Messenger</span>
        </a>

        <Link
          href="/dat-xe"
          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-bold text-xs shadow-md"
          aria-label="Đặt xe trực tuyến"
        >
          <CalendarCheck className="w-4 h-4" aria-hidden="true" />
          <span>Đặt xe</span>
        </Link>
      </div>

      {/* Desktop Floating Pills (Right Side) */}
      <div className="hidden lg:flex fixed right-4 bottom-8 z-50 flex-col items-end gap-2.5">
        <a
          href={COMPANY_INFO.hotlineHref}
          className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-x-1"
          aria-label="Gọi điện tổng đài"
        >
          <span className="text-xs font-bold pl-1 hidden group-hover:inline transition-all">
            Hotline: {COMPANY_INFO.hotline}
          </span>
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
            <Phone className="w-4 h-4 text-white animate-pulse" aria-hidden="true" />
          </div>
        </a>

        <a
          href={COMPANY_INFO.zaloHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-x-1"
          aria-label="Chat Zalo"
        >
          <span className="text-xs font-bold pl-1 hidden group-hover:inline transition-all">
            Tư vấn Zalo 24/7
          </span>
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-white" aria-hidden="true" />
          </div>
        </a>

        <a
          href={COMPANY_INFO.messengerHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-x-1"
          aria-label="Chat Messenger"
        >
          <span className="text-xs font-bold pl-1 hidden group-hover:inline transition-all">
            Messenger
          </span>
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-white" aria-hidden="true" />
          </div>
        </a>

        <Link
          href="/dat-xe"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-x-1 font-bold text-xs"
          aria-label="Đặt xe trực tuyến ngay"
        >
          <CalendarCheck className="w-4 h-4" aria-hidden="true" />
          <span>Đặt Xe Ngay</span>
        </Link>
      </div>
    </>
  );
}
