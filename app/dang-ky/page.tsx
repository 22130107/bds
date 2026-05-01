import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DangKyPage() {
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
            » Đăng ký
          </div>

          {/* Main content */}
          <div className="border float-left w-[988px] bg-white border-[rgb(204,204,204)] p-5">
            <div className="mb-5">
              <h1 className="text-[20px] font-bold text-[rgb(51,51,51)] mb-2">
                Đăng ký thành viên
              </h1>
              <div className="text-right text-[rgb(255,0,0)]">
                * Bắt buộc nhập
              </div>
            </div>

            <form className="max-w-[700px]">
              {/* Provider selection */}
              <div className="mb-4">
                <label className="block mb-2">
                  <span className="text-[rgb(51,51,51)]">Bộ gõ Tiếng Việt</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="provider" value="off" className="mr-2" />
                    Off
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="provider" value="telex" defaultChecked className="mr-2" />
                    Telex
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="provider" value="vni" className="mr-2" />
                    VNI
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="provider" value="viqr" className="mr-2" />
                    VIQR
                  </label>
                </div>
              </div>

              {/* Region */}
              <div className="mb-4 flex items-center">
                <label className="w-[200px] text-right pr-4">
                  <span className="text-[rgb(255,0,0)]">*</span> Chọn khu vực sinh sống:
                </label>
                <select className="border border-[rgb(204,204,204)] px-2 py-1 w-[300px]">
                  <option>--Chọn khu vực sinh sống--</option>
                  <option>Hà Nội</option>
                  <option>TP HCM</option>
                  <option>Đà Nẵng</option>
                  <option>Hải Phòng</option>
                  <option>Cần Thơ</option>
                </select>
              </div>

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

              {/* Confirm Password */}
              <div className="mb-4 flex items-center">
                <label className="w-[200px] text-right pr-4">
                  <span className="text-[rgb(255,0,0)]">*</span> Xác nhận mật khẩu:
                </label>
                <input
                  type="password"
                  className="border border-[rgb(204,204,204)] px-2 py-1 w-[200px]"
                />
              </div>

              {/* Full name */}
              <div className="mb-4 flex items-center">
                <label className="w-[200px] text-right pr-4">
                  <span className="text-[rgb(255,0,0)]">*</span> Tên đầy đủ:
                </label>
                <input
                  type="text"
                  className="border border-[rgb(204,204,204)] px-2 py-1 w-[300px]"
                />
              </div>

              {/* Mobile */}
              <div className="mb-4 flex items-center">
                <label className="w-[200px] text-right pr-4">
                  <span className="text-[rgb(255,0,0)]">*</span> Mobile:
                </label>
                <input
                  type="text"
                  className="border border-[rgb(204,204,204)] px-2 py-1 w-[150px]"
                />
              </div>

              {/* Phone */}
              <div className="mb-4 flex items-center">
                <label className="w-[200px] text-right pr-4">
                  Số ĐT khác:
                </label>
                <input
                  type="text"
                  className="border border-[rgb(204,204,204)] px-2 py-1 w-[150px]"
                />
              </div>

              {/* Email */}
              <div className="mb-4 flex items-center">
                <label className="w-[200px] text-right pr-4">
                  Email:
                </label>
                <input
                  type="email"
                  className="border border-[rgb(204,204,204)] px-2 py-1 w-[200px]"
                />
              </div>

              {/* Address */}
              <div className="mb-4 flex items-center">
                <label className="w-[200px] text-right pr-4">
                  <span className="text-[rgb(255,0,0)]">*</span> Địa chỉ:
                </label>
                <input
                  type="text"
                  className="border border-[rgb(204,204,204)] px-2 py-1 w-[400px]"
                />
              </div>

              {/* Terms */}
              <div className="mb-4 flex items-center">
                <div className="w-[200px]"></div>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" defaultChecked />
                  <span>
                    Tôi đồng ý với{" "}
                    <Link href="/dieu-khoan" className="text-[rgb(3,49,196)]">
                      điều khoản
                    </Link>{" "}
                    và{" "}
                    <Link href="/quy-dinh" className="text-[rgb(3,49,196)]">
                      Các quy định
                    </Link>
                    . của Bonbanh.com.
                  </span>
                </label>
              </div>

              {/* Submit button */}
              <div className="flex items-center">
                <div className="w-[200px]"></div>
                <button
                  type="submit"
                  className="bg-[rgb(0,149,221)] text-white font-bold px-8 py-2 rounded hover:bg-[rgb(0,130,200)]"
                >
                  Đăng ký
                </button>
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

