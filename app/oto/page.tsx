import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const districts = [
  { slug: "quan-1", label: "Quận 1" },
  { slug: "quan-2", label: "Quận 2" },
  { slug: "quan-3", label: "Quận 3" },
  { slug: "quan-4", label: "Quận 4" },
  { slug: "quan-5", label: "Quận 5" },
  { slug: "quan-6", label: "Quận 6" },
  { slug: "quan-7", label: "Quận 7" },
  { slug: "quan-8", label: "Quận 8" },
  { slug: "quan-9", label: "Quận 9" },
  { slug: "quan-10", label: "Quận 10" },
  { slug: "quan-11", label: "Quận 11" },
  { slug: "quan-12", label: "Quận 12" },
  { slug: "binh-thanh", label: "Bình Thạnh" },
  { slug: "go-vap", label: "Gò Vấp" },
  { slug: "phu-nhuan", label: "Phú Nhuận" },
  { slug: "tan-binh", label: "Tân Bình" },
  { slug: "tan-phu", label: "Tân Phú" },
  { slug: "thu-duc", label: "Thủ Đức" },
  { slug: "binh-tan", label: "Bình Tân" },
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
    desc: "*Nhà phố mặt tiền, 4 tầng, diện tích 80m², có sổ hồng",
    detail: "Nhà phố mặt tiền đường Nguyễn Huệ, vị trí đắc địa, gần trung tâm...",
    contact: "Bất Động Sản Sài Gòn",
    address: "123 Nguyễn Huệ, P. Bến Nghé, Q.1",
    phone: "0966 876 509",
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
    desc: "*Căn hộ 3PN, 120m², view sông, full nội thất, có sổ hồng",
    detail: "Căn hộ cao cấp tại Vinhomes Central Park, view sông Sài Gòn tuyệt đẹp...",
    contact: "Vinhomes Real Estate",
    address: "208 Nguyễn Hữu Cảnh, P.22, Bình Thạnh",
    phone: "0941 885 555",
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
    desc: "*Nhà phố 1 trệt 2 lầu, 100m², hẻm xe hơi, có sổ hồng",
    detail: "Nhà phố mới xây, khu dân cư cao cấp, gần trường học, siêu thị...",
    contact: "Địa Ốc Phương Đông",
    address: "Đường Võ Văn Ngân, P. Linh Chiểu, Thủ Đức",
    phone: "0966 876 509",
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
    desc: "*Căn hộ 2PN, 75m², view hồ bơi, full nội thất, có sổ hồng",
    detail: "Căn hộ cao cấp Masteri Thảo Điền, tiện ích đầy đủ, an ninh 24/7...",
    contact: "Masteri Real Estate",
    address: "159 Xa Lộ Hà Nội, P. Thảo Điền, Q.2",
    phone: "0988 282 646",
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
    desc: "*Nhà phố 1 trệt 1 lầu, 60m², hẻm 6m, sổ hồng riêng",
    detail: "Nhà mới xây 100%, khu dân cư an ninh, gần chợ, trường học...",
    contact: "Bất Động Sản Tây Sài Gòn",
    address: "Đường Tên Lửa, P. Bình Trị Đông B, Bình Tân",
    phone: "0912 345 678",
    highlight: false,
  },
  {
    id: "6622057",
    href: "/bat-dong-san/6622057",
    condition: "Chung cư",
    year: 2023,
    name: "Căn hộ Sunrise City View",
    price: "4 Tỷ 500 Tr.",
    location: "Quận 7",
    img: "/00924551c4c88fee0b345bcfd88e4906-2981955498456485763.jpg",
    imgAlt: "Căn hộ Sunrise City View",
    desc: "*Căn hộ 2PN, 70m², view thành phố, nội thất cơ bản, có sổ",
    detail: "Căn hộ Sunrise City View, khu Nam Sài Gòn, tiện ích đầy đủ...",
    contact: "Novaland Real Estate",
    address: "23 Nguyễn Hữu Thọ, P. Tân Hưng, Q.7",
    phone: "0909 123 456",
    highlight: true,
  },
  {
    id: "6622058",
    href: "/bat-dong-san/6622058",
    condition: "Thổ cư",
    year: 2024,
    name: "Nhà phố Gò Vấp giá tốt",
    price: "7 Tỷ 200 Tr.",
    location: "Gò Vấp",
    img: "/1b91c77a98d98476cf31537a7a7596d0-2982041111869541936.jpg",
    imgAlt: "Nhà phố Gò Vấp",
    desc: "*Nhà phố 1 trệt 2 lầu, 85m², mặt tiền đường lớn, có sổ",
    detail: "Nhà phố mặt tiền Quang Trung, vị trí kinh doanh tốt, gần Emart...",
    contact: "Địa Ốc Gò Vấp",
    address: "456 Quang Trung, P.10, Gò Vấp",
    phone: "0918 765 432",
    highlight: false,
  },
  {
    id: "6622059",
    href: "/bat-dong-san/6622059",
    condition: "Chung cư",
    year: 2023,
    name: "Căn hộ The Sun Avenue",
    price: "3 Tỷ 800 Tr.",
    location: "Quận 2",
    img: "/23eb243587b6abe39d2b8f2c1ef189a2-2981955502767791339.jpg",
    imgAlt: "Căn hộ The Sun Avenue",
    desc: "*Căn hộ 2PN, 65m², view đẹp, nội thất cơ bản, có sổ hồng",
    detail: "Căn hộ The Sun Avenue, khu An Phú, gần Metro, tiện ích đầy đủ...",
    contact: "Novaland Sales",
    address: "28 Mai Chí Thọ, P. An Phú, Q.2",
    phone: "0907 888 999",
    highlight: true,
  },
];

