import InfoIconDefault from "@/assets/svg/icon/info.svg";
import InfoIconHover from "@/assets/svg/icon/hover/info_hover.svg";
import Image from "next/image";

export function InfoIcon() {
  return (
    <>
      <Image
        src={InfoIconDefault}
        alt="Icon"
        width={24}
        height={24}
        className="absolute w-[13px] h-[23px] transition-all group-hover:opacity-0"
      />

      {/* Иконка при hover */}
      <Image
        src={InfoIconHover}
        alt="Icon Hover"
        width={24}
        height={24}
        className="absolute w-[13px] h-[23px] transition-all opacity-0 group-hover:opacity-100"
      />
    </>
  );
}
