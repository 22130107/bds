import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-[990px] h-[130px] mt-[20px] mb-[10px] bg-[rgb(244,250,252)]">
      <div className="float-left w-5 h-[130px]"></div>
      <div className="float-left text-center w-[950px] h-[130px]">
        <div className="text-center mt-[10px] text-[rgb(7,159,208)]">
          <Link href="/" className="pt-[5px] pr-[10px] pb-[5px] pl-[10px]">
            Trang chủ
          </Link>
          <span className="pt-[5px] pr-[10px] pb-[5px] pl-[10px]">|</span>
          <Link
            href="/quy-che-hoat-dong/#dangtin"
            className="pt-[5px] pr-[10px] pb-[5px] pl-[10px]"
          >
            Quy định đăng tin
          </Link>
          <span className="pt-[5px] pr-[10px] pb-[5px] pl-[10px]">|</span>
          <Link
            href="/quy-che-hoat-dong"
            className="pt-[5px] pr-[10px] pb-[5px] pl-[10px]"
          >
            Quy chế hoạt động
          </Link>
          <span className="pt-[5px] pr-[10px] pb-[5px] pl-[10px]">|</span>
          <Link
            href="/chinh-sach-quyen-rieng-tu"
            className="pt-[5px] pr-[10px] pb-[5px] pl-[10px]"
          >
            Bảo mật
          </Link>
          <span className="pt-[5px] pr-[10px] pb-[5px] pl-[10px]">|</span>
          <Link
            href="/gioi-thieu"
            className="pt-[5px] pr-[10px] pb-[5px] pl-[10px]"
          >
            Trợ giúp
          </Link>
          <span className="pt-[5px] pr-[10px] pb-[5px] pl-[10px]">|</span>
          <Link
            href="/lien-he"
            className="pt-[5px] pr-[10px] pb-[5px] pl-[10px]"
          >
            Liên hệ
          </Link>
        </div>
        <div className="text-center mt-[30px] text-[rgb(85,85,85)] leading-[18px]">
          <div className="float-left text-center w-[746px] text-black">
            <strong className="font-normal">
              Bonbanh.com - Chuyên trang mua bán ô tô uy tín nhất Việt Nam từ
              năm 2006.
            </strong>
            &nbsp; Điện thoại: 024-7109 7999 . Email: contact@bonbanh.com.
            <span className="pt-[5px] pr-[10px] pb-[5px] pl-[10px]">
              Hotline: 094 2727 225
            </span>
            <br />
            <span className="text-[rgb(255,0,0)] pt-[5px] pr-[10px] pb-[5px] pl-[10px]">
              Bonbanh không bán xe trực tiếp, quý khách mua xe vui lòng liên hệ
              trực tiếp người đăng tin. &nbsp;
            </span>
            Copyright © 2006-2026{" "}
            <Link href="/" className="text-[rgb(3,49,196)]">
              Bonbanh.com
            </Link>{" "}
            - <b className="font-normal">Công ty cổ phần Kypernet Việt Nam.</b>{" "}
            Mã số doanh nghiệp: 0101833960
          </div>
          <div className="float-right text-center w-[200px] mt-[3px] text-black">
            <a
              href="http://online.gov.vn/Home/WebDetails/8602"
              className="text-[rgb(3,49,196)]"
            >
              <Image
                src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fbbd8e505c6cd76b58145814623ce76066eb4c535.gif?generation=1777600429602606&alt=media"
                alt="Đã thông báo Bộ Công Thương"
                width={88}
                height={31}
                unoptimized
              />
            </a>
          </div>
        </div>
      </div>
      <div className="float-right w-5 h-[130px]"></div>
    </div>
  );
}
