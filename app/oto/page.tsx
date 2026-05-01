"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IconUser, IconPhone, IconLocation, IconStar } from "@/components/Icons";

const districts = [
  { slug: "quan-1", label: "Quận 1", short: "Q.1" },
  { slug: "quan-2", label: "Quận 2", short: "Q.2" },
  { slug: "quan-3", label: "Quận 3", short: "Q.3" },
  { slug: "quan-4", label: "Quận 4", short: "Q.4" },
  { slug: "quan-5", label: "Quận 5", short: "Q.5" },
  { slug: "quan-6", label: "Quận 6", short: "Q.6" },
  { slug: "quan-7", label: "Quận 7", short: "Q.7" },
  { slug: "quan-8", label: "Quận 8", short: "Q.8" },
  { slug: "quan-9", label: "Quận 9", short: "Q.9" },
  { slug: "quan-10", label: "Quận 10", short: "Q.10" },
  { slug: "quan-11", label: "Quận 11", short: "Q.11" },
  { slug: "quan-12", label: "Quận 12", short: "Q.12" },
  { slug: "binh-thanh", label: "Bình Thạnh", short: "B.Thạnh" },
  { slug: "go-vap", label: "Gò Vấp", short: "G.Vấp" },
  { slug: "phu-nhuan", label: "Phú Nhuận", short: "P.Nhuận" },
  { slug: "tan-binh", label: "Tân Bình", short: "T.Bình" },
  { slug: "tan-phu", label: "Tân Phú", short: "T.Phú" },
  { slug: "thu-duc", label: "Thủ Đức", short: "T.Đức" },
  { slug: "binh-tan", label: "Bình Tân", short: "B.Tân" },
];

const carListings = [
  {
    id: "6779483",
    href: "/bat-dong-san/6779483",
    condition: "Thổ cư",
    year: 2024,
    name: "Nhà phố Nguyễn Huệ - Q1",
    price: "25 Tỷ",
    location: "Quận 1",
    img: "/00924551c4c88fee0b345bcfd88e4906-2981955498456485763.jpg",
    imgAlt: "Nhà phố Nguyễn Huệ Quận 1",
    specs: ["Thổ cư ✓", "Sổ hồng", "4 tầng", "80m²"],
    contact: "Bất Động Sản Sài Gòn",
    phone: "0966 876 509",
    verified: true,
    highlight: false,
  },
  {
    id: "6774993",
    href: "/bat-dong-san/6774993",
    condition: "Chung cư",
    year: 2023,
    name: "Căn hộ Vinhomes Central Park",
    price: "8 Tỷ 500 Tr.",
    location: "Bình Thạnh",
    img: "/1b91c77a98d98476cf31537a7a7596d0-2982041111869541936.jpg",
    imgAlt: "Căn hộ Vinhomes Central Park",
    specs: ["Chung cư ✓", "Sổ hồng", "120m²", "3 phòng ngủ"],
    contact: "Vinhomes Real Estate",
    phone: "0941 885 555",
    verified: true,
    highlight: true,
  },
  {
    id: "6767853",
    href: "/bat-dong-san/6767853",
    condition: "Thổ cư",
    year: 2024,
    name: "Nhà phố Thủ Đức City",
    price: "12 Tỷ",
    location: "Thủ Đức",
    img: "/23eb243587b6abe39d2b8f2c1ef189a2-2981955502767791339.jpg",
    imgAlt: "Nhà phố Thủ Đức City",
    specs: ["Thổ cư ✓", "Sổ hồng", "100m²", "1 trệt 2 lầu"],
    contact: "Địa Ốc Phương Đông",
    phone: "0966 876 509",
    verified: false,
    highlight: false,
  },
  {
    id: "6747894",
    href: "/bat-dong-san/6747894",
    condition: "Chung cư",
    year: 2023,
    name: "Căn hộ Masteri Thảo Điền",
    price: "6 Tỷ 200 Tr.",
    location: "Quận 2",
    img: "/3bdaca0fae6082948eb53eb34cec8704-2981955498694556693.jpg",
    imgAlt: "Căn hộ Masteri Thảo Điền",
    specs: ["Chung cư ✓", "Sổ hồng", "75m²", "2 phòng ngủ"],
    contact: "Masteri Real Estate",
    phone: "0988 282 646",
    verified: true,
    highlight: true,
  },
  {
    id: "6622056",
    href: "/bat-dong-san/6622056",
    condition: "Thổ cư",
    year: 2024,
    name: "Nhà phố Bình Tân mới xây",
    price: "5 Tỷ 800 Tr.",
    location: "Bình Tân",
    img: "/bff1f11c43d71de2adf3cd9463e389c9-2981955504479132907.jpg",
    imgAlt: "Nhà phố Bình Tân",
    specs: ["Thổ cư ✓", "Sổ hồng riêng", "60m²", "Hẻm 6m"],
    contact: "Bất Động Sản Tây Sài Gòn",
    phone: "0912 345 678",
    verified: false,
    highlight: false,
  },
];

