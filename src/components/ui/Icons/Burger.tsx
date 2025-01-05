import BurgerIconDefault from "@/assets/svg/icon/burger.svg";
import BurgerIconHover from "@/assets/svg/icon/hover/burger_hover.svg";
import Image from "next/image";

export function BurgerIcon() {
  return (
    <>
      <Image
        src={BurgerIconDefault}
        alt="Icon"
        width={24}
        height={24}
        className="absolute w-[22.7px] h-[16px] transition-all group-hover:opacity-0"
      />

      {/* Иконка при hover */}
      <Image
        src={BurgerIconHover}
        alt="Icon Hover"
        width={24}
        height={24}
        className="absolute w-[22.7px] h-[16px] transition-all opacity-0 group-hover:opacity-100"
      />
    </>
  );
}
