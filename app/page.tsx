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

          {/* Left Sidebar */}
          <div className="float-left w-[190px] relative" style={{ zIndex: 1 }}>
            <BrandSidebar />
          </div>

          {/* Main content */}
          <div className="float-left w-[490px] min-h-[800px] relative" style={{ zIndex: 1 }}>
            {/* Search box */}
            <form>
              <div className="w-[490px]">
                <div className="border float-left w-full h-[78px] bg-[rgb(223,239,250)] border-[rgb(158,204,225)]">
                  <div className="float-left w-[380px] h-5 mt-[10px] ml-[10px]">
                    <h2 className="float-left text-[rgb(3,49,196)] text-[15px] pt-0 pr-[10px] pb-0 pl-0">
                      <Link
                        href="/oto"
                        className="block float-left font-bold text-[rgb(51,51,51)] pt-0 pr-[10px] pb-0 pl-0"
                      >
                        Tin bán BĐS
                      </Link>
                    </h2>
                    <h2 className="float-left text-[rgb(3,49,196)] text-[15px] pt-0 pr-[10px] pb-0 pl-0">
                      <Link
                        href="/oto"
                        className="block float-left pt-0 pr-[10px] pb-0 pl-0"
                      >
                        Tin cần mua BĐS
                      </Link>
                    </h2>
                  </div>
                  <div className="float-left relative w-[451px] h-7 ml-[10px]">
                    <input
                      type="text"
                      className="border block float-left overflow-clip w-full bg-[rgb(250,253,254)] border-[rgb(101,175,202)] text-[rgb(51,51,51)] text-[13px] pt-[5px] pr-[5px] pb-1 pl-[5px] rounded-sm"
                    />
                    <Link
                      href="/oto"
                      className="block absolute right-px text-center w-[78px] h-[26px] bg-[rgb(26,145,229)] text-white leading-[26px]"
                    >
                      Tìm kiếm
                    </Link>
                  </div>
                </div>
              </div>
            </form>
            <div className="float-left"></div>

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
              <span className="block float-right">
                <Link
                  href="#"
                  className="block float-left font-bold text-[rgb(53,51,169)] pt-[3px] pr-[10px] pb-[3px] pl-[10px]"
                >
                  Chọn tỉnh thành khác
                  <Image
                    src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fce87bfd72c6f5d0e5f9d7b36f2b6a6a309240539.jpg?generation=1777600429058159&alt=media"
                    alt=""
                    width={10}
                    height={10}
                    unoptimized
                    className="overflow-clip inline"
                  />
                </Link>
              </span>
            </div>

            {/* Property listings */}
            <div className="float-left w-full pt-0 pr-0 pb-5 pl-0">
              <div className="border w-[488px] border-[rgb(204,204,204)] rounded-tl-[0.1875rem] rounded-tr-[0.1875rem]">
                <div
                  className="border-b float-left w-full h-[33px] bg-[rgb(234,234,234)]"
                  style={{ borderBottomColor: "rgb(204, 204, 204)" }}
                >
                  <h1 className="float-left font-bold uppercase mt-[8px] mb-[8px] text-[rgb(102,102,102)] text-[15px] pt-0 pr-0 pb-0 pl-[10px]">
                    <Link href="/oto" className="text-[rgb(102,102,102)]">
                      Mua bán bất động sản
                    </Link>
                  </h1>
                  <span className="block float-right m-2">
                    Tổng : 8,456 tin
                  </span>
                </div>

                {propertyListings.map((property) => (
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
                    </Link>
                    <div className="float-left text-left w-[182px] h-[90px] text-[rgb(85,85,85)] pt-0 pr-0 pb-0 pl-2">
                      LH:{" "}
                      <b className="font-bold text-left">{property.contact}</b>
                      &nbsp; {property.address} &nbsp; &nbsp; ĐT: {property.phone}
                    </div>
                    <div className="clear-both"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="float-left w-[290px] min-h-[800px] relative" style={{ zIndex: 1 }}>
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
