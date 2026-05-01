import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dịch vụ bán bất động sản",
  description: "Chuyên trang mua bán bất động sản uy tín",
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
