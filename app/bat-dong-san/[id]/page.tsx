import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PropertyDetailPage() {
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
          <div className="float-left w-[988px] text-[14px] pt-[3px] pr-0 pb-[5px] pl-0">
            <Link href="/" className="text-[rgb(3,49,196)]">
              Trang chủ
            </Link>{" "}
            »{" "}
            <Link href="/oto" className="text-[rgb(3,49,196)]">
              Mua bán bất động sản
            </Link>{" "}
            » <span className="font-bold">Căn hộ Vinhomes Central Park - 2020</span>
          </div>

          {/* Main content */}
          <div className="float-left w-[650px] min-h-[800px]">
            {/* Property title */}
            <div className="border border-[rgb(204,204,204)] bg-white p-[15px] mb-[10px]">
              <h1 className="font-bold text-[20px] text-[rgb(51,51,51)] mb-[10px]">
                Căn hộ Vinhomes Central Park - 2020
              </h1>
              <div className="text-[14px] text-[rgb(85,85,85)]">
                <span className="mr-[20px]">
                  <b className="font-bold">Giá:</b>{" "}
                  <span className="text-[rgb(255,0,0)] text-[18px] font-bold">
                    5 Tỷ 200 Tr.
                  </span>
                </span>
                <span className="mr-[20px]">
                  <b className="font-bold">Loại hình:</b> Chung cư
                </span>
                <span>
                  <b className="font-bold">Khu vực:</b> Q. Bình Thạnh, TP HCM
                </span>
              </div>
            </div>

            {/* Property images */}
            <div className="border border-[rgb(204,204,204)] bg-white p-[15px] mb-[10px]">
              <h2 className="font-bold text-[16px] text-[rgb(51,51,51)] mb-[10px]">
                Hình ảnh bất động sản
              </h2>
              <div className="mb-[10px]">
                <Image
                  src="/1b91c77a98d98476cf31537a7a7596d0-2982041111869541936.jpg"
                  alt="Căn hộ Vinhomes Central Park"
                  width={620}
                  height={400}
                  unoptimized
                  className="border border-[rgb(222,222,222)] w-full h-auto object-cover"
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
                    className="border border-[rgb(222,222,222)] w-full h-auto object-cover cursor-pointer hover:opacity-80"
                  />
                ))}
              </div>
            </div>

            {/* Property details */}
            <div className="border border-[rgb(204,204,204)] bg-white p-[15px] mb-[10px]">
              <h2 className="font-bold text-[16px] text-[rgb(51,51,51)] mb-[10px]">
                Thông tin chi tiết
              </h2>
              <table className="w-full text-[13px]">
                <tbody>
                  <tr className="border-b" style={{ borderBottomColor: "rgb(238, 238, 238)" }}>
                    <td className="py-[8px] w-[200px] font-bold">Loại hình:</td>
                    <td className="py-[8px]">Chung cư</td>
                  </tr>
                  <tr className="border-b" style={{ borderBottomColor: "rgb(238, 238, 238)" }}>
                    <td className="py-[8px] font-bold">Diện tích:</td>
                    <td className="py-[8px]">85 m²</td>
                  </tr>
                  <tr className="border-b" style={{ borderBottomColor: "rgb(238, 238, 238)" }}>
                    <td className="py-[8px] font-bold">Số phòng ngủ:</td>
                    <td className="py-[8px]">2 phòng</td>
                  </tr>
                  <tr className="border-b" style={{ borderBottomColor: "rgb(238, 238, 238)" }}>
                    <td className="py-[8px] font-bold">Số WC:</td>
                    <td className="py-[8px]">2 phòng</td>
                  </tr>
                  <tr className="border-b" style={{ borderBottomColor: "rgb(238, 238, 238)" }}>
                    <td className="py-[8px] font-bold">Năm xây dựng:</td>
                    <td className="py-[8px]">2020</td>
                  </tr>
                  <tr className="border-b" style={{ borderBottomColor: "rgb(238, 238, 238)" }}>
                    <td className="py-[8px] font-bold">Giấy tờ:</td>
                    <td className="py-[8px]">Có sổ hồng</td>
                  </tr>
                  <tr className="border-b" style={{ borderBottomColor: "rgb(238, 238, 238)" }}>
                    <td className="py-[8px] font-bold">Nội thất:</td>
                    <td className="py-[8px]">Đầy đủ nội thất cao cấp</td>
                  </tr>
                  <tr className="border-b" style={{ borderBottomColor: "rgb(238, 238, 238)" }}>
                    <td className="py-[8px] font-bold">Hướng:</td>
                    <td className="py-[8px]">Đông Nam</td>
                  </tr>
                  <tr className="border-b" style={{ borderBottomColor: "rgb(238, 238, 238)" }}>
                    <td className="py-[8px] font-bold">Địa chỉ:</td>
                    <td className="py-[8px]">208 Nguyễn Hữu Cảnh, P.22, Q. Bình Thạnh, TP HCM</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Description */}
            <div className="border border-[rgb(204,204,204)] bg-white p-[15px] mb-[10px]">
              <h2 className="font-bold text-[16px] text-[rgb(51,51,51)] mb-[10px]">
                Mô tả chi tiết
              </h2>
              <div className="text-[13px] leading-[22px] text-[rgb(51,51,51)]">
                <p className="mb-[10px]">
                  Căn hộ 2 phòng ngủ tại Vinhomes Central Park, view sông Sài Gòn tuyệt đẹp. 
                  Diện tích 85m², thiết kế hiện đại, đầy đủ nội thất cao cấp.
                </p>
                <p className="mb-[10px]">
                  <b className="font-bold">Đặc điểm nổi bật:</b>
                </p>
                <ul className="list-disc pl-[20px] mb-[10px]">
                  <li>View sông Sài Gòn thoáng đẹp</li>
                  <li>Nội thất cao cấp: sofa, giường, tủ bếp, máy lạnh, tủ lạnh...</li>
                  <li>Hệ thống tiện ích đầy đủ: hồ bơi, gym, công viên, siêu thị...</li>
                  <li>An ninh 24/7, bãi đỗ xe rộng rãi</li>
                  <li>Gần trường học, bệnh viện, trung tâm thương mại</li>
                </ul>
                <p className="mb-[10px]">
                  <b className="font-bold">Giá:</b> 5 tỷ 200 triệu (có thể thương lượng)
                </p>
                <p>
                  Liên hệ ngay để được xem nhà và tư vấn chi tiết!
                </p>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="float-left w-[330px] min-h-[800px] ml-[10px]">
            {/* Contact box */}
            <div className="border border-[rgb(255,182,75)] bg-[rgb(255,255,229)] mb-[10px]">
              <div className="bg-[rgb(254,241,172)] border-b border-[rgb(255,182,75)] px-[10px] py-[8px]">
                <h3 className="font-bold text-[rgb(200,61,20)] text-[14px]">
                  Thông tin liên hệ
                </h3>
              </div>
              <div className="p-[15px] text-[13px]">
                <div className="mb-[10px]">
                  <b className="font-bold">Người bán:</b> Công ty BĐS Sài Gòn
                </div>
                <div className="mb-[10px]">
                  <b className="font-bold">Địa chỉ:</b> 118 Lê Văn Lương, Hà Nội
                </div>
                <div className="mb-[10px]">
                  <b className="font-bold">Điện thoại:</b>{" "}
                  <span className="text-[rgb(255,0,0)] font-bold">
                    0904 718 688 - 0915 418 669
                  </span>
                </div>
                <div className="mb-[15px]">
                  <b className="font-bold">Email:</b> contact@bds-saigon.com
                </div>
                <Link
                  href="/lien-he"
                  className="block text-center bg-[rgb(255,182,75)] text-black font-bold py-[10px] px-[20px] hover:bg-[rgb(255,165,0)]"
                >
                  Liên hệ ngay
                </Link>
              </div>
            </div>

            {/* Map */}
            <div className="border border-[rgb(255,182,75)] bg-[rgb(255,255,229)] mb-[10px]">
              <div className="bg-[rgb(254,241,172)] border-b border-[rgb(255,182,75)] px-[10px] py-[8px]">
                <h3 className="font-bold text-[rgb(200,61,20)] text-[14px]">
                  Bản đồ đường đi
                </h3>
              </div>
              <div className="p-[10px]">
                <div className="w-full h-[250px] bg-[rgb(229,227,223)] relative mb-[10px]">
                  <Image
                    src="/3bdaca0fae6082948eb53eb34cec8704-2981955498694556693.jpg"
                    alt="Map"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="text-[12px] text-center mb-[10px]">
                  Phóng to | Đổ tỉ lệ: 45 cm = 200 m | Điều khiển bản đồ
                </div>
                <div className="text-center">
                  <Link
                    href="#"
                    className="inline-block bg-[rgb(255,182,75)] text-black font-bold py-[8px] px-[20px] text-[13px] hover:bg-[rgb(255,165,0)]"
                  >
                    Xem mới về
                  </Link>
                </div>
              </div>
            </div>

            {/* Similar properties */}
            <div className="border border-[rgb(204,204,204)] bg-white mb-[10px]">
              <div className="bg-[rgb(234,234,234)] border-b border-[rgb(204,204,204)] px-[10px] py-[8px]">
                <h3 className="font-bold text-[rgb(102,102,102)] text-[14px]">
                  BĐS tương tự
                </h3>
              </div>
              <div className="p-[10px]">
                {[
                  "/00924551c4c88fee0b345bcfd88e4906-2981955498456485763.jpg",
                  "/23eb243587b6abe39d2b8f2c1ef189a2-2981955502767791339.jpg",
                  "/bff1f11c43d71de2adf3cd9463e389c9-2981955504479132907.jpg",
                ].map((src, i) => (
                  <div key={i} className="border-b pb-[10px] mb-[10px]" style={{ borderBottomColor: "rgb(238, 238, 238)" }}>
                    <Link href={`/bat-dong-san/${i + 1}`} className="text-[rgb(3,49,196)]">
                      <div className="flex gap-[10px]">
                        <Image
                          src={src}
                          alt="BĐS"
                          width={80}
                          height={60}
                          unoptimized
                          className="border border-[rgb(222,222,222)] object-cover"
                        />
                        <div className="flex-1 text-[12px]">
                          <div className="font-bold mb-[5px]">Căn hộ Masteri Thảo Điền</div>
                          <div className="text-[rgb(255,0,0)] font-bold">3 Tỷ 800 Tr.</div>
                          <div className="text-[rgb(85,85,85)]">Q.2, TP HCM</div>
                        </div>
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
