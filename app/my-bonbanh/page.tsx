import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TaiKhoanPage() {
  return (
    <div className="text-black overflow-x-hidden" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div className="ml-auto mr-auto relative w-full md:max-w-[990px]">
        <Header />

        <div className="w-full px-4 py-6 md:px-0">
          {/* Breadcrumb */}
          <div className="text-[14px] mb-4">
            <Link href="/" className="text-[rgb(3,49,196)]">Trang chủ</Link>
            {" » "}
            <span className="font-bold text-[rgb(51,51,51)]">Tài khoản</span>
          </div>

          <h1 className="text-[22px] font-bold text-[rgb(3,49,196)] mb-6 border-b-2 border-[rgb(3,49,196)] pb-2">
            Thông tin liên hệ — Tài khoản & Hỗ trợ
          </h1>

          <div className="bg-[rgb(239,244,253)] border border-[rgb(160,179,217)] rounded p-5 mb-6">
            <h2 className="text-[18px] font-bold text-[rgb(51,51,51)] mb-4">📞 Liên hệ hỗ trợ tài khoản</h2>
            <div className="space-y-3 text-[15px]">
              <div className="flex items-start gap-3">
                <span className="text-[18px]">📱</span>
                <div>
                  <div className="font-bold">Hotline hỗ trợ:</div>
                  <a href="tel:0247109799" className="text-[rgb(3,49,196)] text-[17px] font-bold">024-7109 7999</a>
                  <span className="mx-2 text-gray-400">—</span>
                  <a href="tel:0942727225" className="text-[rgb(3,49,196)] text-[17px] font-bold">094 2727 225</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[18px]">📧</span>
                <div>
                  <div className="font-bold">Email hỗ trợ:</div>
                  <a href="mailto:contact@bds.com" className="text-[rgb(3,49,196)]">contact@bds.com</a>
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
                  <div className="font-bold">Địa chỉ văn phòng:</div>
                  <div>123 Nguyễn Trãi, P. Bến Thành, Q.1, TP.HCM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Link href="/dang-nhap" className="bg-[rgb(16,92,182)] text-white font-bold py-4 rounded text-center text-[15px]">
              🔑 Đăng nhập
            </Link>
            <Link href="/dang-ky" className="bg-white border-2 border-[rgb(16,92,182)] text-[rgb(16,92,182)] font-bold py-4 rounded text-center text-[15px]">
              📝 Đăng ký
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded p-5">
            <h2 className="text-[16px] font-bold text-[rgb(51,51,51)] mb-3">Gửi yêu cầu hỗ trợ</h2>
            <form className="space-y-3">
              <input type="text" placeholder="Họ và tên" className="w-full border border-gray-300 rounded px-3 py-2 text-[14px]" />
              <input type="tel" placeholder="Số điện thoại" className="w-full border border-gray-300 rounded px-3 py-2 text-[14px]" />
              <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded px-3 py-2 text-[14px]" />
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-[14px] text-gray-600">
                <option value="">Chọn vấn đề cần hỗ trợ</option>
                <option>Quên mật khẩu</option>
                <option>Không đăng nhập được</option>
                <option>Vấn đề đăng tin</option>
                <option>Thanh toán dịch vụ</option>
                <option>Khác</option>
              </select>
              <textarea placeholder="Mô tả vấn đề..." rows={3} className="w-full border border-gray-300 rounded px-3 py-2 text-[14px]" />
              <button type="submit" className="w-full bg-[rgb(16,92,182)] text-white font-bold py-3 rounded text-[15px]">
                Gửi yêu cầu hỗ trợ
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
