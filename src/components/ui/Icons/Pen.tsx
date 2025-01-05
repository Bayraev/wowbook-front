import PenIconDefault from "@/assets/svg/icon/pen.svg";
import PenIconHover from "@/assets/svg/icon/hover/pen_hover.svg";
import Image from "next/image";

export function PenIcon() {
  return (
    <>
      <Image
        src={PenIconDefault}
        alt="Icon"
        width={24}
        height={24}
        className="absolute w-[20px] h-[20px] transition-all group-hover:opacity-0"
      />

      {/* Иконка при hover */}
      <Image
        src={PenIconHover}
        alt="Icon Hover"
        width={24}
        height={24}
        className="absolute w-[20px] h-[20px] transition-all opacity-0 group-hover:opacity-100"
      />
    </>
  );
}
