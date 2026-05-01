import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BonBanh.com - Mua bán ô tô uy tín",
  description: "Chuyên trang mua bán ô tô uy tín nhất Việt Nam từ năm 2006",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
