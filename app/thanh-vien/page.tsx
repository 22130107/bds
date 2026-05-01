"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ThanhVienPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [regFullName, setRegFullName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regMobile, setRegMobile] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regAddress, setRegAddress] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [inputMethod, setInputMethod] = useState("telex");

  return (
    <div
      className="h-full text-black text-[16px] leading-[normal]"
      style={{
        fontFamily: '"Times New Roman"',
        textDecoration: "none",
        width: "1920px",
        transform: "scale(1)",
        margin: "auto",
      }}
    >
      <div
        className="font-thin h-full bg-white text-[14px] leading-[14px]"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        <div className="ml-auto mr-auto relative w-[990px] text-[12px]">
          <Header />

          {/* Breadcrumb */}
          <div className="box-content float-left w-[988px] text-[14px] pt-[5px] pr-0 pb-[5px] pl-0">
            <Link href="/" className="text-[rgb(3,49,196)]">
              Trang chủ
            </Link>{" "}
            » Thành viên
          </div>

          {/* Notice */}
          <div className="box-content pt-0 pr-5 pb-0 pl-5">
            <span className="font-bold text-[rgb(255,0,0)]">Thông báo:</span>
            <p className="text-left mt-[15.96px] mb-[15.96px] text-[rgb(0,0,139)] leading-[18px]">
              Để đăng tin bạn phải là thành viên của Bonbanh.com. &nbsp; Nếu
              bạn đã là thành viên xin mời bạn đăng nhập vào hệ thống. &nbsp;
              Nếu bạn chưa là thành viên xin mời bạn đăng ký tài khoản ( hoàn
              toàn miễn phí)
            </p>
          </div>

          {/* Login form */}
          <div className="border box-content float-left w-[350px] h-[560px] mr-[15px] mb-[20px] border-[rgb(185,215,233)]">
            <div
              className="border-b box-content float-left text-right w-[328px] h-[25px] mt-[20px] ml-[10px] mr-[10px] mb-[15px]"
              style={{
                borderBottomStyle: "dotted",
                borderBottomColor: "rgb(108, 170, 208)",
              }}
            >
              <h2 className="box-content float-left font-bold text-right text-[16px] pt-[3px] pr-0 pb-[3px] pl-0">
                Đăng nhập hệ thống
              </h2>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="w-[98%] mt-[10px] ml-[2px]">
                <div className="box-content float-left font-bold w-[110px] pt-[3px] pr-0 pb-0 pl-0">
                  <label>
                    <span
                      className="font-thin text-[rgb(255,0,0)] text-[11px] leading-[normal]"
                      style={{ fontFamily: "Tahoma" }}
                    >
                      *
                    </span>
                    &nbsp; Tên truy cập:
                  </label>
                </div>
                <div className="box-content float-left pt-0 pr-0 pb-0 pl-[10px]">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border box-content inline-block overflow-clip w-40 h-[22px] bg-white border-[rgb(204,204,204)] text-[rgb(51,51,51)] text-[14px] leading-[normal]"
                    style={{ fontFamily: "Arial" }}
                  />
                </div>
              </div>
              <div className="w-[98%] mt-[10px] ml-[2px]">
                <div className="box-content float-left font-bold w-[110px] pt-[3px] pr-0 pb-0 pl-0">
                  <label>
                    <span
                      className="font-thin text-[rgb(255,0,0)] text-[11px] leading-[normal]"
                      style={{ fontFamily: "Tahoma" }}
                    >
                      *
                    </span>
                    &nbsp; Mật khẩu:
                  </label>
                </div>
                <div className="box-content float-left pt-0 pr-0 pb-0 pl-[10px]">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border box-content inline-block overflow-clip w-40 h-[22px] bg-white border-[rgb(204,204,204)] text-[rgb(51,51,51)] text-[14px] leading-[normal]"
                    style={{ fontFamily: "Arial" }}
                  />
                </div>
              </div>
              <div className="box-content text-center pt-5 pr-0 pb-5 pl-0">
                <button
                  type="submit"
                  className="border inline-block font-normal overflow-clip text-center whitespace-pre bg-[rgb(2,141,227)] border-black/0 text-white text-[16px] leading-[normal] pt-[5px] pr-[15px] pb-[5px] pl-[15px] rounded-[0.1875rem] cursor-pointer"
                >
                  Đăng nhập
                </button>{" "}
                <span className="relative text-center left-5 top-[-10px]">
                  <Link
                    href="/quen-mat-khau"
                    className="text-center text-[rgb(3,49,196)]"
                  >
                    Quên mật khẩu ?
                  </Link>
                </span>
              </div>

              <div
                className="border-b box-content float-left text-right w-[328px] h-[25px] mt-[20px] ml-[10px] mr-[10px] mb-[15px]"
                style={{
                  borderBottomStyle: "dotted",
                  borderBottomColor: "rgb(108, 170, 208)",
                }}
              >
                <h2 className="box-content float-left font-bold text-right text-[16px] pt-[3px] pr-0 pb-[3px] pl-0">
                  Lợi ích khi là thành viên của bonbanh.com
                </h2>
              </div>

              <ul className="box-content leading-[30px] pt-0 pr-0 pb-0 pl-5">
                <li className="list-none">Đăng tin mua/ bán BĐS miễn phí</li>
                <li className="list-none">
                  Trao đổi thông tin với các thành viên khác
                </li>
                <li className="list-none">
                  Sử dụng rất nhiều tiện ích của bonbanh.com
                </li>
              </ul>
            </form>
          </div>

          {/* Register form */}
          <div className="border box-content float-left w-[620px] h-[560px] border-[rgb(185,215,233)]">
            <div
              className="border-b box-content float-left text-right w-[550px] h-[25px] mt-[20px] ml-[10px] mr-[10px] mb-[15px]"
              style={{
                borderBottomStyle: "dotted",
                borderBottomColor: "rgb(108, 170, 208)",
              }}
            >
              <h2 className="box-content float-left font-bold text-right text-[16px] pt-[3px] pr-0 pb-[3px] pl-0">
                Đăng ký thành viên
              </h2>
              <span
                className="text-right text-[rgb(255,0,0)]"
                style={{ fontFamily: "Tahoma" }}
              >
                *
              </span>{" "}
              Bắt buộc nhập
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mr-auto ml-[20px] bg-white">
                {/* Input method */}
                <div className="box-content float-left ml-[100px] pt-0 pr-0 pb-[15px] pl-0">
                  <span className="box-content block float-left pt-0 pr-[15px] pb-0 pl-0">
                    Bộ gõ Tiếng Việt
                  </span>
                  {["Off", "Telex", "Vni", "VIQR"].map((method) => (
                    <span
                      key={method}
                      className="box-content block float-left pt-0 pr-[15px] pb-0 pl-0"
                    >
                      <input
                        type="radio"
                        name="inputMethod"
                        checked={inputMethod === method.toLowerCase()}
                        onChange={() => setInputMethod(method.toLowerCase())}
                        className="inline-block"
                      />
                      {method}
                    </span>
                  ))}
                </div>

                {/* Region select */}
                <fieldset className="min-w-min mt-[12px] ml-[7.2px] mr-[7.2px] mb-[12px]">
                  <div className="w-[98%] mt-[10px] ml-[2px]">
                    <div className="float-left w-[260px] mr-[6px] leading-[19.2px]">
                      <h3 className="font-bold text-[14.04px]">
                        <span
                          className="font-thin text-[rgb(255,0,0)] text-[11px] leading-[normal]"
                          style={{ fontFamily: "Tahoma" }}
                        >
                          *
                        </span>
                        &nbsp; Chọn khu vực sinh sống:
                      </h3>
                    </div>
                    <div className="box-content float-left pt-0 pr-0 pb-0 pl-[10px]">
                      <select className="items-center border inline-block font-normal whitespace-pre bg-white border-[rgb(118,118,118)] text-[rgb(51,51,51)] text-[13px] leading-[normal]">
                        <option value="">--Chọn khu vực sinh sống--</option>
                        <option value="hanoi">Hà Nội</option>
                        <option value="hcm">TP. Hồ Chí Minh</option>
                        <option value="danang">Đà Nẵng</option>
                        <option value="other">Tỉnh thành khác</option>
                      </select>
                    </div>
                  </div>
                </fieldset>

                {/* Form fields */}
                <div className="overflow-hidden">
                  <fieldset className="min-w-min m-[5px]">
                    {[
                      {
                        label: "Tên truy cập:",
                        required: true,
                        type: "text",
                        value: regUsername,
                        onChange: setRegUsername,
                        width: "w-40",
                        bg: "bg-white",
                      },
                      {
                        label: "Mật khẩu:",
                        required: true,
                        type: "password",
                        value: regPassword,
                        onChange: setRegPassword,
                        width: "w-40",
                        bg: "bg-white",
                      },
                      {
                        label: "Xác nhận mật khẩu:",
                        required: true,
                        type: "password",
                        value: regConfirmPassword,
                        onChange: setRegConfirmPassword,
                        width: "w-40",
                        bg: "bg-white",
                      },
                      {
                        label: "Tên đầy đủ:",
                        required: true,
                        type: "text",
                        value: regFullName,
                        onChange: setRegFullName,
                        width: "w-60",
                        bg: "bg-[rgb(255,255,160)]",
                      },
                      {
                        label: "Email:",
                        required: false,
                        type: "text",
                        value: regEmail,
                        onChange: setRegEmail,
                        width: "w-40",
                        bg: "bg-[rgb(255,255,160)]",
                      },
                      {
                        label: "Mobile:",
                        required: true,
                        type: "text",
                        value: regMobile,
                        onChange: setRegMobile,
                        width: "w-[100px]",
                        bg: "bg-white",
                      },
                      {
                        label: "Số ĐT khác:",
                        required: false,
                        type: "text",
                        value: regPhone,
                        onChange: setRegPhone,
                        width: "w-[100px]",
                        bg: "bg-white",
                      },
                      {
                        label: "Địa chỉ:",
                        required: true,
                        type: "text",
                        value: regAddress,
                        onChange: setRegAddress,
                        width: "w-[250px]",
                        bg: "bg-white",
                      },
                    ].map((field) => (
                      <div
                        key={field.label}
                        className="w-[98%] mt-[10px] ml-[2px]"
                      >
                        <div className="box-content float-left text-right w-[145px] text-[13px] pt-[3px] pr-0 pb-0 pl-0">
                          <label className="text-right">
                            {field.required && (
                              <span
                                className="text-right text-[rgb(255,0,0)] text-[11px] leading-[normal]"
                                style={{ fontFamily: "Tahoma" }}
                              >
                                *
                              </span>
                            )}
                            &nbsp; {field.label}
                          </label>
                        </div>
                        <div className="box-content float-left pt-0 pr-0 pb-0 pl-[10px]">
                          <input
                            type={field.type}
                            value={field.value}
                            onChange={(e) => field.onChange(e.target.value)}
                            className={`border box-content inline-block overflow-clip ${field.width} h-[22px] ${field.bg} border-[rgb(204,204,204)] text-[rgb(51,51,51)] text-[14px] leading-[normal]`}
                            style={{ fontFamily: "Arial" }}
                          />
                        </div>
                      </div>
                    ))}
                  </fieldset>
                </div>

                {/* Terms and submit */}
                <div className="text-center">
                  <p className="text-center mt-[15.96px] mb-[15.96px]">
                    <label className="text-center">
                      <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className="inline-block"
                      />{" "}
                      Tôi đồng ý với{" "}
                      <Link
                        href="/quy-dinh"
                        className="text-center text-[rgb(0,51,102)]"
                      >
                        điều khoản
                      </Link>{" "}
                      và{" "}
                      <Link
                        href="/quy-dinh"
                        className="text-center text-[rgb(0,51,102)]"
                      >
                        Các quy định
                      </Link>
                      ; của Bonbanh.com.
                    </label>
                  </p>
                  <button
                    type="submit"
                    className="border inline-block font-normal overflow-clip text-center whitespace-pre bg-[rgb(2,141,227)] border-black/0 text-white text-[16px] leading-[normal] pt-[5px] pr-[15px] pb-[5px] pl-[15px] rounded-[0.1875rem] cursor-pointer"
                  >
                    Đăng ký
                  </button>
                </div>
                <br />
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
