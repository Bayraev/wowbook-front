import FireIconDefault from "@/assets/svg/icon/fire.svg";
import FireIconHover from "@/assets/svg/icon/hover/fire_hover.svg";
import Image from "next/image";

export function FireIcon() {
  return (
    <>
      <Image
        src={FireIconDefault}
        alt="Icon"
        width={24}
        height={24}
        className="absolute w-[19.5px] h-[23px] transition-all group-hover:opacity-0"
      />

      {/* Иконка при hover */}
      <Image
        src={FireIconHover}
        alt="Icon Hover"
        width={24}
        height={24}
        className="absolute w-[19.5px] h-[23px] transition-all opacity-0 group-hover:opacity-100"
      />
    </>
  );
}