export default function OtoPage() {
  const [loaiHinh, setLoaiHinh] = useState("all");
  const [giayTo, setGiayTo] = useState("all");
  const [viTri, setViTri] = useState("all");

  return (
    <div
      className="text-black text-[16px] leading-[normal]"
      style={{ fontFamily: '"Times New Roman"', textDecoration: "none", margin: "auto" }}
    >
      <div className="text-[12px]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        <div className="ml-auto mr-auto relative w-full md:max-w-[990px]">
          <Header />

          {/* Breadcrumb */}
          <div className="w-full text-[14px] py-2 px-3 md:px-0 md:float-left md:w-[988px]">
            <Link href="/" className="text-[rgb(3,49,196)]">Trang chủ</Link>
            {" »"}&nbsp;
            <Link href="/oto" className="font-bold text-[rgb(51,51,51)] text-[16px]">
              Mua bán bất động sản
            </Link>
          </div>

          {/* Main content */}
          <div className="w-full md:float-left md:w-[730px] min-h-[800px]">

            {/* ===== MOBILE FILTER ===== */}
            <div className="md:hidden w-full bg-[rgb(239,244,253)] border border-[rgb(160,179,217)]">

              {/* Loại hình */}
              <div className="border-b border-[rgb(160,179,217)] px-3 py-2">
                <div className="font-bold text-[rgb(68,68,68)] mb-2 text-sm">Loại hình:</div>
                <div className="flex flex-wrap gap-2">
                  {["all", "tho-cu", "chung-cu"].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setLoaiHinh(val)}
                      className={`py-1.5 px-4 text-xs rounded font-bold whitespace-nowrap ${
                        loaiHinh === val
                          ? "bg-[rgb(16,92,182)] text-white"
                          : "bg-white text-[rgb(3,49,196)] border border-gray-300"
                      }`}
                    >
                      {val === "all" ? "Tất cả" : val === "tho-cu" ? "Thổ cư" : "Chung cư"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Giấy tờ */}
              <div className="border-b border-[rgb(160,179,217)] px-3 py-2">
                <div className="font-bold text-[rgb(68,68,68)] mb-2 text-sm">Giấy tờ:</div>
                <div className="flex flex-wrap gap-2">
                  {["all", "co-so", "chua-co-so"].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setGiayTo(val)}
                      className={`py-1.5 px-4 text-xs rounded font-bold whitespace-nowrap ${
                        giayTo === val
                          ? "bg-[rgb(16,92,182)] text-white"
                          : "bg-white text-[rgb(3,49,196)] border border-gray-300"
                      }`}
                    >
                      {val === "all" ? "Tất cả" : val === "co-so" ? "Có sổ" : "Chưa có sổ"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Vị trí */}
              <div className="border-b border-[rgb(160,179,217)] px-3 py-2">
                <div className="font-bold text-[rgb(68,68,68)] mb-2 text-sm">Vị trí:</div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setViTri("all")}
                    className={`py-1.5 px-3 text-xs rounded font-bold whitespace-nowrap ${
                      viTri === "all"
                        ? "bg-[rgb(16,92,182)] text-white"
                        : "bg-white text-[rgb(3,49,196)] border border-gray-300"
                    }`}
                  >
                    Tất cả
                  </button>
                  {districts.map((d) => (
                    <button
                      key={d.slug}
                      type="button"
                      onClick={() => setViTri(d.slug)}
                      className={`py-1.5 px-3 text-xs rounded font-bold whitespace-nowrap ${
                        viTri === d.slug
                          ? "bg-[rgb(16,92,182)] text-white"
                          : "bg-white text-[rgb(3,49,196)] border border-gray-300"
                      }`}
                    >
                      {d.short}
                    </button>
                  ))}
                </div>
              </div>

              {/* Expand */}
              <div className="text-right px-3 py-2">
                <button type="button" className="text-[rgb(0,0,255)] text-xs font-bold">
                  Mở rộng điều kiện tìm kiếm [ + ]
                </button>
              </div>
            </div>

            {/* ===== DESKTOP FILTER ===== */}
            <div className="hidden md:block border w-[728px] bg-[rgb(239,244,253)] border-[rgb(160,179,217)]">
              <div className="float-left w-[99%] pt-[10px] pr-0 pb-[5px] pl-0">
                <label className="block float-left font-bold w-20 ml-[10px] mr-[10px] text-[rgb(68,68,68)]">Loại hình:</label>
                {["all", "tho-cu", "chung-cu"].map((val) => (
                  <button key={val} type="button" onClick={() => setLoaiHinh(val)}
                    className={`block float-left relative text-[13px] leading-[19px] pt-0 pr-2 pb-0 pl-4 mr-2 before:absolute before:w-1 before:h-1 before:left-1 before:top-[50%] before:content-[''] before:translate-y-[-50%] before:rounded-[100%] ${loaiHinh === val ? "bg-[rgb(16,92,182)] text-white before:bg-white" : "text-[rgb(3,49,196)] before:bg-[rgb(16,92,182)]"}`}>
                    {val === "all" ? "Tất cả" : val === "tho-cu" ? "Thổ cư" : "Chung cư"}
                  </button>
                ))}
              </div>
              <div className="float-left w-[99%] pt-[10px] pr-0 pb-[5px] pl-0">
                <label className="block float-left font-bold w-20 ml-[10px] mr-[10px] text-[rgb(68,68,68)]">Giấy tờ:</label>
                {["all", "co-so", "chua-co-so"].map((val) => (
                  <button key={val} type="button" onClick={() => setGiayTo(val)}
                    className={`block float-left relative text-[13px] leading-[19px] pt-0 pr-2 pb-0 pl-4 mr-2 before:absolute before:w-1 before:h-1 before:left-1 before:top-[50%] before:content-[''] before:translate-y-[-50%] before:rounded-[100%] ${giayTo === val ? "bg-[rgb(16,92,182)] text-white before:bg-white" : "text-[rgb(3,49,196)] before:bg-[rgb(16,92,182)]"}`}>
                    {val === "all" ? "Tất cả" : val === "co-so" ? "Có sổ" : "Chưa có sổ"}
                  </button>
                ))}
              </div>
              <div className="float-left w-[99%] pt-[10px] pr-0 pb-[5px] pl-0">
                <label className="block float-left font-bold w-20 ml-[10px] mr-[10px] text-[rgb(68,68,68)]">Vị trí:</label>
                <div className="float-left w-[610px] leading-[24px]">
                  <ul>
                    <li className="float-left list-none -ml-px">
                      <button type="button" onClick={() => setViTri("all")}
                        className={`block relative text-[13px] pt-0 pr-[9px] pb-0 pl-4 before:absolute before:w-1 before:h-1 before:left-1 before:top-[50%] before:content-[''] before:translate-y-[-50%] before:rounded-[100%] ${viTri === "all" ? "bg-[rgb(16,92,182)] text-white before:bg-white" : "text-[rgb(3,49,196)] before:bg-[rgb(16,92,182)]"}`}>
                        Tất cả
                      </button>
                    </li>
                    {districts.map((d) => (
                      <li key={d.slug} className="float-left list-none -ml-px">
                        <button type="button" onClick={() => setViTri(d.slug)}
                          className={`block relative text-[13px] pt-0 pr-[9px] pb-0 pl-4 before:absolute before:w-1 before:h-1 before:left-1 before:top-[50%] before:content-[''] before:translate-y-[-50%] before:rounded-[100%] ${viTri === d.slug ? "bg-[rgb(16,92,182)] text-white before:bg-white" : "text-[rgb(3,49,196)] before:bg-[rgb(16,92,182)]"}`}>
                          {d.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-right pt-0 pr-[10px] pb-[5px] pl-0 clear-both">
                <button type="button" className="text-right text-[rgb(0,0,255)] text-[13px]">Mở rộng điều kiện tìm kiếm [ <b className="font-bold">+</b> ]</button>
              </div>
            </div>

            {/* Region filter */}
            <div className="w-full mt-[10px] flex flex-wrap items-center gap-1 px-3 md:px-0 md:float-left">
              <button type="button" className="inline-block font-bold bg-[rgb(16,92,182)] text-white py-1 px-3 rounded text-xs">Toàn quốc</button>
              <button type="button" className="inline-block font-bold text-[rgb(53,51,169)] py-1 px-2 text-xs">Hà Nội</button>
              <button type="button" className="inline-block font-bold text-[rgb(53,51,169)] py-1 px-2 text-xs">TP HCM</button>
              <button type="button" className="inline-block font-bold text-[rgb(53,51,169)] py-1 px-2 text-xs">Đà Nẵng</button>
              <button type="button" className="inline-block font-bold text-[rgb(53,51,169)] py-1 px-2 text-xs ml-auto">Chọn tỉnh thành khác ▼</button>
            </div>

            {/* Listings */}
            <div className="w-full pt-0 pb-5 md:float-left">
              <div className="w-full md:w-[726px] md:border md:border-[rgb(204,204,204)] md:rounded">

                {/* Header row */}
                <div className="border-b bg-[rgb(234,234,234)] px-3 py-2 flex justify-between items-center" style={{ borderBottomColor: "rgb(204,204,204)" }}>
                  <h2 className="font-bold uppercase text-[rgb(102,102,102)] text-[16px]">Mua bán bất động sản</h2>
                  <span className="text-[14px] font-bold text-gray-600">Tổng: 8,456 tin</span>
                </div>

                {/* Pagination */}
                <div className="border-b px-3 py-1 flex items-center gap-1 text-xs" style={{ borderBottomColor: "rgb(222,222,222)" }}>
                  <span className="text-gray-600 mr-2">Trang 1/350</span>
                  {["<<", "<", "1", "2", "3", ">", ">>"].map((p, i) => (
                    <span key={i} className={`px-2 py-0.5 border border-gray-300 cursor-pointer ${p === "1" ? "bg-[rgb(16,92,182)] text-white" : "text-[rgb(3,49,196)]"}`}>{p}</span>
                  ))}
                </div>

                {/* Listing items */}
                {carListings.map((property) => (
                  <div
                    key={property.id}
                    className={`border-b w-full p-2 ${property.highlight ? "bg-[rgb(255,254,242)]" : ""}`}
                    style={{ borderBottomStyle: "dotted", borderBottomColor: "rgb(222,222,222)" }}
                  >
                    {/* Mobile layout */}
                    <div className="md:hidden">
                      <Link href={property.href} className="block">
                        {/* Dòng 1: Tên + Giá cùng hàng */}
                        <div className="flex items-baseline gap-3 mb-2">
                          <div className="font-bold text-[rgb(3,49,196)] text-[15px] leading-snug min-w-0 truncate flex-1">
                            {property.name}
                          </div>
                          <div className="font-bold text-green-600 text-[18px] whitespace-nowrap">
                            {property.price}
                          </div>
                        </div>

                        {/* Dòng 2: Ảnh + Specs */}
                        <div className="flex gap-3 items-start">
                          <div className="flex-shrink-0 w-[120px]">
                            <Image alt={property.imgAlt} src={property.img} width={120} height={90} unoptimized className="border object-cover w-[120px] h-[90px] border-[rgb(222,222,222)] rounded" />
                          </div>
                          <div className="flex-1 flex justify-center">
                            <div className="grid grid-cols-2 auto-rows-min gap-x-4 gap-y-0.5">
                              {property.specs.map((spec, i) => (
                                <div key={i} className="text-[15px] text-[rgb(51,51,51)] flex items-center gap-1">
                                  <span className="text-gray-500">·</span>
                                  <span>{spec}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Link>

                      {/* Dòng 3: Liên hệ + Địa điểm */}
                      <div className="flex justify-between items-end mt-2">
                        <div className="text-[13px]">
                          <div className="flex items-center gap-1.5">
                            <IconUser />
                            <span className="font-bold text-[rgb(51,51,51)]">{property.contact}</span>
                            {property.verified && (
                              <span className="inline-flex items-center justify-center w-4 h-4 bg-green-500 rounded-full text-white text-[10px]">✓</span>
                            )}
                          </div>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <IconPhone />
                            <a href={`tel:${property.phone}`} className="text-[rgb(3,49,196)] font-bold">{property.phone}</a>
                          </div>
                          <button className="mt-1.5 text-[13px] text-[rgb(3,49,196)] border border-[rgb(3,49,196)] rounded px-2 py-0.5 font-bold flex items-center gap-1">
                            <IconLocation className="text-[rgb(3,49,196)] w-3 h-3" /> Xem địa chỉ
                          </button>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <div className="flex items-center gap-1 text-[13px] font-bold text-green-600">
                            <IconLocation className="text-green-600 w-3 h-3" />
                            <span>{property.location}</span>
                          </div>
                          <button className="text-[12px] text-gray-400 flex items-center gap-1">
                            <IconStar className="text-gray-400 w-3 h-3" /> Lưu tin
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop layout */}
                    <div className="hidden md:block">
                      <Link href={property.href} className="text-[rgb(3,49,196)]">
                        <div className="float-left text-center w-[90px] h-[30px] text-black">{property.condition}&nbsp;<b>{property.year}</b></div>
                        <div className="float-left text-left w-[215px] h-[30px]"><b>{property.name}</b></div>
                        <div className="float-left text-left w-20 h-[30px] text-black"><b>{property.price}</b></div>
                        <div className="float-left text-center w-24 h-[30px] text-black"><b>{property.location}</b></div>
                        <div className="float-left text-center w-[98px] h-[100px] text-black">
                          <Image alt={property.imgAlt} src={property.img} width={90} height={70} unoptimized className="border object-cover w-[90px] border-[rgb(222,222,222)] max-h-[70px] rounded m-[2px]" />
                          <br /><span className="text-[rgb(85,85,85)] text-[11px]">Mã: {property.id}</span>
                        </div>
                        <div className="float-left text-left w-[198px] h-[90px] text-[rgb(51,51,51)]">
                          {property.specs.map((s, i) => <div key={i}>· {s}</div>)}
                        </div>
                      </Link>
                      <div className="float-left text-left w-[182px] h-[90px] text-[rgb(85,85,85)] pl-2">
                        LH: <b>{property.contact}</b>&nbsp; ĐT: {property.phone}
                      </div>
                      <div className="clear-both"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar - desktop only */}
          <div className="hidden md:block float-left w-[250px] min-h-[800px] ml-[10px]">
            <div className="border bg-[rgb(239,244,253)] border-[rgb(160,179,217)] p-[10px] mb-[10px]">
              <h3 className="font-bold text-[rgb(68,68,68)] mb-[10px]">Đăng tin nhanh</h3>
              <Link href="/dang-nhap" className="block text-center bg-[rgb(16,92,182)] text-white font-bold py-2 px-4 rounded mb-2">
                + Đăng tin bán BĐS
              </Link>
            </div>
          </div>

          <div className="clear-both" />
          <Footer />
        </div>
      </div>
    </div>
  );
}
