"use client";
import { useState } from "react";

export default function SaveButton() {
  const [saved, setSaved] = useState(false);

  return (
    <span
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setSaved(v => !v);
      }}
      onTouchEnd={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setSaved(v => !v);
      }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: saved ? '#f59e0b' : '#ef4444',
        cursor: 'pointer',
        WebkitUserSelect: 'none',
        userSelect: 'none',
        padding: '8px 4px',
        touchAction: 'manipulation',
      }}
    >
      <span style={{ fontSize: '18px', lineHeight: 1 }}>{saved ? '★' : '☆'}</span>
      Lưu tin
    </span>
  );
}
