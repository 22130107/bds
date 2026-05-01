import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CanMuaPage() {
  return (
    <div className="text-black overflow-x-hidden" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div className="ml-auto mr-auto relative w-full md:max-w-[990px]">
        <Header />

        <div className="w-full px-4 py-6 md:px-0">
          {/* Breadcrumb */}
          <div className="text-[14px] mb-4">
            <Link href="/" className="text-[rgb(3,49,196)]">Trang chủ</Link>
            {" » "}
            <span className="font-bold text-[rgb(51,51,51)]">Cần mua BĐS</span>
          </div>

          <h1 className="text-[22px] font-bold text-[rgb(3,49,196)] mb-6 border-b-2 border-[rgb(3,49,196)] pb-2">
            Thông tin liên hệ — Cần mua BĐS
          </h1>

          <div className="bg-[rgb(239,244,253)] border border-[rgb(160,179,217)] rounded p-5 mb-6">
            <h2 className="text-[18px] font-bold text-[rgb(51,51,51)] mb-4">📞 Liên hệ tìm mua bất động sản</h2>
            <div className="space-y-3 text-[15px]">
              <div className="flex items-start gap-3">
                <span className="text-[18px]">📱</span>
                <div>
                  <div className="font-bold">Hotline hỗ trợ mua BĐS:</div>
                  <a href="tel:0941885555" className="text-[rgb(3,49,196)] text-[17px] font-bold">0941 885 555</a>
                  <span className="mx-2 text-gray-400">—</span>
                  <a href="tel:0988282646" className="text-[rgb(3,49,196)] text-[17px] font-bold">0988 282 646</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[18px]">📧</span>
                <div>
                  <div className="font-bold">Email:</div>
                  <a href="mailto:muabds@bds.com" className="text-[rgb(3,49,196)]">muabds@bds.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[18px]">🕐</span>
                <div>
                  <div className="font-bold">Giờ làm việc:</div>
                  <div>Thứ 2 – Thứ 7: 8:00 – 18:00</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[18px]">📍</span>
                <div>
                  <div className="font-bold">Địa chỉ:</div>
                  <div>123 Nguyễn Trãi, P. Bến Thành, Q.1, TP.HCM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded p-5">
            <h2 className="text-[16px] font-bold text-[rgb(51,51,51)] mb-3">Đăng tin cần mua BĐS</h2>
            <form className="space-y-3">
              <input type="text" placeholder="Họ và tên" className="w-full border border-gray-300 rounded px-3 py-2 text-[14px]" />
              <input type="tel" placeholder="Số điện thoại" className="w-full border border-gray-300 rounded px-3 py-2 text-[14px]" />
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-[14px] text-gray-600">
                <option value="">Loại BĐS cần mua</option>
                <option>Nhà phố / Thổ cư</option>
                <option>Chung cư</option>
                <option>Đất nền</option>
                <option>Biệt thự</option>
              </select>
              <input type="text" placeholder="Khu vực mong muốn" className="w-full border border-gray-300 rounded px-3 py-2 text-[14px]" />
              <input type="text" placeholder="Ngân sách (VD: 3 tỷ - 5 tỷ)" className="w-full border border-gray-300 rounded px-3 py-2 text-[14px]" />
              <textarea placeholder="Yêu cầu thêm..." rows={3} className="w-full border border-gray-300 rounded px-3 py-2 text-[14px]" />
              <button type="submit" className="w-full bg-[rgb(16,92,182)] text-white font-bold py-3 rounded text-[15px]">
                Gửi yêu cầu
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
