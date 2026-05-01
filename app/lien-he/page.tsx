import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LienHePage() {
  return (
    <div className="text-black overflow-x-hidden" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div className="ml-auto mr-auto relative w-full md:max-w-[990px]">
        <Header />
        <div className="w-full px-4 py-6 md:px-0">
          <div className="text-[14px] mb-4">
            <Link href="/" className="text-[rgb(3,49,196)]">Trang chủ</Link>
            {" » "}
            <span className="font-bold text-[rgb(51,51,51)]">Liên hệ</span>
          </div>
          <h1 className="text-[22px] font-bold text-[rgb(3,49,196)] mb-6 border-b-2 border-[rgb(3,49,196)] pb-2">
            Liên hệ BDS.com
          </h1>
          <div className="bg-[rgb(239,244,253)] border border-[rgb(160,179,217)] rounded p-5 mb-6">
            <h2 className="text-[18px] font-bold text-[rgb(51,51,51)] mb-4">📞 Thông tin liên hệ</h2>
            <div className="space-y-3 text-[15px]">
              <div className="flex items-start gap-3">
                <span>📱</span>
                <div>
                  <div className="font-bold">Hotline:</div>
                  <a href="tel:0247109799" className="text-[rgb(3,49,196)] text-[17px] font-bold">024-7109 7999</a>
                  <span className="mx-2 text-gray-400">—</span>
                  <a href="tel:0942727225" className="text-[rgb(3,49,196)] text-[17px] font-bold">094 2727 225</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span>📧</span>
                <div>
                  <div className="font-bold">Email:</div>
                  <a href="mailto:contact@bds.com" className="text-[rgb(3,49,196)]">contact@bds.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span>📍</span>
                <div>
                  <div className="font-bold">Địa chỉ:</div>
                  <div>123 Nguyễn Trãi, P. Bến Thành, Q.1, TP.HCM</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span>🕐</span>
                <div>
                  <div className="font-bold">Giờ làm việc:</div>
                  <div>Thứ 2 – Thứ 7: 8:00 – 18:00</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded p-5">
            <h2 className="text-[16px] font-bold mb-3">Gửi tin nhắn cho chúng tôi</h2>
            <form className="space-y-3">
              <input type="text" placeholder="Họ và tên" className="w-full border border-gray-300 rounded px-3 py-2 text-[14px]" />
              <input type="tel" placeholder="Số điện thoại" className="w-full border border-gray-300 rounded px-3 py-2 text-[14px]" />
              <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded px-3 py-2 text-[14px]" />
              <textarea placeholder="Nội dung..." rows={4} className="w-full border border-gray-300 rounded px-3 py-2 text-[14px]" />
              <button type="submit" className="w-full bg-[rgb(16,92,182)] text-white font-bold py-3 rounded text-[15px]">
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
