import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const featuredSalons = [
  {
    slug: "batdongsan-saigon",
    name: "Bất Động Sản Sài Gòn",
    desc: "Mua bán, trao đổi, ký gửi các loại bất động sản cao cấp",
    address: "19 Bis Cộng Hòa, P12, Q. Tân Bình, TP HCM",
    img: "/00924551c4c88fee0b345bcfd88e4906-2981955498456485763.jpg",
    featured: true,
  },
  {
    slug: "vinhomes-realestate",
    name: "Vinhomes Real Estate",
    desc: "Chuyên cung cấp căn hộ cao cấp Vinhomes",
    address: "208 Nguyễn Hữu Cảnh, P.22, Bình Thạnh, TP HCM",
    img: "/1b91c77a98d98476cf31537a7a7596d0-2982041111869541936.jpg",
    featured: true,
  },
  {
    slug: "diaoc-phuongdong",
    name: "Địa Ốc Phương Đông",
    desc: "Chuyên cung cấp nhà phố, đất nền khu Đông Sài Gòn",
    address: "Đường Võ Văn Ngân, P. Linh Chiểu, Thủ Đức",
    img: "/23eb243587b6abe39d2b8f2c1ef189a2-2981955502767791339.jpg",
    featured: true,
  },
  {
    slug: "novaland-sales",
    name: "Novaland Sales Center",
    desc: "Đại lý phân phối dự án Novaland trên toàn quốc",
    address: "23 Nguyễn Hữu Thọ, P. Tân Hưng, Q.7, TP HCM",
    img: "/3bdaca0fae6082948eb53eb34cec8704-2981955498694556693.jpg",
    featured: true,
  },
  {
    slug: "masteri-realestate",
    name: "Masteri Real Estate",
    desc: "Chuyên căn hộ cao cấp Masteri Thảo Điền",
    address: "159 Xa Lộ Hà Nội, P. Thảo Điền, Q.2, TP HCM",
    img: "/bff1f11c43d71de2adf3cd9463e389c9-2981955504479132907.jpg",
    featured: true,
  },
];

const regularSalons = [
  {
    slug: "diaoc-govap",
    name: "Địa Ốc Gò Vấp",
    desc: "Mua bán nhà đất khu vực Gò Vấp",
    address: "456 Quang Trung, P.10, Gò Vấp, TP HCM",
    img: "/00924551c4c88fee0b345bcfd88e4906-2981955498456485763.jpg",
  },
  {
    slug: "batdongsan-taysaigon",
    name: "Bất Động Sản Tây Sài Gòn",
    desc: "Chuyên nhà phố, đất nền khu Tây",
    address: "Đường Tên Lửa, P. Bình Trị Đông B, Bình Tân",
    img: "/1b91c77a98d98476cf31537a7a7596d0-2982041111869541936.jpg",
  },
  {
    slug: "sunrise-city-sales",
    name: "Sunrise City Sales Office",
    desc: "Đại lý phân phối Sunrise City View",
    address: "23 Nguyễn Hữu Thọ, P. Tán Hưng, Q.7",
    img: "/23eb243587b6abe39d2b8f2c1ef189a2-2981955502767791339.jpg",
  },
  {
    slug: "thesun-avenue-sales",
    name: "The Sun Avenue Sales",
    desc: "Chuyên căn hộ The Sun Avenue",
    address: "28 Mai Chí Thọ, P. An Phú, Q.2, TP HCM",
    img: "/3bdaca0fae6082948eb53eb34cec8704-2981955498694556693.jpg",
  },
  {
    slug: "diaoc-thuduc",
    name: "Địa Ốc Thủ Đức",
    desc: "Chuyên nhà phố, đất nền Thủ Đức City",
    address: "Đường Võ Văn Ngân, P. Linh Chiểu, Thủ Đức",
    img: "/bff1f11c43d71de2adf3cd9463e389c9-2981955504479132907.jpg",
  },
  {
    slug: "cengroup-sales",
    name: "CEN Group Sales Center",
    desc: "Đại lý phân phối các dự án CEN Group",
    address: "Số 1 Nguyễn Văn Linh, P. Gia Thụy, Long Biên, HN",
    img: "/00924551c4c88fee0b345bcfd88e4906-2981955498456485763.jpg",
  },
  {
    slug: "vingroup-realestate",
    name: "Vingroup Real Estate",
    desc: "Đại lý chính thức Vingroup",
    address: "Số 7 Bằng Lăng 1, Vinhomes Riverside, Long Biên, HN",
    img: "/1b91c77a98d98476cf31537a7a7596d0-2982041111869541936.jpg",
  },
  {
    slug: "diaoc-binhtan",
    name: "Địa Ốc Bình Tân",
    desc: "Chuyên nhà phố giá rẻ khu Bình Tân",
    address: "Đường Tên Lửa, P. Bình Trị Đông, Bình Tân",
    img: "/23eb243587b6abe39d2b8f2c1ef189a2-2981955502767791339.jpg",
  },
];

