import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandSidebar from "@/components/BrandSidebar";

const propertyListings = [
  {
    id: "6704252",
    href: "/bat-dong-san/6704252",
    condition: "Thổ cư",
    year: 2024,
    name: "Nhà phố Quận 1",
    price: "18 Tỷ",
    location: "Q.1",
    img: "/00924551c4c88fee0b345bcfd88e4906-2981955498456485763.jpg",
    imgAlt: "Nhà phố Quận 1",
    desc: "*Diện tích 4x15m, 1 trệt 3 lầu, hẻm xe hơi, có sổ hồng",
    detail: "Nhà mặt tiền đường Nguyễn Trãi, vị trí đắc địa, gần trung tâm...",
    contact: "Bất Động Sản Sài Gòn",
    address: "123 Nguyễn Trãi, P. Bến Thành, Q.1",
    phone: "0906 646 464 - 0906 444 444",
    highlight: false,
  },
  {
    id: "6530522",
    href: "/bat-dong-san/6530522",
    condition: "Chung cư",
    year: 2023,
    name: "Căn hộ Vinhomes Central Park",
    price: "5 Tỷ 200 Tr.",
    location: "Bình Thạnh",
    img: "/1b91c77a98d98476cf31537a7a7596d0-2982041111869541936.jpg",
    imgAlt: "Căn hộ Vinhomes Central Park",
    desc: "*Diện tích 85m², 2 phòng ngủ, 2 WC, đầy đủ nội thất cao cấp, có sổ hồng",
    detail: "Căn hộ 2PN tại Vinhomes Central Park, view sông tuyệt đẹp, full nội thất...",
    contact: "Vinhomes Real Estate",
    address: "208 Nguyễn Hữu Cảnh, P.22, Bình Thạnh",
    phone: "0976 987 767",
    highlight: true,
  },
  {
    id: "6247719",
    href: "/bat-dong-san/6247719",
    condition: "Chung cư",
    year: 2024,
    name: "Căn hộ Masteri Thảo Điền",
    price: "3 Tỷ 800 Tr.",
    location: "Quận 2",
    img: "/23eb243587b6abe39d2b8f2c1ef189a2-2981955502767791339.jpg",
    imgAlt: "Căn hộ Masteri Thảo Điền",
    desc: "*Diện tích 70m², 2 phòng ngủ, view hồ bơi, full nội thất, có sổ hồng",
    detail: "Căn hộ cao cấp Masteri Thảo Điền, tiện ích đầy đủ, an ninh 24/7...",
    contact: "Masteri Real Estate",
    address: "159 Xa Lộ Hà Nội, P. Thảo Điền, Q.2",
    phone: "0588 448 888",
    highlight: false,
  },
  {
    id: "6554745",
    href: "/bat-dong-san/6554745",
    condition: "Thổ cư",
    year: 2024,
    name: "Nhà phố Thủ Đức",
    price: "8 Tỷ 500 Tr.",
    location: "Thủ Đức",
    img: "/3bdaca0fae6082948eb53eb34cec8704-2981955498694556693.jpg",
    imgAlt: "Nhà phố Thủ Đức",
    desc: "*Diện tích 5x20m, 1 trệt 2 lầu, hẻm xe hơi, có sổ hồng",
    detail: "Nhà phố mới xây, khu dân cư cao cấp, gần trường học, siêu thị...",
    contact: "Địa Ốc Phương Đông",
    address: "Đường Võ Văn Ngân, P. Linh Chiểu, Thủ Đức",
    phone: "0983 222 223",
    highlight: true,
  },
  {
    id: "6747040",
    href: "/bat-dong-san/6747040",
    condition: "Chung cư",
    year: 2023,
    name: "Căn hộ Sunrise City",
    price: "4 Tỷ 200 Tr.",
    location: "Quận 7",
    img: "/bff1f11c43d71de2adf3cd9463e389c9-2981955504479132907.jpg",
    imgAlt: "Căn hộ Sunrise City",
    desc: "*Diện tích 90m², 2 phòng ngủ, view đẹp, full nội thất, có sổ hồng",
    detail: "Căn hộ cao cấp Sunrise City, view đẹp, tiện ích đầy đủ...",
    contact: "Novaland Real Estate",
    address: "23 Nguyễn Hữu Thọ, P. Tân Hưng, Q.7",
    phone: "0937 145 678",
    highlight: false,
  },
];

