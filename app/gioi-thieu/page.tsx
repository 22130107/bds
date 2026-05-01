import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HuongDanPage() {
  return (
    <div className="text-black overflow-x-hidden" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div className="ml-auto mr-auto relative w-full md:max-w-[990px]">
        <Header />
        <div className="w-full px-4 py-6 md:px-0">
          <div className="text-[14px] mb-4">
            <Link href="/" className="text-[rgb(3,49,196)]">Trang chủ</Link>
            {" » "}
            <span className="font-bold text-[rgb(51,51,51)]">Hướng dẫn sử dụng</span>
          </div>
          <h1 className="text-[22px] font-bold text-[rgb(3,49,196)] mb-6 border-b-2 border-[rgb(3,49,196)] pb-2">
            Hướng dẫn sử dụng BDS.com
          </h1>
          <div className="bg-[rgb(239,244,253)] border border-[rgb(160,179,217)] rounded p-5 mb-4 space-y-4 text-[15px]">
            <div>
              <h2 className="font-bold text-[16px] mb-2">📌 Đăng tin bán BĐS</h2>
              <p>Đăng ký tài khoản, đăng nhập và chọn "Đăng tin bán" để đăng tin bất động sản của bạn.</p>
            </div>
            <div>
              <h2 className="font-bold text-[16px] mb-2">🔍 Tìm kiếm BĐS</h2>
              <p>Sử dụng thanh tìm kiếm hoặc bộ lọc để tìm bất động sản theo khu vực, loại hình, giá cả.</p>
            </div>
            <div>
              <h2 className="font-bold text-[16px] mb-2">📞 Liên hệ người bán</h2>
              <p>Bấm vào số điện thoại hoặc nút "Liên hệ ngay" để kết nối trực tiếp với người bán.</p>
            </div>
            <div>
              <h2 className="font-bold text-[16px] mb-2">⭐ Tài khoản thành viên</h2>
              <p>Đăng ký tài khoản để lưu tin, theo dõi BĐS yêu thích và nhận thông báo mới nhất.</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link href="/lien-he" className="inline-block bg-[rgb(16,92,182)] text-white font-bold py-3 px-8 rounded text-[15px]">
              Liên hệ hỗ trợ
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
