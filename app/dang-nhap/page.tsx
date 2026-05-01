import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DangNhapPage() {
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
          <div className="float-left w-[988px] text-[14px] pt-[5px] pr-0 pb-[5px] pl-0">
            <Link href="/" className="text-[rgb(3,49,196)]">
              Trang chủ
            </Link>{" "}
            » Đăng nhập
          </div>

          {/* Main content */}
          <div className="border float-left w-[988px] bg-white border-[rgb(204,204,204)] p-5">
            <div className="mb-5">
              <h1 className="text-[20px] font-bold text-[rgb(51,51,51)] mb-2">
                Đăng nhập hệ thống
              </h1>
              <div className="text-right text-[rgb(255,0,0)]">
                * Bắt buộc nhập
              </div>
            </div>

            <form className="max-w-[700px]">
              {/* Username */}
              <div className="mb-4 flex items-center">
                <label className="w-[200px] text-right pr-4">
                  <span className="text-[rgb(255,0,0)]">*</span> Tên truy cập:
                </label>
                <input
                  type="text"
                  className="border border-[rgb(204,204,204)] px-2 py-1 w-[200px]"
                />
              </div>

              {/* Password */}
              <div className="mb-4 flex items-center">
                <label className="w-[200px] text-right pr-4">
                  <span className="text-[rgb(255,0,0)]">*</span> Mật khẩu:
                </label>
                <input
                  type="password"
                  className="border border-[rgb(204,204,204)] px-2 py-1 w-[200px]"
                />
              </div>

              {/* Remember me */}
              <div className="mb-4 flex items-center">
                <div className="w-[200px]"></div>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Ghi nhớ đăng nhập</span>
                </label>
              </div>

              {/* Submit button and forgot password */}
              <div className="flex items-center">
                <div className="w-[200px]"></div>
                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    className="bg-[rgb(0,149,221)] text-white font-bold px-8 py-2 rounded hover:bg-[rgb(0,130,200)]"
                  >
                    Đăng nhập
                  </button>
                  <Link href="/quen-mat-khau" className="text-[rgb(3,49,196)]">
                    Quên mật khẩu?
                  </Link>
                </div>
              </div>

              {/* Register link */}
              <div className="mt-8 pt-4 border-t border-[rgb(204,204,204)]">
                <div className="flex items-center">
                  <div className="w-[200px] text-right pr-4">
                    Chưa có tài khoản?
                  </div>
                  <Link
                    href="/dang-ky"
                    className="text-[rgb(3,49,196)] font-bold"
                  >
                    Đăng ký ngay
                  </Link>
                </div>
              </div>
            </form>
          </div>

          <div className="clear-both" />
          <Footer />
        </div>
      </div>
    </div>
  );
}
