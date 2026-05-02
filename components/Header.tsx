"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const marqueeAds = [
    "🏠 Bán nhà mặt tiền Quận 1 - 18 Tỷ - SHR - LH ngay!",
    "🏡 Đất nền Long An 500m² - Giá chỉ 1.2 Tỷ - Sổ đỏ",
    "🏢 Căn hộ cao cấp Bình Thạnh - 2PN - 3.5 Tỷ - View sông",
    "🌳 Biệt thự vườn Bình Dương - 800m² - 5 Tỷ - Thương lượng",
    "🏬 Mặt bằng kinh doanh Quận 7 - 120m² - Giá thuê hấp dẫn",
  ];

  return (
    <>
      {/* ===== MOBILE HEADER - chỉ hiện dưới 768px ===== */}
      <div className="md:hidden">

        {/* === TICKER QUẢNG CÁO BĐS === */}
        <div style={{
          background: 'linear-gradient(90deg, #003087 0%, #0050c8 100%)',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          padding: '6px 0',
          borderBottom: '2px solid #ffd700',
        }}>
          <div style={{
            display: 'inline-block',
            animation: 'marquee-scroll 28s linear infinite',
            paddingLeft: '100%',
          }}>
            {marqueeAds.map((ad, i) => (
              <span key={i} style={{
                color: '#fff',
                fontSize: '13px',
                fontWeight: '600',
                marginRight: '60px',
              }}>
                {ad}
              </span>
            ))}
          </div>
        </div>

        {/* === LOGO + HAMBURGER === */}
        <div style={{
          background: 'white',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          padding: '12px 16px',
          position: 'relative',
        }}>
          {/* Hamburger */}
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

          {/* Logo căn giữa */}
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

        {/* === FLOATING BUTTONS: ZALO + AI === */}
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          zIndex: 9990,
        }}>
          {/* Zalo button - nháy rung đỏ */}
          <a
            href="https://zalo.me/0909000000"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat Zalo"
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: '#0068ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(0,104,255,0.5)',
              animation: 'zalo-shake 1.2s ease-in-out infinite',
              position: 'relative',
              textDecoration: 'none',
            }}
          >
            {/* Vòng sóng đỏ */}
            <span style={{
              position: 'absolute',
              inset: '-4px',
              borderRadius: '50%',
              border: '3px solid #ff2222',
              animation: 'zalo-ring 1.2s ease-out infinite',
            }} />
            <span style={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: '50%',
              border: '2px solid #ff4444',
              animation: 'zalo-ring 1.2s ease-out infinite 0.3s',
            }} />
            {/* Zalo official logo */}
            <img
              src="/zalo-icon.svg"
              alt="Zalo"
              width="36"
              height="36"
            />
          </a>

          {/* AI button */}
          <button
            onClick={() => setAiOpen(v => !v)}
            title="Hỏi AI BĐS"
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(124,58,237,0.5)',
              cursor: 'pointer',
              animation: 'ai-pulse 2.5s ease-in-out infinite',
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.15"/>
              <path d="M9 9h1.5l1.5 4 1.5-4H15" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="7.5" cy="12" r="1" fill="white"/>
              <circle cx="16.5" cy="12" r="1" fill="white"/>
              <path d="M8 16c1.1.8 2.4 1.2 4 1.2s2.9-.4 4-1.2" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* AI Chat popup */}
        {aiOpen && (
          <div style={{
            position: 'fixed',
            bottom: '150px',
            left: '16px',
            width: '280px',
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            zIndex: 9991,
            overflow: 'hidden',
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>🤖 AI Tư vấn BĐS</div>
              <button onClick={() => setAiOpen(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer', lineHeight: 1 }}>×</button>
            </div>
            <div style={{ padding: '16px', fontSize: '13px', color: '#374151' }}>
              <p style={{ margin: '0 0 12px', fontWeight: '600' }}>Xin chào! Tôi có thể giúp bạn:</p>
              {['Tìm BĐS theo ngân sách', 'Tư vấn khu vực đầu tư', 'Định giá bất động sản', 'Thủ tục mua bán nhà đất'].map(q => (
                <div key={q} style={{
                  padding: '8px 12px',
                  marginBottom: '6px',
                  background: '#f3f4f6',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  color: '#2563eb',
                  fontWeight: '500',
                }}>💬 {q}</div>
              ))}
            </div>
          </div>
        )}

        {/* CSS Animations */}
        <style>{`
          @keyframes marquee-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          @keyframes zalo-shake {
            0%, 100% { transform: rotate(0deg); }
            15%       { transform: rotate(-12deg); }
            30%       { transform: rotate(12deg); }
            45%       { transform: rotate(-8deg); }
            60%       { transform: rotate(8deg); }
            75%       { transform: rotate(-4deg); }
            90%       { transform: rotate(4deg); }
          }
          @keyframes zalo-ring {
            0%   { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(1.6); opacity: 0; }
          }
          @keyframes ai-pulse {
            0%, 100% { box-shadow: 0 4px 14px rgba(124,58,237,0.5); }
            50%       { box-shadow: 0 4px 24px rgba(124,58,237,0.9), 0 0 0 6px rgba(124,58,237,0.15); }
          }
        `}</style>
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
