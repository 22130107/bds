"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full mb-[5px] relative" style={{ zIndex: 10 }}>
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-gray-200">
        {/* Mobile Top Bar */}
        <div className="flex items-center justify-between px-4 py-3">
          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex-1 text-center">
            <div className="inline-block">
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-sm bg-gray-800 flex items-center justify-center text-white font-bold text-xs">
                    🏠
                  </div>
                </div>
                <div className="text-[18px] font-bold text-[rgb(0,92,198)]">
                  BDS<span className="text-red-600">.com</span>
                </div>
              </div>
              <div className="text-[10px] text-gray-500 italic text-center">
                Mua bán nhà đất uy tín
              </div>
            </div>
          </Link>

          {/* Spacer for balance */}
          <div className="w-6"></div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="bg-white border-t border-gray-200">
            <Link
              href="/"
              className="block px-4 py-3 text-[rgb(3,49,196)] font-bold border-b border-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              href="/oto"
              className="block px-4 py-3 text-[rgb(3,49,196)] font-bold border-b border-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Tìm mua BĐS
            </Link>
            <Link
              href="/salon-oto"
              className="block px-4 py-3 text-[rgb(3,49,196)] font-bold border-b border-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Công ty BĐS
            </Link>
            <Link
              href="/dang-nhap"
              className="block px-4 py-3 text-[rgb(3,49,196)] font-bold border-b border-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Đăng tin bán
            </Link>
            <Link
              href="/gia-xe-oto"
              className="block px-4 py-3 text-[rgb(3,49,196)] font-bold border-b border-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Giá BĐS
            </Link>
            <Link
              href="/tin-mua-xe"
              className="block px-4 py-3 text-[rgb(3,49,196)] font-bold border-b border-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Cần mua ?
            </Link>
            <Link
              href="/my-bonbanh"
              className="block px-4 py-3 text-[rgb(3,49,196)] font-bold border-b border-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Tài khoản
            </Link>
            {/* Divider */}
            <div className="border-t-4 border-gray-200" />
            <div className="grid grid-cols-2">
              <Link
                href="/dang-nhap"
                className="block px-4 py-3 text-center text-white font-bold bg-[rgb(16,92,182)] border-r border-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                Đăng nhập
              </Link>
              <Link
                href="/dang-ky"
                className="block px-4 py-3 text-center text-[rgb(16,92,182)] font-bold bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                Đăng ký
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block float-left w-[990px]">
        {/* Logo */}
        <Link
          href="/"
          className="block float-left w-[340px] h-20 mt-[5px] ml-[8px] flex items-center"
        >
          <div className="text-left">
            <div className="text-[32px] font-bold leading-none">
              <span className="text-[rgb(0,92,198)]">Bất Động Sản</span>
            </div>
            <div className="text-[14px] text-[rgb(102,102,102)] italic mt-1">
              Mua bán nhà đất uy tín
            </div>
          </div>
        </Link>

        {/* Top right links */}
        <div className="float-right -mt-px h-6 bg-[rgb(247,244,244)] rounded-bl-md rounded-br-md">
          <ul className="float-left mt-[3px] ml-[5px] mb-[12px]">
            <li
              className="border-r float-left pt-0 pr-[10px] pb-0 pl-[15px]"
              style={{ borderRightColor: "rgb(206, 206, 206)" }}
            >
              <Link href="/dang-ky" className="text-[rgb(53,50,171)]">
                Đăng ký
              </Link>
            </li>
            <li
              className="border-r float-left pt-0 pr-[10px] pb-0 pl-[15px]"
              style={{ borderRightColor: "rgb(206, 206, 206)" }}
            >
              <Link href="/dang-nhap" className="text-[rgb(53,50,171)]">
                Đăng nhập
              </Link>
            </li>
            <li
              className="border-r float-left pt-0 pr-[10px] pb-0 pl-[15px]"
              style={{ borderRightColor: "rgb(206, 206, 206)" }}
            >
              <Link href="/gioi-thieu" className="text-[rgb(53,50,171)]">
                Hướng dẫn
              </Link>
            </li>
            <li className="float-left pt-0 pr-2 pb-0 pl-[15px]">
              <Link href="/lien-he" className="text-[rgb(53,50,171)]">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation bar */}
        <div className="border float-left w-[988px] bg-[rgb(247,244,244)] border-[rgb(199,199,199)]">
          <Link
            href="/"
            className="border-l border-r block float-left font-bold text-center whitespace-nowrap text-[rgb(3,49,196)] pt-2 pr-3 pb-2 pl-3"
            style={{
              borderRightColor: "rgb(199, 199, 199)",
              borderLeftColor: "rgb(255, 255, 255)",
            }}
          >
            Trang chủ
          </Link>
          <Link
            href="/oto"
            className="border-l border-r block float-left font-bold text-center whitespace-nowrap text-[rgb(3,49,196)] pt-2 pr-3 pb-2 pl-3"
            style={{
              borderRightColor: "rgb(199, 199, 199)",
              borderLeftColor: "rgb(255, 255, 255)",
            }}
          >
            Tìm mua BĐS
          </Link>
          <Link
            href="/salon-oto"
            className="border-l border-r block float-left font-bold text-center whitespace-nowrap text-[rgb(3,49,196)] pt-2 pr-3 pb-2 pl-3"
            style={{
              borderRightColor: "rgb(199, 199, 199)",
              borderLeftColor: "rgb(255, 255, 255)",
            }}
          >
            Công ty BĐS
          </Link>
          <Link
            href="/dang-nhap"
            className="border-l border-r block float-left font-bold text-center whitespace-nowrap text-[rgb(3,49,196)] pt-2 pr-3 pb-2 pl-3"
            style={{
              borderRightColor: "rgb(199, 199, 199)",
              borderLeftColor: "rgb(255, 255, 255)",
            }}
          >
            Đăng tin bán
          </Link>
          <Link
            href="/gia-xe-oto"
            className="border-l border-r block float-left font-bold text-center whitespace-nowrap text-[rgb(3,49,196)] pt-2 pr-3 pb-2 pl-3"
            style={{
              borderRightColor: "rgb(199, 199, 199)",
              borderLeftColor: "rgb(255, 255, 255)",
            }}
          >
            <span className="text-center">Giá BĐS</span>
          </Link>
          <Link
            href="/tin-mua-xe"
            className="border-l border-r block float-left font-bold text-center whitespace-nowrap text-[rgb(3,49,196)] pt-2 pr-3 pb-2 pl-3"
            style={{
              borderRightColor: "rgb(199, 199, 199)",
              borderLeftColor: "rgb(255, 255, 255)",
            }}
          >
            Cần mua ?
          </Link>
          <Link
            href="/my-bonbanh"
            className="border-l border-r block float-left font-bold text-center whitespace-nowrap text-[rgb(3,49,196)] pt-2 pr-3 pb-2 pl-3"
            style={{
              borderRightColor: "rgb(199, 199, 199)",
              borderLeftColor: "rgb(255, 255, 255)",
            }}
          >
            Tài khoản
          </Link>
        </div>
      </div>
    </div>
  );
}
