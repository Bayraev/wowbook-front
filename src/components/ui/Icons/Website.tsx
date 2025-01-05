import WebsiteIconDefault from "@/assets/svg/icon/website.svg";
import WebsiteIconHover from "@/assets/svg/icon/hover/website_hover.svg";
import Image from "next/image";

export function WebsiteIcon() {
  return (
    <>
      <Image
        src={WebsiteIconDefault}
        alt="Icon"
        width={24}
        height={24}
        className="absolute w-[26.9px] h-[26.9px] transition-all group-hover:opacity-0"
      />

      {/* Иконка при hover */}
      <Image
        src={WebsiteIconHover}
        alt="Icon Hover"
        width={24}
        height={24}
        className="absolute w-[26.9px] h-[26.9px] transition-all opacity-0 group-hover:opacity-100"
      />
    </>
  );
}
