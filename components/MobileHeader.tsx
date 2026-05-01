"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ position: 'relative', zIndex: 9999 }}>
      <div style={{
        background: 'white',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        padding: '10px 16px',
      }}>
        <div
          onClick={() => setMenuOpen(v => !v)}
          style={{
            width: '44px', height: '44px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', flexShrink: 0,
            borderRadius: '6px',
            background: menuOpen ? '#e5e7eb' : 'transparent',
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </div>

        <div style={{ flex: 1, textAlign: 'center' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
              <span style={{ color: 'rgb(0,92,198)' }}>BDS</span>
              <span style={{ color: 'red' }}>.com</span>
            </div>
            <div style={{ fontSize: '11px', color: '#9ca3af', fontStyle: 'italic' }}>
              Mua bán nhà đất uy tín
            </div>
          </Link>
        </div>

        <div style={{ width: '44px', flexShrink: 0 }} />
      </div>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 9998,
        }} onClick={() => setMenuOpen(false)}>
        </div>
      )}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '68px', left: 0, right: 0,
          background: 'white', boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
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
          ].map(item => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '14px 20px', color: 'rgb(3,49,196)', fontWeight: 'bold', borderBottom: '1px solid #f3f4f6', fontSize: '16px', textDecoration: 'none' }}>
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
  );
}
