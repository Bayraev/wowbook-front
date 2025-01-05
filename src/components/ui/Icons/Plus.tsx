import PlusIconDefault from "@/assets/svg/icon/plus.svg";
import PlusIconHover from "@/assets/svg/icon/hover/plus_hover.svg";
import Image from "next/image";

export function PlusIcon() {
  return (
    <>
      <Image
        src={PlusIconDefault}
        alt="Icon"
        width={24}
        height={24}
        className="absolute w-[21.4px] h-[21.4px] transition-all group-hover:opacity-0"
      />

      {/* Иконка при hover */}
      <Image
        src={PlusIconHover}
        alt="Icon Hover"
        width={24}
        height={24}
        className="absolute w-[21.4px] h-[21.4px] transition-all opacity-0 group-hover:opacity-100"
      />
    </>
  );
}