export default function SalonOtoPage() {
  return (
    <div
      className="text-black text-[16px] leading-[normal] min-h-screen bg-white"
      style={{
        fontFamily: '"Times New Roman"',
        textDecoration: "none"
      }}
    >
      <div
        className="text-[12px]"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        <div className="mx-auto relative w-full max-w-screen-lg px-2 sm:px-4">
          <Header />

          {/* Breadcrumb */}
          <div className="box-content float-left w-full text-[14px] pt-[5px] pr-0 pb-[5px] pl-0">
            <div className="float-left text-[15px]">
              <Link href="/" className="text-[rgb(3,49,196)]">
                Trang chủ
              </Link>{" "}
              »{" "}
              <Link href="/salon-oto" className="text-[rgb(3,49,196)]">
                Công ty Bất Động Sản
              </Link>
            </div>
          </div>

          {/* Main content */}
          <div className="border box-content float-left w-full border-[rgb(204,204,204)] bg-white">
            {/* Region tabs */}
            <div
              className="border-b box-content float-left w-full bg-[rgb(234,234,234)] pt-2 pr-0 pb-2 pl-0"
              style={{ borderBottomColor: "rgb(204, 204, 204)" }}
            >
              <div className="flex flex-wrap float-right text-[rgb(153,153,153)]">
                <ul className="flex flex-wrap text-xs sm:text-sm">
                  {[
                    { href: "/salon-oto-ha-noi", label: "Hà Nội (245)" },
                    { href: "/salon-oto-tp-hcm", label: "TPHCM (389)" },
                    { href: "/salon-oto-da-nang", label: "Đà Nẵng (28)" },
                    { href: "/salon-oto", label: "Toàn Quốc (856)", active: true },
                  ].map((item) => (
                    <li
                      key={item.href}
                      className="border-r box-content float-left list-none relative border-[rgb(153,153,153)]"
                    >
                      <Link
                        href={item.href}
                        className={`box-content block text-center pt-[3px] pr-[6px] pb-[3px] pl-[6px] ${
                          item.active
                            ? "bg-[rgb(0,92,198)] text-white"
                            : "text-[rgb(3,49,196)]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <span className="block">
                  <button className="box-content inline-block text-center mt-[-4px] text-[rgb(3,49,196)] pt-[3px] pr-[6px] pb-[3px] pl-[6px]">
                    Tỉnh thành khác ▼
                  </button>
                </span>
              </div>
            </div>

            <div
              className="border-b float-left w-full bg-[rgb(253,253,253)] p-[5px]"
              style={{ borderBottomColor: "rgb(204, 204, 204)" }}
            >
              <div className="float-left">
                <h2 className="box-content float-left text-[rgb(51,51,51)] text-[14px] pt-1 pr-[6px] pb-1 pl-0">
                  Công ty / Đại lý bất động sản chuyên:
                </h2>
                &nbsp;
                <Link
                  href="/salon-oto"
                  className="box-content block float-left mt-[3px] bg-[rgb(0,92,198)] text-white pt-[3px] pr-[5px] pb-[3px] pl-[5px]"
                >
                  Tất cả
                </Link>
                <span className="box-content block float-left mt-[3px] text-[rgb(170,170,170)] pt-[3px] pr-[5px] pb-[3px] pl-[5px]">
                  |
                </span>
                <Link
                  href="/salon-oto-xe-moi"
                  className="box-content block float-left mt-[3px] text-[rgb(3,49,196)] pt-[3px] pr-[5px] pb-[3px] pl-[5px]"
                >
                  Thổ cư
                </Link>
                <span className="box-content block float-left mt-[3px] text-[rgb(170,170,170)] pt-[3px] pr-[5px] pb-[3px] pl-[5px]">
                  |
                </span>
                <Link
                  href="/salon-oto-xe-cu"
                  className="box-content block float-left mt-[3px] text-[rgb(3,49,196)] pt-[3px] pr-[5px] pb-[3px] pl-[5px]"
                >
                  Chung cư
                </Link>
              </div>
            </div>

            {/* Salon list */}
              <div className="w-full p-1 sm:p-[5px]">
              <div className="w-full mt-1 sm:mt-[5px] mb-2 sm:mb-[10px]">
                <h1
                  className="inline-block font-bold text-[17px] pt-[6px] pr-[10px] pb-[6px] pl-0 border-b-[3px]"
                  style={{ borderBottomColor: "rgb(234, 234, 234)" }}
                >
                  Danh sách công ty bất động sản - đại lý uy tín
                </h1>
              </div>

              {/* Featured salons - 2 cột trên mobile */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full mb-4">
                {featuredSalons.map((salon) => (
                  <Link
                    key={salon.slug}
                    href={`/cong-ty/${salon.slug}`}
                    className="border bg-[rgb(255,255,217)] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                    style={{ borderColor: "rgb(222, 222, 222)" }}
                  >
                    {/* Ảnh vuông */}
                    <div className="w-full aspect-square relative">
                      <Image
                        src={salon.img}
                        alt={salon.name}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    {/* Nội dung */}
                    <div className="p-2 flex flex-col gap-1">
                      <span className="font-bold text-[rgb(3,49,196)] text-[14px] leading-snug line-clamp-2">
                        {salon.name}
                      </span>
                      <div className="italic text-[rgb(51,51,51)] text-[12px] line-clamp-2">
                        {salon.desc}
                      </div>
                      <div className="text-[rgb(68,68,68)] text-[12px] line-clamp-2 mt-1">
                        📍 {salon.address}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Regular salons - 2 cột trên mobile */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
                {regularSalons.map((salon) => (
                  <Link
                    key={salon.slug}
                    href={`/cong-ty/${salon.slug}`}
                    className="border bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                    style={{ borderColor: "rgb(222, 222, 222)" }}
                  >
                    {/* Ảnh vuông */}
                    <div className="w-full aspect-square relative">
                      <Image
                        src={salon.img}
                        alt={salon.name}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    {/* Nội dung */}
                    <div className="p-2 flex flex-col gap-1">
                      <span className="font-bold text-[rgb(3,49,196)] text-[14px] leading-snug line-clamp-2">
                        {salon.name}
                      </span>
                      <div className="italic text-[rgb(102,102,102)] text-[12px] line-clamp-2">
                        {salon.desc}
                      </div>
                      <div className="text-[rgb(68,68,68)] text-[12px] line-clamp-2 mt-1">
                        📍 {salon.address}
                      </div>
                    </div>
                  </Link>
                ))}
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
