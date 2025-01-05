import StarIconDefault from "@/assets/svg/icon/star.svg";
import StarIconHover from "@/assets/svg/icon/hover/star_hover.svg";
import Image from "next/image";

export function StarIcon() {
  return (
    <>
      <Image
        src={StarIconDefault}
        alt="Icon"
        width={24}
        height={24}
        className="absolute w-[23.6px] h-[23.6px] transition-all group-hover:opacity-0"
      />

      {/* Иконка при hover */}
      <Image
        src={StarIconHover}
        alt="Icon Hover"
        width={24}
        height={24}
        className="absolute w-[23.6px] h-[23.6px] transition-all opacity-0 group-hover:opacity-100"
      />
    </>
  );
}
