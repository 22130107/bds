import Link from "next/link";

const districts = [
  { slug: "quan-1", label: "Quận 1" },
  { slug: "quan-2", label: "Quận 2" },
  { slug: "quan-3", label: "Quận 3" },
  { slug: "quan-4", label: "Quận 4" },
  { slug: "quan-5", label: "Quận 5" },
  { slug: "quan-6", label: "Quận 6" },
  { slug: "quan-7", label: "Quận 7" },
  { slug: "quan-8", label: "Quận 8" },
  { slug: "quan-9", label: "Quận 9" },
  { slug: "quan-10", label: "Quận 10" },
  { slug: "quan-11", label: "Quận 11" },
  { slug: "quan-12", label: "Quận 12" },
  { slug: "binh-thanh", label: "Bình Thạnh" },
  { slug: "go-vap", label: "Gò Vấp" },
  { slug: "phu-nhuan", label: "Phú Nhuận" },
  { slug: "tan-binh", label: "Tân Bình" },
  { slug: "tan-phu", label: "Tân Phú" },
  { slug: "thu-duc", label: "Thủ Đức" },
  { slug: "binh-tan", label: "Bình Tân" },
  { slug: "cu-chi", label: "Củ Chi" },
  { slug: "hoc-mon", label: "Hóc Môn" },
  { slug: "binh-chanh", label: "Bình Chánh" },
  { slug: "nha-be", label: "Nhà Bè" },
  { slug: "can-gio", label: "Cần Giờ" },
];

export default function BrandSidebar() {
  return (
    <div className="w-[178px]">
      <h3 className="border font-bold h-[31px] bg-[rgb(254,241,172)] border-[rgb(255,182,75)] rounded-tl-[0.1875rem] rounded-tr-[0.1875rem] text-[rgb(200,61,20)] text-[15px] pt-[5px] pr-0 pb-0 pl-5">
        <span>Tìm theo khu vực</span>
      </h3>
      <div
        className="border-b border-l border-r bg-[rgb(255,255,229)] pt-[5px] pr-0 pb-[5px] pl-0"
        style={{
          borderRightColor: "rgb(255, 182, 75)",
          borderBottomColor: "rgb(255, 182, 75)",
          borderLeftColor: "rgb(255, 182, 75)",
        }}
      >
        <ul className="w-full">
          {districts.map((district) => (
            <li
              key={district.slug}
              className="bg-right bg-no-repeat list-none -mb-px relative min-h-3 pt-0 pr-0 pb-[2px] pl-0"
            >
              <Link
                href={`/oto/${district.slug}`}
                className="block font-bold text-[rgb(8,52,206)] text-[13px] min-h-[13px] pt-1 pr-[10px] pb-0 pl-5"
              >
                {district.label}
              </Link>
            </li>
          ))}
          <li
            className="bg-right bg-no-repeat border-b h-px list-none relative mb-[3px] min-h-3 pt-0 pr-0 pb-[2px] pl-0"
            style={{
              borderBottomStyle: "dotted",
              borderBottomColor: "rgb(255, 182, 75)",
            }}
          ></li>
          <li className="list-none -mb-px relative min-h-3 pt-0 pr-0 pb-[2px] pl-0">
            <Link
              href="/oto"
              className="bg-no-repeat block font-bold bg-[position:120px_1px] text-[rgb(200,61,20)] text-[13px] min-h-[13px] pt-1 pr-[10px] pb-0 pl-5"
              style={{
                backgroundImage:
                  'url("https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F93c88878ce72f076a597098e65dab372ef5414cb.gif?generation=1777600429042029&alt=media")',
              }}
            >
              Tất cả khu vực
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
