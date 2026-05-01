"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ===== MOBILE HEADER - chỉ hiện dưới 768px ===== */}
      <div style={{ display: 'block' }} className="md:hidden">
        <div style={{
          background: 'white',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          padding: '12px 16px',
          position: 'relative',
        }}>
          {/* Hamburger - vùng click lớn */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              zIndex: 10,
              position: 'relative',
              backgroundColor: menuOpen ? '#f3f4f6' : 'transparent',
              borderRadius: '6px',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </div>

          {/* Logo - căn giữa tuyệt đối */}
          <div style={{
            position: 'absolute',
            left: 0,
            right: 0,
            textAlign: 'center',
            pointerEvents: 'none',
          }}>
            <Link href="/" style={{ pointerEvents: 'auto', display: 'inline-block', textDecoration: 'none' }}>
              <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                <span style={{ color: 'rgb(0,92,198)' }}>BDS</span>
                <span style={{ color: 'red' }}>.com</span>
              </div>
              <div style={{ fontSize: '11px', color: '#9ca3af', fontStyle: 'italic' }}>
                Mua bán nhà đất uy tín
              </div>
            </Link>
          </div>

          {/* Spacer phải */}
          <div style={{ width: '44px', flexShrink: 0, marginLeft: 'auto' }} />
        </div>

        {/* Dropdown menu */}
        {menuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'white',
            borderTop: '1px solid #e5e7eb',
            boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
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
                  padding: '14px 20px',
                  color: 'rgb(3,49,196)',
                  fontWeight: 'bold',
                  borderBottom: '1px solid #f3f4f6',
                  fontSize: '16px',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </Link>
            ))}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '3px solid #e5e7eb' }}>
              <Link href="/dang-nhap" onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '14px', textAlign: 'center', background: 'rgb(16,92,182)', color: 'white', fontWeight: 'bold', fontSize: '15px', textDecoration: 'none' }}>
                Đăng nhập
              </Link>
              <Link href="/dang-ky" onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '14px', textAlign: 'center', color: 'rgb(16,92,182)', fontWeight: 'bold', fontSize: '15px', background: '#f9fafb', textDecoration: 'none' }}>
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