export default function HomePage() {
  return (
    <div
      className="text-black text-[16px] leading-[normal] overflow-x-hidden"
      style={{
        fontFamily: '"Times New Roman"',
        textDecoration: "none",
        margin: "auto",
      }}
    >
      <div
        className="text-[12px] overflow-x-hidden"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        <div className="ml-auto mr-auto relative w-full md:max-w-[990px]">
          <Header />

          {/* Left Sidebar - Hidden on mobile */}
          <div className="hidden md:block float-left w-[190px] relative" style={{ zIndex: 1 }}>
            <BrandSidebar />
          </div>

          {/* Main content */}
          <div className="w-full md:float-left md:w-[490px] min-h-[800px] relative overflow-x-hidden" style={{ zIndex: 1 }}>
            {/* Search box */}
            <form>
              <div className="w-full">
                {/* Mobile Search - Detailed Filters */}
                <div className="md:hidden w-full bg-[rgb(223,239,250)] p-3">
                  {/* Tabs */}
                  <div className="mb-3 border-b border-gray-300">
                    <button type="button" className="inline-block font-bold text-[rgb(51,51,51)] pb-2 px-3 border-b-2 border-black text-sm">
                      Tin bán BĐS
                    </button>
                    <button type="button" className="inline-block text-[rgb(3,49,196)] pb-2 px-3 text-sm">
                      Tin mua BĐS
                    </button>
                  </div>

                  {/* Search Input */}
                  <div className="relative mb-3">
                    <input
                      type="text"
                      placeholder="Tìm kiếm..."
                      className="border w-full bg-white border-[rgb(101,175,202)] text-[rgb(51,51,51)] text-[13px] py-2 px-3 pr-24 rounded-sm"
                    />
                    <button
                      type="submit"
                      className="absolute right-1 top-1/2 -translate-y-1/2 text-center px-4 py-1 bg-[rgb(26,145,229)] text-white rounded text-sm"
                    >
                      Tìm kiếm
                    </button>
                  </div>

                  {/* Loại BĐS */}
                  <div className="mb-3">
                    <label className="block text-gray-700 font-bold mb-2 text-sm">Loại hình:</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button type="button" className="bg-[rgb(16,92,182)] text-white font-bold py-2 px-3 text-xs rounded">
                        Tất cả
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] font-bold py-2 px-3 text-xs rounded border border-gray-300">
                        Phố cư
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] font-bold py-2 px-3 text-xs rounded border border-gray-300">
                        Chung cư
                      </button>
                    </div>
                  </div>

                  {/* Giấy tờ */}
                  <div className="mb-3">
                    <label className="block text-gray-700 font-bold mb-2 text-sm">Giấy tờ:</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button type="button" className="bg-[rgb(16,92,182)] text-white font-bold py-2 px-3 text-xs rounded">
                        Tất cả
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] font-bold py-2 px-3 text-xs rounded border border-gray-300">
                        Có sổ
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] font-bold py-2 px-3 text-xs rounded border border-gray-300">
                        Chưa có sổ
                      </button>
                    </div>
                  </div>

                  {/* Vị trí */}
                  <div className="mb-3">
                    <label className="block text-gray-700 font-bold mb-2 text-sm">Vị trí:</label>
                    <div className="flex flex-wrap gap-2">
                      <button type="button" className="bg-[rgb(16,92,182)] text-white font-bold py-1.5 px-3 text-xs rounded whitespace-nowrap">
                        Tất cả
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] py-1.5 px-3 text-xs rounded border border-gray-300 whitespace-nowrap">
                        Q.1
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] py-1.5 px-3 text-xs rounded border border-gray-300 whitespace-nowrap">
                        Q.2
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] py-1.5 px-3 text-xs rounded border border-gray-300 whitespace-nowrap">
                        Q.3
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] py-1.5 px-3 text-xs rounded border border-gray-300 whitespace-nowrap">
                        Q.4
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] py-1.5 px-3 text-xs rounded border border-gray-300 whitespace-nowrap">
                        Q.5
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] py-1.5 px-3 text-xs rounded border border-gray-300 whitespace-nowrap">
                        Q.6
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] py-1.5 px-3 text-xs rounded border border-gray-300 whitespace-nowrap">
                        Q.7
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] py-1.5 px-3 text-xs rounded border border-gray-300 whitespace-nowrap">
                        Q.8
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] py-1.5 px-3 text-xs rounded border border-gray-300 whitespace-nowrap">
                        Q.9
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] py-1.5 px-3 text-xs rounded border border-gray-300 whitespace-nowrap">
                        Q.10
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] py-1.5 px-3 text-xs rounded border border-gray-300 whitespace-nowrap">
                        Q.11
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] py-1.5 px-3 text-xs rounded border border-gray-300 whitespace-nowrap">
                        Q.12
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] py-1.5 px-3 text-xs rounded border border-gray-300 whitespace-nowrap">
                        B.Thạnh
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] py-1.5 px-3 text-xs rounded border border-gray-300 whitespace-nowrap">
                        G.Vấp
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] py-1.5 px-3 text-xs rounded border border-gray-300 whitespace-nowrap">
                        P.Nhuận
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] py-1.5 px-3 text-xs rounded border border-gray-300 whitespace-nowrap">
                        T.Bình
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] py-1.5 px-3 text-xs rounded border border-gray-300 whitespace-nowrap">
                        T.Phú
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] py-1.5 px-3 text-xs rounded border border-gray-300 whitespace-nowrap">
                        T.Đức
                      </button>
                      <button type="button" className="bg-white text-[rgb(3,49,196)] py-1.5 px-3 text-xs rounded border border-gray-300 whitespace-nowrap">
                        B.Tân
                      </button>
                    </div>
                  </div>

                  {/* Giới hạn giá */}
                  <div className="mb-3">
                    <label className="block text-gray-700 font-bold mb-2 text-sm">Giới hạn giá:</label>
                    <div className="mb-2">
                      <input type="checkbox" id="priceLimit" className="mr-2" />
                      <label htmlFor="priceLimit" className="text-xs">Giới hạn giá</label>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="20000000000" 
                      className="w-full"
                    />
                    <div className="flex justify-between text-[10px] text-gray-600 mt-1">
                      <span>0</span>
                      <span>200Tr</span>
                      <span>400Tr</span>
                      <span>600Tr</span>
                      <span>800Tr</span>
                      <span>1Tỉ</span>
                      <span>1,2Tỉ</span>
                      <span>1,4Tỉ</span>
                      <span>1,6Tỉ</span>
                    </div>
                  </div>

                  {/* Expand button */}
                  <div className="text-center">
                    <button type="button" className="text-[rgb(3,49,196)] font-bold text-sm">
                      Mở rộng điều kiện tìm kiếm [ + ]
                    </button>
                  </div>
                </div>

                {/* Desktop Search - Simple */}
                <div className="hidden md:block border w-full bg-[rgb(223,239,250)] border-[rgb(158,204,225)] p-3">
                  <div className="mb-3">
                    <h2 className="inline-block text-[rgb(3,49,196)] text-[15px] mr-4">
                      <Link
                        href="/oto"
                        className="font-bold text-[rgb(51,51,51)]"
                      >
                        Tin bán BĐS
                      </Link>
                    </h2>
                    <h2 className="inline-block text-[rgb(3,49,196)] text-[15px]">
                      <Link href="/oto">
                        Tin cần mua BĐS
                      </Link>
                    </h2>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Tìm kiếm..."
                      className="border w-full bg-[rgb(250,253,254)] border-[rgb(101,175,202)] text-[rgb(51,51,51)] text-[13px] py-2 px-3 pr-24 rounded-sm"
                    />
                    <Link
                      href="/oto"
                      className="absolute right-1 top-1/2 -translate-y-1/2 text-center px-4 py-1 bg-[rgb(26,145,229)] text-white rounded"
                    >
                      Tìm kiếm
                    </Link>
                  </div>
                </div>
              </div>
            </form>
            <div className="float-left"></div>

            <div className="w-full mt-[10px] flex flex-wrap items-center gap-2 px-3 md:px-0 overflow-x-hidden">
              <Link
                href="/oto"
                className="inline-block font-bold bg-[rgb(16,92,182)] text-white py-1 px-3 rounded"
              >
                Toàn quốc
              </Link>
              <Link
                href="/ha-noi/oto"
                className="inline-block font-bold text-[rgb(53,51,169)] py-1 px-3"
              >
                Hà Nội
              </Link>
              <Link
                href="/tp-hcm/oto"
                className="inline-block font-bold text-[rgb(53,51,169)] py-1 px-3"
              >
                TP HCM
              </Link>
              <Link
                href="#"
                className="inline-block font-bold text-[rgb(53,51,169)] py-1 px-3 ml-auto"
              >
                Chọn tỉnh thành khác ▼
              </Link>
            </div>

            {/* Property listings */}
            <div className="w-full pt-0 pr-0 pb-5 pl-0 overflow-x-hidden">
              <div className="w-full md:border md:border-[rgb(204,204,204)] md:rounded">
                <div
                  className="border-b w-full bg-[rgb(234,234,234)] p-2 flex justify-between items-center"
                  style={{ borderBottomColor: "rgb(204, 204, 204)" }}
                >
                  <h1 className="font-bold uppercase text-[rgb(102,102,102)] text-[16px]">
                    <Link href="/oto" className="text-[rgb(102,102,102)]">
                      Mua bán bất động sản
                    </Link>
                  </h1>
                  <span className="text-[14px] font-bold">
                    Tổng : 8,456 tin
                  </span>
                </div>

                {propertyListings.map((property) => (
                  <div
                    key={property.id}
                    className={`border-b w-full p-2 ${
                      property.highlight ? "bg-[rgb(255,254,242)]" : ""
                    }`}
                    style={{
                      borderBottomStyle: "dotted",
                      borderBottomColor: "rgb(222, 222, 222)",
                    }}
                  >
                    <Link href={property.href} className="text-[rgb(3,49,196)] block">
                      {/* Mobile Layout */}
                      <div className="md:hidden">
                        <div className="flex gap-3">
                          {/* Image */}
                          <div className="flex-shrink-0 w-[100px]">
                            <Image
                              alt={property.imgAlt}
                              src={property.img}
                              width={100}
                              height={80}
                              unoptimized
                              className="border object-cover w-[100px] h-[80px] border-[rgb(222,222,222)] rounded"
                            />
                            <div className="text-center text-[rgb(85,85,85)] text-[12px] mt-1">
                              {property.condition} {property.year}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-[rgb(3,49,196)] mb-1 text-[14px] leading-snug">
                              {property.name}
                            </div>
                            <div className="text-[rgb(51,51,51)] text-[13px] mb-2 leading-snug">
                              {property.desc}
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="font-bold text-black text-[18px]">
                                {property.price}
                              </div>
                              <div className="text-black text-[14px] font-bold">
                                {property.location}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Contact Info */}
                        <div className="mt-2 text-[rgb(85,85,85)] text-[13px]">
                          <div className="font-bold">{property.contact}</div>
                          <div>{property.address}</div>
                          <div>ĐT: {property.phone}</div>
                        </div>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden md:block">
                        <div className="float-left text-center w-[90px] h-[30px] text-black">
                          {property.condition}&nbsp;
                          <b className="font-bold text-center">{property.year}</b>
                        </div>
                        <div className="float-left text-left w-[215px] h-[30px]">
                          <b className="font-bold text-left">{property.name}</b>
                        </div>
                        <div className="float-left text-left w-20 h-[30px] text-black">
                          <b className="font-bold text-left">{property.price}</b>
                        </div>
                        <div className="float-left text-center w-24 h-[30px] text-black">
                          <b className="font-bold text-center">{property.location}</b>
                        </div>
                        <div className="float-left text-center w-[98px] h-[100px] text-black">
                          <Image
                            alt={property.imgAlt}
                            src={property.img}
                            width={90}
                            height={70}
                            unoptimized
                            className="border object-cover overflow-clip text-center w-[90px] border-[rgb(222,222,222)] max-h-[70px] rounded-[1px] m-[2px]"
                          />
                          <br />
                          <span className="text-center text-[rgb(85,85,85)] text-[11px]">
                            Mã: {property.id}
                          </span>
                        </div>
                        <div className="float-left text-left w-[198px] h-[90px] text-[rgb(51,51,51)]">
                          {property.desc}&nbsp;
                          <p className="text-left mt-[5px] mb-[5px]">
                            {property.detail}
                          </p>
                        </div>
                        <div className="float-left text-left w-[182px] h-[90px] text-[rgb(85,85,85)] pt-0 pr-0 pb-0 pl-2">
                          LH:{" "}
                          <b className="font-bold text-left">{property.contact}</b>
                          &nbsp; {property.address} &nbsp; &nbsp; ĐT: {property.phone}
                        </div>
                        <div className="clear-both"></div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar - Hidden on mobile */}
          <div className="hidden md:block float-left w-[290px] min-h-[800px] relative" style={{ zIndex: 1 }}>
            {/* Login box */}
            <div className="border bg-[rgb(255,255,229)] border-[rgb(255,182,75)] mb-[10px]">
              <div className="bg-[rgb(254,241,172)] border-b border-[rgb(255,182,75)] px-[10px] py-[8px]">
                <h3 className="font-bold text-[rgb(200,61,20)] text-[14px]">
                  bonbanh.com
                </h3>
              </div>
              <div className="p-[10px]">
                <Link
                  href="/dang-nhap"
                  className="block text-center bg-[rgb(255,182,75)] text-black font-bold py-[8px] px-4 mb-[8px] hover:bg-[rgb(255,165,0)]"
                >
                  Đăng nhập
                </Link>
                <Link
                  href="/dang-ky"
                  className="block text-center bg-white border border-[rgb(255,182,75)] text-black font-bold py-[8px] px-4 hover:bg-[rgb(255,255,229)]"
                >
                  Đăng ký
                </Link>
              </div>
            </div>

            {/* Quick post */}
            <div className="border bg-[rgb(255,255,229)] border-[rgb(255,182,75)] mb-[10px]">
              <div className="bg-[rgb(254,241,172)] border-b border-[rgb(255,182,75)] px-[10px] py-[8px]">
                <h3 className="font-bold text-[rgb(200,61,20)] text-[14px]">
                  Đăng tin nhanh
                </h3>
              </div>
              <div className="p-[10px]">
                <Link
                  href="/dang-tin-ban-xe"
                  className="block text-center bg-[rgb(255,182,75)] text-black font-bold py-[8px] px-4 mb-[8px] text-[13px] hover:bg-[rgb(255,165,0)]"
                >
                  Đăng tin bán BĐS
                </Link>
                <Link
                  href="/tin-mua-xe"
                  className="block text-center bg-white border border-[rgb(255,182,75)] text-black font-bold py-[8px] px-4 mb-[8px] text-[13px] hover:bg-[rgb(255,255,229)]"
                >
                  Đăng tin cần mua BĐS
                </Link>
                <Link
                  href="/tim-nguoi-mua-xe"
                  className="block text-center bg-white border border-[rgb(255,182,75)] text-black font-bold py-[8px] px-4 text-[13px] hover:bg-[rgb(255,255,229)]"
                >
                  Tìm người mua BĐS
                </Link>
              </div>
            </div>

            {/* Member features */}
            <div className="border bg-[rgb(255,255,229)] border-[rgb(255,182,75)] mb-[10px]">
              <div className="bg-[rgb(254,241,172)] border-b border-[rgb(255,182,75)] px-[10px] py-[8px]">
                <h3 className="font-bold text-[rgb(200,61,20)] text-[14px]">
                  Thành viên cao cấp
                </h3>
              </div>
              <div className="p-[10px] text-[12px]">
                <Link
                  href="/huong-dan-su-dung"
                  className="block text-[rgb(8,52,206)] py-[4px] hover:underline"
                >
                  Hướng dẫn đăng tin
                </Link>
                <Link
                  href="/bao-gia"
                  className="block text-[rgb(8,52,206)] py-[4px] hover:underline"
                >
                  Bảng giá dịch vụ
                </Link>
              </div>
            </div>

            {/* Salon Oto */}
            <div className="border bg-[rgb(255,255,229)] border-[rgb(255,182,75)] mb-[10px]">
              <div className="bg-[rgb(254,241,172)] border-b border-[rgb(255,182,75)] px-[10px] py-[8px]">
                <h3 className="font-bold text-[rgb(200,61,20)] text-[14px]">
                  Công ty BĐS
                </h3>
              </div>
              <div className="p-[10px] text-[12px]">
                <Link
                  href="/salon-oto"
                  className="block text-[rgb(8,52,206)] py-[4px] hover:underline"
                >
                  Danh sách công ty bất động sản
                </Link>
              </div>
            </div>
          </div>

          <div className="clear-both" />
          <Footer />
        </div>
      </div>
    </div>
  );
}
