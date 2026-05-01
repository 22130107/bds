import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="float-left w-[990px] mb-[5px] relative" style={{ zIndex: 10 }}>
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
          href="/dang-tin-ban-xe"
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
  );
}
