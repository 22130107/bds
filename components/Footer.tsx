import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full md:w-[990px] min-h-[130px] mt-[20px] mb-[10px] bg-[rgb(244,250,252)] px-3 md:px-0">
      <div className="w-full text-center py-4">
        <div className="text-center mt-[10px] text-[rgb(7,159,208)] text-[12px] md:text-[14px]">
          <Link href="/" className="px-2 py-1 inline-block">
            Trang chủ
          </Link>
          <span className="px-1">|</span>
          <Link
            href="/quy-che-hoat-dong/#dangtin"
            className="px-2 py-1 inline-block"
          >
            Quy định đăng tin
          </Link>
          <span className="px-1">|</span>
          <Link
            href="/quy-che-hoat-dong"
            className="px-2 py-1 inline-block"
          >
            Quy chế hoạt động
          </Link>
          <span className="px-1">|</span>
          <Link
            href="/chinh-sach-quyen-rieng-tu"
            className="px-2 py-1 inline-block"
          >
            Bảo mật
          </Link>
          <span className="px-1">|</span>
          <Link
            href="/gioi-thieu"
            className="px-2 py-1 inline-block"
          >
            Trợ giúp
          </Link>
          <span className="px-1">|</span>
          <Link
            href="/lien-he"
            className="px-2 py-1 inline-block"
          >
            Liên hệ
          </Link>
        </div>
        <div className="mt-[20px] text-[rgb(85,85,85)] leading-[18px] text-[11px] md:text-[12px]">
          <div className="text-center text-black mb-3">
            <strong className="font-normal">
              Bonbanh.com - Chuyên trang mua bán ô tô uy tín nhất Việt Nam từ
              năm 2006.
            </strong>
            <br className="md:hidden" />
            <span className="hidden md:inline">&nbsp;</span>
            Điện thoại: 024-7109 7999 . Email: contact@bonbanh.com.
            <br />
            <span className="inline-block px-2 py-1">
              Hotline: 094 2727 225
            </span>
            <br />
            <span className="text-[rgb(255,0,0)] inline-block px-2 py-1">
              Bonbanh không bán xe trực tiếp, quý khách mua xe vui lòng liên hệ
              trực tiếp người đăng tin.
            </span>
            <br />
            Copyright © 2006-2026{" "}
            <Link href="/" className="text-[rgb(3,49,196)]">
              Bonbanh.com
            </Link>{" "}
            - <b className="font-normal">Công ty cổ phần Kypernet Việt Nam.</b>{" "}
            Mã số doanh nghiệp: 0101833960
          </div>
          <div className="text-center mt-3">
            <a
              href="http://online.gov.vn/Home/WebDetails/8602"
              className="text-[rgb(3,49,196)] inline-block"
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
    </div>
  );
}
