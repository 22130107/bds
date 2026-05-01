import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PropertyDetailPage() {
  return (
    <div className="text-black overflow-x-hidden" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div className="ml-auto mr-auto relative w-full md:max-w-[990px]">
        <Header />

        {/* Breadcrumb */}
        <div className="w-full text-[14px] py-2 px-3 md:px-0">
          <Link href="/" className="text-[rgb(3,49,196)]">Trang chủ</Link>{" "}
          »{" "}
          <Link href="/oto" className="text-[rgb(3,49,196)]">Mua bán bất động sản</Link>{" "}
          » <span className="font-bold">Căn hộ Vinhomes Central Park - 2020</span>
        </div>

        <div className="w-full md:flex md:gap-4 px-3 md:px-0">
          {/* Main content */}
          <div className="w-full md:w-[650px]">

            {/* Property title */}
            <div className="border border-[rgb(204,204,204)] bg-white p-4 mb-3 rounded">
              <h1 className="font-bold text-[20px] text-[rgb(51,51,51)] mb-3">
                Căn hộ Vinhomes Central Park - 2020
              </h1>
              <div className="flex flex-wrap gap-3 text-[14px] text-[rgb(85,85,85)]">
                <span>
                  <b>Giá:</b>{" "}
                  <span className="text-green-600 text-[20px] font-bold">5 Tỷ 200 Tr.</span>
                </span>
                <span><b>Loại hình:</b> Chung cư</span>
                <span><b>Khu vực:</b> Q. Bình Thạnh, TP HCM</span>
              </div>
            </div>

            {/* Property images */}
            <div className="border border-[rgb(204,204,204)] bg-white p-4 mb-3 rounded">
              <h2 className="font-bold text-[16px] text-[rgb(51,51,51)] mb-3">
                Hình ảnh bất động sản
              </h2>
              <div className="mb-3">
                <Image
                  src="/1b91c77a98d98476cf31537a7a7596d0-2982041111869541936.jpg"
                  alt="Căn hộ Vinhomes Central Park"
                  width={620}
                  height={400}
                  unoptimized
                  className="border border-[rgb(222,222,222)] w-full h-auto object-cover rounded"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  "/00924551c4c88fee0b345bcfd88e4906-2981955498456485763.jpg",
                  "/23eb243587b6abe39d2b8f2c1ef189a2-2981955502767791339.jpg",
                  "/3bdaca0fae6082948eb53eb34cec8704-2981955498694556693.jpg",
                  "/bff1f11c43d71de2adf3cd9463e389c9-2981955504479132907.jpg",
                ].map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`Hình ${i + 1}`}
                    width={140}
                    height={100}
                    unoptimized
                    className="border border-[rgb(222,222,222)] w-full h-auto object-cover cursor-pointer hover:opacity-80 rounded"
                  />
                ))}
              </div>
            </div>

            {/* Property details */}
            <div className="border border-[rgb(204,204,204)] bg-white p-4 mb-3 rounded">
              <h2 className="font-bold text-[16px] text-[rgb(51,51,51)] mb-3">Thông tin chi tiết</h2>
              <table className="w-full text-[14px]">
                <tbody>
                  {[
                    ["Loại hình", "Chung cư"],
                    ["Diện tích", "85 m²"],
                    ["Số phòng ngủ", "2 phòng"],
                    ["Số WC", "2 phòng"],
                    ["Năm xây dựng", "2020"],
                    ["Giấy tờ", "Có sổ hồng"],
                    ["Nội thất", "Đầy đủ nội thất cao cấp"],
                    ["Hướng", "Đông Nam"],
                    ["Địa chỉ", "208 Nguyễn Hữu Cảnh, P.22, Q. Bình Thạnh, TP HCM"],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b" style={{ borderBottomColor: "rgb(238,238,238)" }}>
                      <td className="py-2 w-[140px] md:w-[200px] font-bold text-[rgb(85,85,85)]">{label}:</td>
                      <td className="py-2">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Description */}
            <div className="border border-[rgb(204,204,204)] bg-white p-4 mb-3 rounded">
              <h2 className="font-bold text-[16px] text-[rgb(51,51,51)] mb-3">Mô tả chi tiết</h2>
              <div className="text-[14px] leading-[24px] text-[rgb(51,51,51)]">
                <p className="mb-3">
                  Căn hộ 2 phòng ngủ tại Vinhomes Central Park, view sông Sài Gòn tuyệt đẹp.
                  Diện tích 85m², thiết kế hiện đại, đầy đủ nội thất cao cấp.
                </p>
                <p className="font-bold mb-2">Đặc điểm nổi bật:</p>
                <ul className="list-disc pl-5 mb-3 space-y-1">
                  <li>View sông Sài Gòn thoáng đẹp</li>
                  <li>Nội thất cao cấp: sofa, giường, tủ bếp, máy lạnh, tủ lạnh...</li>
                  <li>Hệ thống tiện ích đầy đủ: hồ bơi, gym, công viên, siêu thị...</li>
                  <li>An ninh 24/7, bãi đỗ xe rộng rãi</li>
                  <li>Gần trường học, bệnh viện, trung tâm thương mại</li>
                </ul>
                <p className="mb-2"><b>Giá:</b> 5 tỷ 200 triệu (có thể thương lượng)</p>
                <p>Liên hệ ngay để được xem nhà và tư vấn chi tiết!</p>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="w-full md:w-[330px] mt-3 md:mt-0">

            {/* Contact box */}
            <div className="border border-[rgb(255,182,75)] bg-[rgb(255,255,229)] mb-3 rounded">
              <div className="bg-[rgb(254,241,172)] border-b border-[rgb(255,182,75)] px-4 py-3 rounded-t">
                <h3 className="font-bold text-[rgb(200,61,20)] text-[15px]">Thông tin liên hệ</h3>
              </div>
              <div className="p-4 text-[14px] space-y-2">
                <div><b>Người bán:</b> Công ty BĐS Sài Gòn</div>
                <div><b>Địa chỉ:</b> 118 Lê Văn Lương, Hà Nội</div>
                <div>
                  <b>Điện thoại:</b>{" "}
                  <a href="tel:0904718688" className="text-red-600 font-bold text-[16px]">
                    0904 718 688
                  </a>
                </div>
                <div><b>Email:</b> contact@bds-saigon.com</div>
                <Link
                  href="/lien-he"
                  className="block text-center bg-[rgb(255,182,75)] text-black font-bold py-3 px-4 mt-3 rounded hover:bg-[rgb(255,165,0)]"
                >
                  Liên hệ ngay
                </Link>
              </div>
            </div>

            {/* Similar properties */}
            <div className="border border-[rgb(204,204,204)] bg-white mb-3 rounded">
              <div className="bg-[rgb(234,234,234)] border-b border-[rgb(204,204,204)] px-4 py-3 rounded-t">
                <h3 className="font-bold text-[rgb(102,102,102)] text-[14px]">BĐS tương tự</h3>
              </div>
              <div className="p-3 space-y-3">
                {[
                  { src: "/00924551c4c88fee0b345bcfd88e4906-2981955498456485763.jpg", name: "Nhà phố Quận 1", price: "18 Tỷ", loc: "Q.1" },
                  { src: "/23eb243587b6abe39d2b8f2c1ef189a2-2981955502767791339.jpg", name: "Căn hộ Masteri Thảo Điền", price: "3 Tỷ 800 Tr.", loc: "Q.2" },
                  { src: "/bff1f11c43d71de2adf3cd9463e389c9-2981955504479132907.jpg", name: "Căn hộ Sunrise City", price: "4 Tỷ 200 Tr.", loc: "Q.7" },
                ].map((item, i) => (
                  <Link key={i} href="/oto" className="flex gap-3 text-[rgb(3,49,196)]">
                    <Image src={item.src} alt={item.name} width={80} height={60} unoptimized
                      className="border border-[rgb(222,222,222)] object-cover w-[80px] h-[60px] rounded flex-shrink-0" />
                    <div className="flex-1 text-[13px]">
                      <div className="font-bold mb-1 leading-snug">{item.name}</div>
                      <div className="text-green-600 font-bold">{item.price}</div>
                      <div className="text-[rgb(85,85,85)]">{item.loc}, TP HCM</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="clear-both" />
        <Footer />
      </div>
    </div>
  );
}
