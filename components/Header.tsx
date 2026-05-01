"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ===== MOBILE HEADER ===== */}
      <div className="md:hidden">
        <div className="bg-white border-b border-gray-200 flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            style={{
              padding: '10px',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              touchAction: 'manipulation',
            }}
          >
            <svg width="28" height="28" fill="none" stroke="#374151" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <Link href="/" style={{ flex: 1, textAlign: 'center' }}>
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'rgb(0,92,198)' }}>
              BDS<span style={{ color: 'red' }}>.com</span>
            </span>
            <div style={{ fontSize: '11px', color: '#888', fontStyle: 'italic' }}>
              Mua bán nhà đất uy tín
            </div>
          </Link>

          <div style={{ width: '48px' }} />
        </div>

        {menuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'white',
            borderTop: '1px solid #e5e7eb',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            zIndex: 9999,
          }}>
            {[
              { href: '/', label: 'Trang chủ' },
              { href: '/oto', label: 'Tìm mua BĐS' },
              { href: '/salon-oto', label: 'Công ty BĐS' },
              { href: '/dang-nhap', label: 'Đăng tin bán' },
              { href: '/gia-xe-oto', label: 'Giá BĐS' },
              { href: '/tin-mua-xe', label: 'Cần mua ?' },
              { href: '/my-bonbanh', label: 'Tài khoản' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '14px 16px',
                  color: 'rgb(3,49,196)',
                  fontWeight: 'bold',
                  borderBottom: '1px solid #f3f4f6',
                  fontSize: '15px',
                }}
              >
                {item.label}
              </Link>
            ))}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '3px solid #e5e7eb' }}>
              <Link href="/dang-nhap" onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '14px', textAlign: 'center', background: 'rgb(16,92,182)', color: 'white', fontWeight: 'bold', fontSize: '15px' }}>
                Đăng nhập
              </Link>
              <Link href="/dang-ky" onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '14px', textAlign: 'center', color: 'rgb(16,92,182)', fontWeight: 'bold', fontSize: '15px', background: '#f9fafb' }}>
                Đăng ký
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ===== DESKTOP HEADER ===== */}
      <div className="hidden md:block float-left w-[990px] mb-[5px]">
        <Link href="/" className="block float-left w-[340px] h-20 mt-[5px] ml-[8px] flex items-center">
          <div className="text-left">
            <div className="text-[32px] font-bold leading-none">
              <span className="text-[rgb(0,92,198)]">Bất Động Sản</span>
            </div>
            <div className="text-[14px] text-[rgb(102,102,102)] italic mt-1">
              Mua bán nhà đất uy tín
            </div>
          </div>
        </Link>

        <div className="float-right -mt-px h-6 bg-[rgb(247,244,244)] rounded-bl-md rounded-br-md">
          <ul className="float-left mt-[3px] ml-[5px] mb-[12px]">
            <li className="border-r float-left pt-0 pr-[10px] pb-0 pl-[15px]" style={{ borderRightColor: "rgb(206,206,206)" }}>
              <Link href="/dang-ky" className="text-[rgb(53,50,171)]">Đăng ký</Link>
            </li>
            <li className="border-r float-left pt-0 pr-[10px] pb-0 pl-[15px]" style={{ borderRightColor: "rgb(206,206,206)" }}>
              <Link href="/dang-nhap" className="text-[rgb(53,50,171)]">Đăng nhập</Link>
            </li>
            <li className="border-r float-left pt-0 pr-[10px] pb-0 pl-[15px]" style={{ borderRightColor: "rgb(206,206,206)" }}>
              <Link href="/gioi-thieu" className="text-[rgb(53,50,171)]">Hướng dẫn</Link>
            </li>
            <li className="float-left pt-0 pr-2 pb-0 pl-[15px]">
              <Link href="/lien-he" className="text-[rgb(53,50,171)]">Liên hệ</Link>
            </li>
          </ul>
        </div>

        <div className="border float-left w-[988px] bg-[rgb(247,244,244)] border-[rgb(199,199,199)]">
          {[
            { href: '/', label: 'Trang chủ' },
            { href: '/oto', label: 'Tìm mua BĐS' },
            { href: '/salon-oto', label: 'Công ty BĐS' },
            { href: '/dang-nhap', label: 'Đăng tin bán' },
            { href: '/gia-xe-oto', label: 'Giá BĐS' },
            { href: '/tin-mua-xe', label: 'Cần mua ?' },
            { href: '/my-bonbanh', label: 'Tài khoản' },
          ].map((item) => (
            <Link key={item.href} href={item.href}
              className="border-l border-r block float-left font-bold text-center whitespace-nowrap text-[rgb(3,49,196)] pt-2 pr-3 pb-2 pl-3"
              style={{ borderRightColor: "rgb(199,199,199)", borderLeftColor: "rgb(255,255,255)" }}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
