"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Clock, Zap, Menu, X, CalendarCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/company-info";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Trang chủ" },
    { href: "/dich-vu-xe-ghep", label: "Dịch vụ xe ghép" },
    { href: "/taxi-dua-don-san-bay-noi-bai", label: "Taxi sân bay" },
    { href: "/taxi-duong-dai", label: "Taxi đường dài" },
    { href: "/bang-gia", label: "Bảng giá" },
    { href: "/dang-ky-doi-tac", label: "Đối tác" },
    { href: "/tin-tuc", label: "Tin tức" },
    { href: "/lien-he", label: "Liên hệ" },
  ];

  return (
    <>
      {/* Accessible Skip Link per AGENTS.md rule 3.1 & WCAG 2.1 AA */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-emerald-700 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-xl focus:outline-none"
      >
        Bỏ qua điều hướng, đến nội dung chính
      </a>

      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <Zap className="w-3.5 h-3.5" aria-hidden="true" />
              <span>100% Đội Xe Điện VinFast Đời Mới</span>
            </span>
            <span className="hidden sm:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Phục vụ 24/7 mọi tỉnh miền Bắc</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="text-slate-400 hidden md:inline">Hotline 24/7:</span>
            <a
              href={COMPANY_INFO.hotlineHref}
              className="flex items-center gap-1 font-bold text-amber-400 hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded"
              aria-label={`Gọi hotline tổng đài ${COMPANY_INFO.hotline}`}
            >
              <Phone className="w-3.5 h-3.5 animate-pulse" aria-hidden="true" />
              <span>{COMPANY_INFO.hotline}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
                <Zap className="w-6 h-6 text-emerald-200" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors leading-none">
                  XE GHÉP <span className="text-emerald-600">LUBI</span>
                </span>
                <span className="text-[11px] text-slate-500 font-medium tracking-wide mt-0.5">
                  xeghephanoi.vn
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/70 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/dat-xe"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-md shadow-emerald-600/25 transition-all hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                <span>Đặt Xe Ngay</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/dat-xe"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700"
              >
                <span>Đặt xe</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-slate-900" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-900" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-xl animate-in slide-in-from-top-2 duration-150"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/dat-xe"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 px-4 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md"
              >
                Đặt Xe Trực Tuyến
              </Link>
              <a
                href={COMPANY_INFO.hotlineHref}
                className="w-full text-center py-3 px-4 rounded-xl text-base font-bold text-amber-600 bg-amber-50 border border-amber-200 hover:bg-amber-100 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Gọi Tổng Đài: {COMPANY_INFO.hotline}</span>
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
