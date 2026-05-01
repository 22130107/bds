import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CompanyDetailPage() {
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
            <Link href="/salon-oto" className="text-[rgb(3,49,196)]">
              Công ty BĐS
            </Link>{" "}
            » <span className="font-bold">HOT Auto</span>
          </div>

          {/* Main content */}
          <div className="float-left w-[600px] min-h-[800px]">
            {/* Company info box */}
            <div className="border bg-[rgb(239,244,253)] border-[rgb(160,179,217)] p-[10px] mb-[10px]">
              <h1 className="font-bold text-[18px] text-[rgb(51,51,51)] mb-[10px]">
                HOT AUTO
              </h1>
              <div className="mb-[5px]">
                <span className="font-bold">Địa chỉ:</span> 118 Lê Văn Lương, Hà Nội
              </div>
              <div className="mb-[5px]">
                <span className="font-bold">Điện Thoại:</span> 0904718688 - 0915418669
              </div>
              <div className="mb-[5px]">
                Mua và bán các loại xe mới - cũ
              </div>
            </div>

            {/* Photo gallery */}
            <div className="border border-[rgb(204,204,204)] bg-white p-[10px] mb-[10px]">
              <h2 className="font-bold text-[16px] text-[rgb(51,51,51)] mb-[10px]">
                Một số hình ảnh về HOT Auto
              </h2>
              <div className="grid grid-cols-4 gap-2">
                <Image
                  src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fe50b486e8dcce321010e0a6d5598c576ca7bb514.jpg?generation=1777600429038521&alt=media"
                  alt="HOT Auto"
                  width={320}
                  height={240}
                  unoptimized
                  className="border border-[rgb(222,222,222)] w-full h-auto object-cover"
                />
                <Image
                  src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fe428d8d50ac7214cb347b7ac6c604f281e9dfda2.jpg?generation=1777600429044934&alt=media"
                  alt="HOT Auto"
                  width={90}
                  height={70}
                  unoptimized
                  className="border border-[rgb(222,222,222)] w-full h-auto object-cover"
                />
                <Image
                  src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F581f3eb650afd0c92a4907e95e673d148abfc280.jpg?generation=1777600429029302&alt=media"
                  alt="HOT Auto"
                  width={90}
                  height={70}
                  unoptimized
                  className="border border-[rgb(222,222,222)] w-full h-auto object-cover"
                />
                <Image
                  src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fa8de94a40a2a8b68368f78eddc0759ab93a03660.jpg?generation=1777600429034436&alt=media"
                  alt="HOT Auto"
                  width={90}
                  height={70}
                  unoptimized
                  className="border border-[rgb(222,222,222)] w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Properties list */}
            <div className="border border-[rgb(204,204,204)] bg-white mb-[10px]">
              <div className="border-b bg-[rgb(234,234,234)] px-[10px] py-[8px]" style={{ borderBottomColor: "rgb(204, 204, 204)" }}>
                <h2 className="font-bold text-[15px] text-[rgb(102,102,102)]">
                  Bất động sản đang bán tại HOT Auto
                </h2>
                <span className="float-right">Tổng: xe</span>
              </div>

              {/* Property items */}
              {[
                {
                  id: "6704252",
                  type: "Chung cư",
                  year: 2020,
                  name: "Căn hộ Vinhomes Central Park",
                  price: "5 Tỷ 200 Tr.",
                  location: "Q. Bình Thạnh",
                  img: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fe50b486e8dcce321010e0a6d5598c576ca7bb514.jpg?generation=1777600429038521&alt=media",
                  desc: "*Diện tích 85m², 2 phòng ngủ, 2 WC, đầy đủ nội thất cao cấp",
                  detail: "Căn hộ 2PN tại Vinhomes Central Park, view sông tuyệt đẹp...",
                },
                {
                  id: "6530522",
                  type: "Thổ cư",
                  year: 2018,
                  name: "Nhà phố Quận 1",
                  price: "18 Tỷ",
                  location: "Q.1",
                  img: "https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fe428d8d50ac7214cb347b7ac6c604f281e9dfda2.jpg?generation=1777600429044934&alt=media",
                  desc: "*Diện tích 4x15m, 1 trệt 3 lầu, hẻm xe hơi",
                  detail: "Nhà mặt tiền đường Nguyễn Trãi, vị trí đắc địa...",
                },
              ].map((property) => (
                <div
                  key={property.id}
                  className="border-b float-left w-full min-h-[131px] pt-[5px] pr-0 pb-[5px] pl-0"
                  style={{
                    borderBottomStyle: "dotted",
                    borderBottomColor: "rgb(222, 222, 222)",
                  }}
                >
                  <Link href={`/bat-dong-san-${property.id}`} className="text-[rgb(3,49,196)]">
                    <div className="float-left text-center w-[90px] h-[30px] text-black">
                      {property.type} &nbsp;<b className="font-bold text-center">{property.year}</b>
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
                        alt={property.name}
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
                      {property.desc} &nbsp;
                      <p className="text-left mt-[5px] mb-[5px]">{property.detail}</p>
                    </div>
                  </Link>
                  <div className="float-left text-left w-[182px] h-[90px] text-[rgb(85,85,85)] pt-0 pr-0 pb-0 pl-2">
                    LH: <b className="font-bold text-left">HOT Auto</b>&nbsp; 118 Lê Văn Lương, Hà Nội &nbsp; &nbsp; ĐT: 0904718688
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right sidebar */}
          <div className="float-left w-[380px] min-h-[800px] ml-[10px]">
            {/* Map */}
            <div className="border border-[rgb(255,182,75)] bg-[rgb(255,255,229)] mb-[10px]">
              <div className="bg-[rgb(254,241,172)] border-b border-[rgb(255,182,75)] px-[10px] py-[8px]">
                <h3 className="font-bold text-[rgb(200,61,20)] text-[14px]">
                  Bản đồ đường đi
                </h3>
              </div>
              <div className="p-[10px]">
                <div className="w-full h-[250px] bg-[rgb(229,227,223)] relative">
                  <Image
                    src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fe50b486e8dcce321010e0a6d5598c576ca7bb514.jpg?generation=1777600429038521&alt=media"
                    alt="Map"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-[10px]">
                  <Link
                    href="#"
                    className="inline-block bg-[rgb(255,182,75)] text-black font-bold py-[8px] px-[20px] hover:bg-[rgb(255,165,0)]"
                  >
                    Xem mới về
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="clear-both" />

          {/* Footer links */}
          <div className="border-t float-left w-full text-center pt-[15px] mt-[20px]" style={{ borderTopColor: "rgb(204, 204, 204)" }}>
            <Link href="/" className="text-[rgb(3,49,196)] px-[10px]">
              Trang chủ
            </Link>
            |
            <Link href="/gioi-thieu" className="text-[rgb(3,49,196)] px-[10px]">
              Giới thiệu
            </Link>
            |
            <Link href="/oto" className="text-[rgb(3,49,196)] px-[10px]">
              Bất động sản đang bán
            </Link>
            |
            <Link href="/salon-oto" className="text-[rgb(3,49,196)] px-[10px]">
              Bản đồ đường đi
            </Link>
            |
            <Link href="/lien-he" className="text-[rgb(3,49,196)] px-[10px]">
              Liên hệ
            </Link>
          </div>

          <div className="clear-both" />

          {/* Copyright */}
          <div className="float-left w-full text-center text-[rgb(85,85,85)] text-[12px] pt-[10px] pb-[20px]">
            <p>
              <b className="font-bold">HOT Auto</b> - Địa chỉ: 118 Lê Văn Lương, Hà Nội - Điện thoại: 0904718688 - 0915418669
            </p>
            <p className="mt-[5px]">
              Copyright Notice © 2006-2026{" "}
              <Link href="/" className="text-[rgb(3,49,196)]">
                Chuyên trang mua bán bất động sản - Bonbanh.com
              </Link>
            </p>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
