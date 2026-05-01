"use client";
import { useState } from "react";

export default function SaveButton() {
  const [saved, setSaved] = useState(false);

  return (
    <span
      onClick={(e) => { e.stopPropagation(); setSaved(v => !v); }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        fontSize: '15px',
        fontWeight: 'bold',
        color: saved ? '#f59e0b' : '#92400e',
        cursor: 'pointer',
        userSelect: 'none',
        padding: '4px',
      }}
    >
      <span style={{ fontSize: '16px' }}>{saved ? '★' : '☆'}</span>
      Lưu tin
    </span>
  );
}
