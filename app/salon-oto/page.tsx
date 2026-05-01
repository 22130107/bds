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

          {/* Breadcrumb */}
          <div className="box-content float-left w-[988px] text-[14px] pt-[5px] pr-0 pb-[5px] pl-0">
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
          <div className="border box-content float-left w-full border-[rgb(204,204,204)]">
            {/* Region tabs */}
            <div
              className="border-b box-content float-left w-full bg-[rgb(234,234,234)] pt-2 pr-0 pb-2 pl-0"
              style={{ borderBottomColor: "rgb(204, 204, 204)" }}
            >
              <div className="flex flex-wrap float-right text-[rgb(153,153,153)]">
                <ul className="flex flex-wrap">
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
            <div className="overflow-hidden">
              <div className="w-full mt-[5px]">
                <h1
                  className="box-content inline-block font-bold ml-[5px] mb-[10px] text-[17px] pt-[6px] pr-[10px] pb-[6px] pl-0 border-b-[3px]"
                  style={{ borderBottomColor: "rgb(234, 234, 234)" }}
                >
                  Danh sách công ty bất động sản - đại lý uy tín
                </h1>
              </div>

              {/* Featured salons */}
              <div className="w-full overflow-hidden">
                {featuredSalons.map((salon) => (
                  <div
                    key={salon.slug}
                    className="border-b border-r float-left overflow-hidden w-[25%] h-[124px] bg-[rgb(255,255,217)] p-2"
                    style={{
                      borderRightColor: "rgb(222, 222, 222)",
                      borderBottomColor: "rgb(222, 222, 222)",
                    }}
                  >
                    <Link href={`/salon/${salon.slug}`} className="text-[rgb(3,49,196)]">
                      <div className="h-[70px] text-black">
                        <Image
                          src={salon.img}
                          alt={salon.name}
                          width={65}
                          height={65}
                          unoptimized
                          className="border box-content block float-right overflow-clip p-px w-[65px] border-[rgb(222,222,222)] opacity-[0.8] m-[2px]"
                        />
                        <span className="font-bold text-[rgb(3,49,196)] text-[14px]">
                          {salon.name}
                        </span>
                        <br />
                        <div className="box-content italic text-[rgb(34,34,34)] text-[11px] pt-[5px] pr-0 pb-0 pl-0">
                          {salon.desc}
                        </div>
                      </div>
                      <div className="box-content text-[rgb(34,34,34)] text-[11px] pt-[3px] pr-0 pb-[3px] pl-0">
                        {salon.address}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Regular salons */}
              <div className="w-full overflow-hidden">
                {regularSalons.map((salon) => (
                  <div
                    key={salon.slug}
                    className="border-b border-r float-left overflow-hidden w-[25%] h-[124px] p-2"
                    style={{
                      borderRightColor: "rgb(222, 222, 222)",
                      borderBottomColor: "rgb(222, 222, 222)",
                    }}
                  >
                    <Link href={`/salon/${salon.slug}`} className="text-[rgb(3,49,196)]">
                      <div className="h-[75px] text-black">
                        <Image
                          src={salon.img}
                          alt={salon.name}
                          width={65}
                          height={65}
                          unoptimized
                          className="border box-content block float-right overflow-clip p-px w-[65px] bg-[rgb(253,253,253)] border-[rgb(222,222,222)] opacity-[0.8] m-[2px]"
                        />
                        <span className="font-bold text-[rgb(3,49,196)] text-[14px]">
                          {salon.name}
                        </span>
                        <br />
                        <div className="box-content italic text-[rgb(102,102,102)] text-[11px] pt-[5px] pr-0 pb-0 pl-0">
                          {salon.desc}
                        </div>
                      </div>
                      <div className="box-content text-[rgb(68,68,68)] text-[11px] pt-[3px] pr-0 pb-[3px] pl-0">
                        {salon.address}
                      </div>
                    </Link>
                  </div>
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