export default function OtoPage() {
  return (
    <div
      className="text-black text-[16px] leading-[normal]"
      style={{
        fontFamily: '"Times New Roman"',
        textDecoration: "none",
        width: "1920px",
        transform: "scale(1)",
        margin: "auto",
      }}
    >
      <div
        className="text-[12px]"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        <div className="ml-auto mr-auto relative w-[990px]">
          <Header />

          <div></div>
          <div></div>
          {/* Breadcrumb */}
          <div className="float-left w-[988px] text-[14px] pt-[3px] pr-0 pb-[5px] pl-0">
            <div className="float-left text-[15px]">
              <span>
                <Link href="/" className="text-[rgb(3,49,196)]">
                  <span>Trang chủ</span>
                </Link>
              </span>{" "}
              »&nbsp;
            </div>
            <span>
              <Link href="/oto" className="text-[rgb(3,49,196)]">
                <h1 className="float-left font-bold -mb-px -mt-px text-[rgb(51,51,51)] text-[16px]">
                  Mua bán bất động sản
                </h1>
              </Link>
            </span>
          </div>

          {/* Main content */}
          <div className="float-left w-[730px] min-h-[800px] z-[1000]">
            {/* Filter box */}
            <div className="border w-[728px] bg-[rgb(239,244,253)] border-[rgb(160,179,217)]">
              {/* Property Type filter - Loại hình */}
              <div className="float-left w-[99%] pt-[10px] pr-0 pb-[5px] pl-0">
                <label className="block float-left font-bold w-20 ml-[10px] mr-[10px] text-[rgb(68,68,68)]">
                  Loại hình:
                </label>
                <Link
                  href="#"
                  className="block float-left relative bg-[rgb(16,92,182)] text-white text-[13px] leading-[19px] pt-0 pr-2 pb-0 pl-0 before:absolute before:w-1 before:h-1 before:left-1 before:top-[50%] before:bg-white before:content-[''] before:translate-y-[-50%] before:rounded-[100%]"
                >
                  Tất cả
                </Link>
                <Link
                  href="#"
                  className="block float-left relative text-[rgb(3,49,196)] text-[13px] leading-[19px] pt-0 pr-2 pb-0 pl-0 before:absolute before:w-1 before:h-1 before:left-1 before:top-[50%] before:bg-[rgb(16,92,182)] before:content-[''] before:translate-y-[-50%] before:rounded-[100%]"
                >
                  Thổ cư
                </Link>
                <Link
                  href="#"
                  className="block float-left relative ml-[22px] text-[rgb(3,49,196)] text-[13px] leading-[19px] pt-0 pr-2 pb-0 pl-0 before:absolute before:w-1 before:h-1 before:left-1 before:top-[50%] before:bg-[rgb(16,92,182)] before:content-[''] before:translate-y-[-50%] before:rounded-[100%]"
                >
                  Chung cư
                </Link>
              </div>

              {/* Document Status filter - Giấy tờ */}
              <div className="float-left w-[99%] pt-[10px] pr-0 pb-[5px] pl-0">
                <label className="block float-left font-bold w-20 ml-[10px] mr-[10px] text-[rgb(68,68,68)]">
                  Giấy tờ:
                </label>
                <Link
                  href="#"
                  className="block float-left relative bg-[rgb(16,92,182)] text-white text-[13px] leading-[19px] pt-0 pr-2 pb-0 pl-0 before:absolute before:w-1 before:h-1 before:left-1 before:top-[50%] before:bg-white before:content-[''] before:translate-y-[-50%] before:rounded-[100%]"
                >
                  Tất cả
                </Link>
                <Link
                  href="#"
                  className="block float-left relative text-[rgb(3,49,196)] text-[13px] leading-[19px] pt-0 pr-2 pb-0 pl-0 before:absolute before:w-1 before:h-1 before:left-1 before:top-[50%] before:bg-[rgb(16,92,182)] before:content-[''] before:translate-y-[-50%] before:rounded-[100%]"
                >
                  Có sổ
                </Link>
                <Link
                  href="#"
                  className="block float-left relative ml-[22px] text-[rgb(3,49,196)] text-[13px] leading-[19px] pt-0 pr-2 pb-0 pl-0 before:absolute before:w-1 before:h-1 before:left-1 before:top-[50%] before:bg-[rgb(16,92,182)] before:content-[''] before:translate-y-[-50%] before:rounded-[100%]"
                >
                  Chưa có sổ
                </Link>
              </div>

              {/* Location filter - Vị trí */}
              <div className="float-left w-[99%] pt-[10px] pr-0 pb-[5px] pl-0">
                <label className="block float-left font-bold w-20 ml-[10px] mr-[10px] text-[rgb(68,68,68)]">
                  Vị trí:
                </label>
                <div className="float-left w-[610px] leading-[24px]">
                  <ul>
                    <li className="float-left list-none -ml-px">
                      <Link
                        href="#"
                        className="block relative bg-[rgb(16,92,182)] text-white text-[13px] pt-0 pr-[9px] pb-0 pl-0 before:absolute before:w-1 before:h-1 before:left-1 before:top-[50%] before:bg-white before:content-[''] before:translate-y-[-50%] before:rounded-[100%]"
                      >
                        Tất cả
                      </Link>
                    </li>
                    {districts.map((d) => (
                      <li key={d.slug} className="float-left list-none -ml-px">
                        <Link
                          href={`/oto/${d.slug}`}
                          className="block relative text-[rgb(3,49,196)] text-[13px] pt-0 pr-[9px] pb-0 pl-0 before:absolute before:w-1 before:h-1 before:left-1 before:top-[50%] before:bg-[rgb(16,92,182)] before:content-[''] before:translate-y-[-50%] before:rounded-[100%]"
                        >
                          {d.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Expand search */}
              <div className="text-right pt-0 pr-[10px] pb-[5px] pl-0 clear-both">
                <Link href="#" className="text-right text-[rgb(0,0,255)] text-[13px]">
                  Mở rộng điều kiện tìm kiếm [{" "}
                  <b className="font-bold text-right">+</b> ]
                </Link>
              </div>
            </div>

            <div></div>
            {/* Region filter */}
            <div className="float-left w-full mt-[10px]">
              <Link
                href="/oto"
                className="block float-left font-bold bg-[rgb(16,92,182)] text-white pt-[3px] pr-[10px] pb-[3px] pl-[10px]"
              >
                Toàn quốc
              </Link>
              <Link
                href="/ha-noi/oto"
                className="block float-left font-bold text-[rgb(53,51,169)] pt-[3px] pr-[10px] pb-[3px] pl-[10px]"
              >
                Hà Nội
              </Link>
              <Link
                href="/tp-hcm/oto"
                className="block float-left font-bold text-[rgb(53,51,169)] pt-[3px] pr-[10px] pb-[3px] pl-[10px]"
              >
                TP HCM
              </Link>
              <Link
                href="/da-nang/oto"
                className="block float-left font-bold text-[rgb(53,51,169)] pt-[3px] pr-[10px] pb-[3px] pl-[10px]"
              >
                Đà Nẵng
              </Link>
              <Link
                href="#"
                className="block float-right font-bold text-[rgb(53,51,169)] pt-[3px] pr-[10px] pb-[3px] pl-[10px]"
              >
                Chọn tỉnh thành khác
                <Image
                  alt="."
                  src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fce87bfd72c6f5d0e5f9d7b36f2b6a6a309240539.jpg?generation=1777600429058159&alt=media"
                  width={10}
                  height={10}
                  unoptimized
                  className="overflow-clip inline"
                />
              </Link>
            </div>
            <div></div>

            {/* Listings */}
            <div className="float-left w-full min-h-[1125px] pt-0 pr-0 pb-5 pl-0">
              <div className="border w-[726px] border-[rgb(204,204,204)] rounded-tl-[0.1875rem] rounded-tr-[0.1875rem] min-h-64 pt-0 pr-0 pb-[30px] pl-0">
                <div
                  className="border-b float-left w-full h-[33px] bg-[rgb(234,234,234)]"
                  style={{ borderBottomColor: "rgb(204, 204, 204)" }}
                >
                  <h2 className="float-left font-bold uppercase mt-[6px] mb-[6px] text-[rgb(102,102,102)] text-[15px] pt-0 pr-0 pb-0 pl-[10px]">
                    Mua bán bất động sản
                  </h2>
                  .
                </div>

                {/* Pagination */}
                <div
                  className="border-b float-left w-full h-[26px] mt-[3px]"
                  style={{ borderBottomColor: "rgb(222, 222, 222)" }}
                >
                  <div className="float-left w-[215px] h-5 mt-[5px] ml-[10px]">
                    Trang 1 / 350 &nbsp;&nbsp;(
                    <b className="font-bold">Tổng: 8,456 tin</b>)
                  </div>
                  <div className="float-left text-center h-5 mt-[3px] ml-[5px] text-[13px]">
                    <div className="float-left text-center h-5 mt-[3px] ml-[5px]">
                      <span className="block float-left text-center text-[rgb(3,49,196)] pb-px pt-px pr-[6px] pl-[6px]">
                        &lt;&lt;
                      </span>
                      <span
                        className="border-l block float-left text-center text-[rgb(3,49,196)] pb-px pt-px pr-[6px] pl-[6px]"
                        style={{ borderLeftColor: "rgb(204, 204, 204)" }}
                      >
                        &nbsp;&lt;&nbsp;
                      </span>
                      <span
                        className="border-l block float-left text-center bg-[rgb(16,92,182)] text-white pb-px pt-px pr-[6px] pl-[6px]"
                        style={{ borderLeftColor: "rgb(204, 204, 204)" }}
                      >
                        1
                      </span>
                      <span
                        className="border-l block float-left text-center text-[rgb(3,49,196)] pb-px pt-px pr-[6px] pl-[6px]"
                        style={{ borderLeftColor: "rgb(204, 204, 204)" }}
                      >
                        2
                      </span>
                      <span
                        className="border-l block float-left text-center text-[rgb(3,49,196)] pb-px pt-px pr-[6px] pl-[6px]"
                        style={{ borderLeftColor: "rgb(204, 204, 204)" }}
                      >
                        3
                      </span>
                      <span
                        className="border-l block float-left text-center text-[rgb(3,49,196)] pb-px pt-px pr-[6px] pl-[6px]"
                        style={{ borderLeftColor: "rgb(204, 204, 204)" }}
                      >
                        &gt;
                      </span>
                      <span
                        className="border-l block float-left text-center text-[rgb(3,49,196)] pb-px pt-px pr-[6px] pl-[6px]"
                        style={{ borderLeftColor: "rgb(204, 204, 204)" }}
                      >
                        &gt;&gt;
                      </span>
                    </div>
                  </div>
                </div>

                {carListings.map((property) => (
                  <div
                    key={property.id}
                    className={`border-b float-left w-full h-[131px] pt-[5px] pr-0 pb-0 pl-0 mb-[5px] ${
                      property.highlight ? "bg-[rgb(255,254,242)]" : ""
                    }`}
                    style={{
                      borderBottomStyle: "dotted",
                      borderBottomColor: "rgb(222, 222, 222)",
                    }}
                  >
                    <Link href={property.href} className="text-[rgb(3,49,196)]">
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
                        <b className="font-bold text-center">
                          {property.location}
                        </b>
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
                    </Link>
                    <div className="float-left text-left w-[182px] h-[90px] text-[rgb(85,85,85)] pt-0 pr-0 pb-0 pl-2">
                      LH:{" "}
                      <b className="font-bold text-left">{property.contact}</b>
                      &nbsp; {property.address} &nbsp; &nbsp; ĐT:{" "}
                      {property.phone}
                    </div>
                    <div className="clear-both"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="float-left w-[250px] min-h-[800px] z-[1000] ml-[10px]">
            <div className="border bg-[rgb(239,244,253)] border-[rgb(160,179,217)] p-[10px] mb-[10px]">
              <h3 className="font-bold text-[rgb(68,68,68)] mb-[10px]">
                Đăng tin nhanh
              </h3>
              <Link
                href="/dang-tin-ban-xe"
                className="block text-center bg-[rgb(16,92,182)] text-white font-bold py-2 px-4 rounded mb-2"
              >
                + Đăng tin bán xe
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
